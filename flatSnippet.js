var fs = require('fs');
const util = require('util')
var randomstring = require("randomstring");

var tutu;

fs.readFile('./en.json', 'utf-8', (err, data) => {
  tutu = JSON.parse(data)
  tutu.forEach((element, i) => {
    tutu[i].snippet = element.snippet.join('\n')
    tutu[i].slug = `${i + 1}`;
    const choices = tutu[i].choices
    tutu[i].choices = []

    for (let [key, value] of Object.entries(choices)) {
      tutu[i].choices.push({key: key, value: value})
    }
  });
  console.log(util.inspect(tutu, { maxArrayLength: null, showHidden: false, depth: null }))
})