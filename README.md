# BAMAZON!!

## Node.js & MySQL

### CLI App -- Online purchase app

A user can place orders with this app from the list of available products. After the order is placed, the amount will be decreased in the stock from the store's inventory. 

### MySQL Database = Bamazondb

### Node application = bamazonCustomer.js. 

Running this application will first display all of the items available for sale which includes the ids, names, department prices and quantityof products for sale.

-- First Scenario --
The app then prompts user with two questions.
1. Enter the ID of the product they would like to buy?
2. Enter how many units of the product they would like to buy?

The app checks if the store has enough of the product to meet the customer's request.

If not, the app logs a phrase "Insufficient quantity!", and then prevent the order from going through.

However, if the store does have enough of the product, it fulfills the customer's order and tells you "Thank you for your purhase.

It updates the SQL database to reflect the remaining quantity.
Once the update goes through, it shows the customer the total cost of their purchase.

After the successful purchase it will ask you "Would you like to purchase another Product? (Y/n)

If you choose Y, it will list out the number of available quantities of all the products and you can re-purchase another product.

If you choose n, it will end the purchase and show "Thank you for shopping! Please come again!

-- Second Scenario --
This Scenario explains about any user errors.
1. If you enter the Product ID that doesn't exist, it will show "This Product ID does not exists!"
