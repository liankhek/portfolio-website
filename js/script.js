(function() {
    let form = document.querySelector('.contact-form'),
        emailInput = document.querySelector('#email'),
        nameInput = document.querySelector('#name'),
        msgInput = document.querySelector('#message');
        
    function showErrorMessage(input, message) {
        let container = input.parentElement;

        let error = container.querySelector('.error-message');
        if (error){
            container.removeChild(error);
        }

        if(message) {
            let error = document.createElement("div");
            error.classList.add('error-message');
            error.innerText = message;
            container.appendChild(error);
        }
    }
//-------------------------------------------------------------------
    function validateName() {
        let nValue = nameInput.value;
        if(!nvalue) {
            showErrorMessage(nameInput, 'Name is a required field.');
        }
        showErrorMessage(nameInput, null);
        return true;
    }

    function validateEmail() {
        let eValue = emailInput.value;

        if (!eValue) {
            showErrorMessage(emailInput, 'Email is a required field.');
        }

        if (eValue.indexOf('@') === -1) {
            showErrorMessage(emailInput, 'You must enter a valid email address.(eg. "@")');
            return false;
        }

        if (eValue.indexOf('.') === -1) {
            showErrorMessage(emailInput, 'You must enter a valid email address.(eg. ".")');
            return false;
        }

        showErrorMessage(emailInput, null);
        return true;
    }

    function validateMessage() {
        let mValue = msgInput.value;
        if(!mValue){
            showErrorMessage(msgInput, 'Message is a required field');
        }
        showErrorMessage(msgInput,null);
        return true;
    }
//--------------------------------------------

    function validateForm() {
        let isValidateName = validateName();
        let isValidateEmail = validateEmail();
        let isValidateMessage = validateMessage();
        
        return validateName && isValidateEmail && isValidateMessage;
      }
    

    form.addEventListener('submit', (e) => {
    e.preventDefault(); // Do not submit to the server
    if (validateForm()) {
        alert('Success!');
    }
    })

 //--------------------------------------
    nameInput.addEventListener('input', validateName);
    emailInput.addEventListener('input', validateEmail);
    msgInput.addEventListener('input',validateMessage);

})();