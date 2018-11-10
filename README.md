Node.js & MySQL

CLI App -- Online purchase app

A user can place orders with this app from the list of available products. After the order is placed, the amount will be decreased in the stock from the store's inventory. 

MySQL Database = Bamazondb

Node application = bamazonCustomer.js. 

Running this application will first display all of the items available for sale which includes the ids, names, department prices and quantityof products for sale.

The app should then prompt users with two messages.
1. Enter the ID of the product they would like to buy?
2. Enter how many units of the product they would like to buy?
Once the customer has placed the order, your application should check if your store has enough of the product to meet the customer's request.

If not, the app should log a phrase like Insufficient quantity!, and then prevent the order from going through.
However, if your store does have enough of the product, you should fulfill the customer's order.

This means updating the SQL database to reflect the remaining quantity.
Once the update goes through, show the customer the total cost of their purchase.
If this activity took you between 8-10 hours, then you've put enough time into this assignment. Feel free to stop here -- unless you want to take on the next challenge.