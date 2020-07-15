//Store all input fields in a variable
const inputs = document.querySelectorAll('input')

/* Store the regex values for each form field in an object */
const Patterns = {
    telephone: /^\d{11}$/,
    username: /^[a-zA-Z0-9]{5,12}$/, // 0R /^[a-z\d]{5,12}$/i,
    password: /^[\w@-]{8,20}$/,
    url: /^((ftp|http|https):\/\/)?(www.)?(?!.*(ftp|http|https|www.))[a-zA-Z0-9_-]+(\.[a-zA-Z]+)+((\/)[\w#]+)*(\/\w+\?[a-zA-Z0-9_]+=\w+(&[a-zA-Z0-9_]+=\w+)*)?$/,
    email: /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/,
};

//VALIDATE ON KEYUP(WHILE TYPING)
//Create a validation function
function validateOnKeyUp(field, regex) {
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
        validateOnKeyUp(e.target, Patterns[e.target.attributes.name.value]);
    });
});

//VALIDATE ON SUBMIT
const submitBtn = document.querySelector('#submit-btn');
const userName = document.querySelector('#user-name');
const userEmail = document.querySelector('#user-email');
const userPassword = document.querySelector('#user-password');
const userTelephone = document.querySelector('#user-telephone');
const userUrl = document.querySelector('#user-url');

submitBtn.addEventListener('click', validateOnSubmit);

function validateOnSubmit(e) {
    e.preventDefault();

    if (!nameIsValid(userName.value)) {
        alert("Please enter a valid username.");
        userName.focus();
        return false;
    }

    if (!emailIsValid(userEmail.value)) {
        alert("Please enter a valid email address.");
        userEmail.focus();
        return false;
    }

    if (!passwordIsValid(userPassword.value)) {
        alert("Please enter a valid password.");
        userPassword.focus();
        return false;
    }

    if (!telephoneIsValid(userTelephone.value)) {
        alert("Please enter a valid telephone.");
        userTelephone.focus();
        return false;
    }
    if (!urlIsValid(userUrl.value)) {
        alert("Please enter a valid url.");
        userUrl.focus();
        return false;
    }

    return true; // Can submit the form data to the server
}

function nameIsValid() {
    return /^[a-zA-Z0-9]{5,12}$/.test(userName.value);
}

function emailIsValid() {
    return /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/.test(userEmail.value);
}

function passwordIsValid() {
    return /^[\w@-]{8,20}$/.test(userPassword.value);
}

function telephoneIsValid() {
    return /^\d{11}$/.test(userTelephone.value);
}

function urlIsValid() {
    return /^((ftp|http|https):\/\/)?(www.)?(?!.*(ftp|http|https|www.))[a-zA-Z0-9_-]+(\.[a-zA-Z]+)+((\/)[\w#]+)*(\/\w+\?[a-zA-Z0-9_]+=\w+(&[a-zA-Z0-9_]+=\w+)*)?$/.test(userUrl.value);
}