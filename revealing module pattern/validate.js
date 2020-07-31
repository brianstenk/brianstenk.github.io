var firstName = document.getElementById("first").value;
var lastName = document.getElementById("last").value;

let VALIDATOR = (function() {
    function validateFirstName() {
        return firstName !== "";
    }
    function validateLastName() {
        return lastName.value !== "";
    }
    function validateBoth() {
        return validateFirstName() && validateLastName();
    }
    return {
        validate : validateFirstName() && validateLastName();
    }
})();

// the code below is not part of the requirements
// just useful in demonstrating functionality
window.onload = function() {
    document.getElementById("myForm").onsubmit = VALIDATOR.validate;
}


const VALIDATOR = (function() {
   let validateFirstName = function() {
        return document.getElementById("first").value !== "";
    }
   let validateLastName = function() {
        return document.getElementById("last").value !== "";
    }

    return {
         validate = function(){
            validateFirstName() && validateLastName();
         } 
    }
})();

