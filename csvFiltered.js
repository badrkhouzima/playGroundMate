let valuesRegExp =  /,(?=[^,\s])/g

export default function filterCsvtext(str ) {
 
    // slice from start of text to the first \n index
    // use split to create an array from string by delimiter
    const headers = str.slice(0, str.indexOf("\n")).split(",");

    // slice from \n index + 1 to the end of the text
    // use split to create an array of each csv value row
    const rows = str.slice(str.indexOf("\n") + 1, str.length-1).split("\n");

    // Map the rows
    // split values from each row into an array
    // use headers.reduce to create an object
    // object properties derived from headers:values
    // the object passed as an element of the array

    const arr = rows.map(function (row) {
      const values = row.split(valuesRegExp);
      const arr = headers.reduce(function (object, header, index) {
        object[header] = values[index];
        return object;
      }, {});
      return arr;
    });

    // return the array
    return arr;
  }


