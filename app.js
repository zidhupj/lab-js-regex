const pattern = {
    username: /^[a-z\d]{8,15}$/i,
    email: /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/,
    password: /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()]).{8,20}$/,
    phone: /^\d{10}$/,
}

function formValidate() {
    let flag1, flag2, flag3, flag4, flag5, flag6;
    console.log('formValidate');
    let name = document.forms["RegForm"]["Name"];
    let nameInput = document.getElementById("name");
    if (pattern.username.test(name.value)) {
        flag1 = true;
        nameInput.innerHTML = "";
    }
    else {
        console.log(nameInput);
        nameInput.innerHTML = "Atleast 8 to 15 Character Required";
        flag1 = false;
    }


    let address = document.forms["RegForm"]["Address"];
    let addressInput = document.getElementById("address");
    console.log(address.value);
    if (address.value === "" || address.value === undefined) {
        console.log('name is valid');
        addressInput.innerHTML = "Address cannot be empty. Kindly fill ";
        flag2 = false;
    }
    else {
        console.log('name is INvalid');
        addressInput.innerHTML = "";
        flag2 = true;
    }


    let email = document.forms["RegForm"]["EMail"];
    let emailInput = document.getElementById("email");
    if (email.value == "") {
        emailInput.innerHTML = "Email cannot be empty. Kindly fill ";
        flag3 = false;
    }
    else if (pattern.email.test(email.value)) {
        emailInput.innerHTML = "";
        flag3 = true;
    }
    else {
        emailInput.innerHTML = "Enter a vaild Email";
        flag3 = false;
    }


    let password = document.forms["RegForm"]["Password"];
    let passwordInput = document.getElementById("pwd");
    if (password.value == "") {
        passwordInput.innerHTML = "Kindly fill the Password";
        flag4 = false;
    }
    else if (pattern.password.test(password.value)) {
        passwordInput.innerHTML = "";
        flag4 = true;
    }
    else {
        passwordInput.innerHTML = "password must contain 1 uppercase letter, 1 lowercase letter, atleast 1 number any Symbols";
        flag4 = false;
    }


    let cpassword = document.forms["RegForm"]["cPassword"];
    let cpasswordInput = document.getElementById("cpwd");
    if (cpassword.value == "") {
        cpasswordInput.innerHTML = "Kindly confirm your password";
        flag5 = false;
    }
    else if (cpassword.value == password.value) {
        cpasswordInput.innerHTML = "";
        flag5 = true;
    } else {
        cpasswordInput.innerHTML = "Password and confirm password must be same";
        flag5 = false;
    }


    let phone = document.forms["RegForm"]["phone"];
    let phoneInput = document.getElementById("phone");
    let result = document.getElementById("result");
    if (phone.value == "") {
        phoneInput.innerHTML = "Kindly fill the phone number";
        flag6 = false;
    }
    else if (pattern.phone.test(phone.value)) {
        phoneInput.innerHTML = "";
        flag6 = true;
    }
    else {
        phoneInputs.innerHTML = "Enter a valid 10 digit number";
        flag6 = false;
    }

    if (flag1 && flag2 && flag3 && flag4 && flag5 && flag6) {
        alert("All values are valid.")
    }
}  