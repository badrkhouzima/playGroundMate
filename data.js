const fs = require('fs');
const readline = require('readline');
const Papa = require('papaparse');

const fileStream = fs.createReadStream('./jocs_bcn.csv');
const rl = readline.createInterface({
  input: fileStream,
  crlfDelay: Infinity
});

export const data = []; // this will store the parsed data

rl.on('line', line => {
  const parsedLine = Papa.parse(line, {
    header: true,
    dynamicTyping: true
  });
  data.push(parsedLine.data);
});



rl.on('close', () => {
  // all lines have been read, do something with the data
  alert("hi")
 // console.log(data);
 
 //return data;
});
  
// This code will read the CSV file line by line, parse each line using Papa Parse, and then store the parsed data in the data array. Once all lines have been read, it will log the data array to the console.

// You can then use the parsed data in your JavaScript code as needed. For example, you could loop through the array of objects and extract specific values, or you could use the data to populate a chart or table in your HTML page.




