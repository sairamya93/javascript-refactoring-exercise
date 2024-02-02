//let txr = [];  --> Commented out this declaration as we handle the transaction results inside the function

/**Replaced the function processTransactions to a more concise form using arrow function
 and the variable to be 'transactions' instead of 'transActions' */
const processTransactions = transactions => { 

    if(!validateTransactions(transactions)) {
        throw new Error("Undefined collection of transactions")
    }

    let txCount = {}

    //const numberOfTransactions = transActions.length; --> commented out this line as we replaced for loop with forEach
    //Also changed txCount[transaction]+=1 with txCount[transaction]++ 
    transactions.forEach(transaction => txCount[transaction] ? txCount[transaction]++ : txCount[transaction] = 1)
    
    /**
     for(var i = 0; i < numberOfTransactions; i++) {
         const transaction = transActions[i];
         txCount[transaction] ? txCount[transaction] += 1 : txCount[transaction] = 1;
    }
    */

    txCount = sortByAmountThenName(txCount);
    
    // Place them back in array for returning
    return Object.keys(txCount).map(key => `${key} ${txCount[key]}`); 

    /** --> Replaced forEach with map method and then returned the txResult but
     again we felt we could directly use the map function in the return statement
    */

    /** const txResult = Object.keys(txCount).map(key => `${key} ${txCount[key]}`);    
        Object.keys(txCount).forEach(function (key, index) {
         txr[index] = `${key} ${txCount[key]}`;
     });
     return txResult;
    */  
}

/** Replaced function sortByAmountThenName with arrow function and using const sortedKeys instead of let sortedKeys */ 
/** Using anonymous function instead of the function name sortingFunction */
const sortByAmountThenName = txCount => {
    const sortedKeys = Object.keys(txCount).sort((itemOne, itemTwo) => {
        return  txCount[itemTwo] - txCount[itemOne] || itemOne > itemTwo || -(itemOne < itemTwo)
    });

    const sortedResults = {}; //Using const instead of let
    sortedKeys.forEach(objectKey => sortedResults[objectKey] = txCount[objectKey])
    return sortedResults; //Replaced for loop with forEach along with arrow function
    /** 
      for(const objectKey of sortedKeys) {
        sortedResults[objectKey] = txCount[objectKey];
     }
    */     
}

//Replaced the function with arrow function and directly used return statement to return with true or false
const validateTransactions = transactions => {
    return transactions !== undefined     
}

module.exports = processTransactions;