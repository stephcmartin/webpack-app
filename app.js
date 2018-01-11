let people = require('./people.js')
let $ = require('jquery')

$.each(people, function(key, value){
    $('body').append('<h2>'+people[key].name+'</h2>')
})

console.log(people)