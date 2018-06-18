// https://www.codewars.com/kata/53951fff369894e4f10007a9

//Use Map to double the value of the arrays

let double = array => array.map(i =>  i * 2)

// https://www.codewars.com/kata/53dbd5315a3c69eed20002dd

// Create a function to take a list of non negative integers and return a new list with the strings filtered out

let filter_list = l => l.filter( i => (i >=0 && typeof(i) === 'number'));

// https://www.codewars.com/kata/57a2013acf1fa5bfc4000921

// Write a function avg which calculates the average of a group of numbers in a list.

let find_average = array => array.reduce((a, b) => a + b)/array.length;


