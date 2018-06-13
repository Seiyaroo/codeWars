let disemvowel = str => str.replace(/[AEIOUaeiou]/g, '');

// Basically this says you are going through the length of letters AEIOU and aeiou under the /global context and 
// inserting an empty string into it.