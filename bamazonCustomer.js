var inquirer = require("inquirer");

var mysql = require("mysql");

var totalCost;

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "password",
  database: "Bamazondb"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
});

function inventory() {
  connection.query("SELECT * FROM products", function(err, res) {
    if (err) throw err;
    console.log("Available products");
    console.log("=========================");
    for (i = 0; i < res.length; i++) {
      console.log(
        "Product ID:" +
          res[i].product_id +
          "   Product Name: " +
          res[i].product_name +
          "   Department Name: " +
          res[i].department_name +
          "   Price: " +
          "$" +
          res[i].price +
          "   Quantity in Stock: " +
          res[i].stock_quantity
      );
      console.log(
        "----------------------------------------------------------------------------------------------------"
      );
    }

    console.log("=========================");
    inquiry(res);
  });
}
function inquiry(res) {
    inquirer
        .prompt([
            {
                name: "product_id",
                type: "input",
                message: "Enter the Product ID you wish to buy: ", 
                validate: function (value) {
                    var valid = value.match(/^[0-9]*$/)
                    if (valid) {
                        if(valid <= res.length) {
                            return true
                        } else {
                            return "This Product ID does not exist!"
                        }
                    } else {
                        return "Please enter a valid Product ID"
                    }
                }
            },
            {
                name: "quantityOrdered",
                message: "How many would you like to buy?: ",
                validate: function (value) {
                    var valid = value.match(/^[0-9]*$/)
                    if (valid) {
                        return true
                    } else {
                        return "Please enter a valid Number"
                    }
                }
            }
        ])
        .then(function (answer) {
            connection.query("SELECT * FROM products WHERE product_id = ?",
                [answer.product_id],
                function (err, res) {
                    if (answer.quantityOrdered > res[0].stock_quantity) {
                        console.log("==========================================");
                        console.log("Insufficient quantity!");
                        console.log("==========================================");
                        nextTransaction();
                    }
                    else {
                        totalCost = res[0].price * answer.quantityOrdered;
                        console.log("==========================================");
                        console.log("Thank you for your purchase");
                        console.log("Your Total Cost is $ " + totalCost);
                        console.log("==========================================");

                        connection.query("UPDATE products SET ? WHERE ?", [
                            {
                                stock_quantity: res[0].stock_quantity - answer.quantityOrdered
                            }, {
                                product_id: answer.product_id
                            }], function (err, res) { });
                        nextTransaction();
                    }
                })
        }

        );
};

function nextTransaction() {
    inquirer.prompt([{
        type: "confirm",
        name: "another",
        message: "Would you like to purchase another Product ?"
    }]).then(function (answer) {
        if (answer.another) {
            inventory()
        }
        else {
            console.log("==========================================");
            console.log("Thank you for shopping! Please come again!");
            console.log("==========================================");
            connection.end();
        }
    })
};
inventory();
