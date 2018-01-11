require('../css/style.css')
// this means we want to require the style and css loader

let people = require('./people.js')
let $ = require('jquery')

$.each(people, function(key, value){
    $('body').append('<h2>'+people[key].name+'</h2>')
})

console.log(people)