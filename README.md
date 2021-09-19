## Shopping cart problem statement

Create a shopping cart where users can add to products. Once the user checks out the shopping cart your program should calculate 3 things:

1. The total amount of all the products in the shopping cart 
2. The GST of 10%
3. The total amount owing

When showing total amounts all values should be rounded to 2 decimal places, with the half value rounding up. For example: 0.765 will round up  
to 0.77 but 0.7649 will round down to 0.76.


An example:

User adds a box of Cheerios of $3.89 
User adds a bar of Lindt of $3.5 
User checks out

The program should calculate the below

1. Subtotal of the price of products - $7.39
2. GST of 10% - $0.739 which when rounded should show $0.74
3. The total amount owing - $8.129 which when rounded should show $8.13

Your code should not have a UI or a command line interface and just needs to be driven by tests. 


## Build and run info

The code has been written to work on Node V16. It should work on other versions of node but has been tested on Node V16 alone.

To run the tests, run the command

```
npm test 
(or if you have yarn installed)
yarn test 
```

## Assumptions / Decisions made

1. I have chosen to write the solution in an object oriented way as I could express the domain better.
2. The only domain concept that hasn't been explicitly defined is a Product. 
   I didn't create a class for it as as apart from holding the name and amount that are publically exposed there wasn't any other functionality I could associate with a Product. I chose to instead 
   accept a 'product javascript object literal' into the shopping cart.
3. Javascript is notorious when dealing with floating point numbers. A simple addition of 0.1 + 0.2 gives 0.30000000000000004. I didn't want to use an external library which would have made working with floating point numbers easier and chose to solve this simplistically using `toFixed(2)`. This has it's limitations and is not entirely accurate. More general information about floating point arithmetic and how computers deal with it is here - https://floating-point-gui.de/
4. To make the code easier to read, I chose to round everytime arithmetic is performed in the Amount class. Ideally, you would want to round at the end after all the arithmetic is performed. I chose not to do this to keep the code simple and perform all the rounding inside the Amount class.
