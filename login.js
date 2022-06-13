if (localStorage.getItem("email") == null) {

    var emails = ["admin@admin.com" , "user@user.com" ,"bunny@arnab.com"];
    localStorage.setItem("email", JSON.stringify(emails));
    }
    else {
        emails = JSON.parse(localStorage.getItem("email"));
    }
    if (localStorage.getItem("password") == null) {

        var passwords = ["admin123" , "password" , "kofta123"];
        localStorage.setItem("password", JSON.stringify(passwords));
        }
        else {
            passwords = JSON.parse(localStorage.getItem("password"));
        }



function REG(){
    var valid = true;
    if(document.inputForm.email.value.indexOf("@")==-1 || document.inputForm.email.value.indexOf(".")==-1){
        alert("Please Enter valid email, e.g:example@mail.com")
    document.inputForm.email.focus();
    valid=false;
    }
       if (document.inputForm.password.value.length < 8) {
           alert("Password need to be at least 8 charchters!")
           document.inputForm.password.focus();
           valid=false;
       }
       if (valid == true) {
        var email = document.inputForm.email.value;
        var pass = document.inputForm.password.value;
        emails.push(email);
        console.log(localStorage.setItem("email", JSON.stringify(emails)));
        passwords.push(pass);
        console.log(localStorage.setItem("password", JSON.stringify(passwords)));
           alert("welcome! ")
           window.location.href = 'home_page.html';
       }
    }
function login(){
    
    var found = false
    var adminf = false
    for (let i = 0; i < 5; i++) {
        if (emails[i] == document.inputForm.email.value) {
            if (passwords[i] == document.inputForm.password.value) {
                if (i==0) {
                    window.location.href = 'admin.html';
                    found = true
                    adminf = true
                    break;
                }
                found = true;
                break;
            }
        }
    }
    if (found == true) {
        alert("Welcome my man :D")
        if (adminf == false){
        window.location.href = 'home_page.html';
        }
    }
    else{
        alert("Email or Password is incorrect!")
    }
    return found;
}