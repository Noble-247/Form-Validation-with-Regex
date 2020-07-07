//Making Regular Expressions in JavaScript
const reg = /{a-z}/ig;
//or
//const reg2 = new RegExp(/a-z/, 'ig');

/* The {a-z} will only validate characters from a-z, the i flag indicates case insensitive, and the g flag validates as many cases as possible.*/

/* Grab all the input fields and store them in a variable */
const inputs = document.querySelectorAll('input')

/* Store the regex values for each form field in an object */

const Patterns = {
    telephone: /^\d{11}$/,
    username: /^[a-zA-Z0-9]{5,12}$/, // 0R /^[a-z\d]{5,12}$/i,
    password: /^[\W@-]{10,20}$/,
    slug: /^[a-z\d-]{8,20}$/,
    email: /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/,
};

//Create a validation function
function validate(field, regex) {
    //console.log(regex.test(field.value));
    if (regex.test(field.value)) {
        field.className = 'valid';
    } else {
        field.className = 'invalid';
    }
};

//Cycle through the array of inputs
inputs.forEach(function(input) {
    input.addEventListener('keyup', function(e) {
        //console.log(e.target.attributes.name.value);
        validate(e.target, Patterns[e.target.attributes.name.value]);
    });
});