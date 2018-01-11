let people = require('./people.js')
let $ = require('jquery')

$('body').append('<h2>'+people[0].name+'</h2>')

console.log(people)