document.forms.register_form.onsubmit = function(event) {
    event.preventDefault();
    
    let login = document.forms.register_form.login.value;
        password = document.forms.register_form.password.value,
        confirm_password = document.forms.register_form.confirm_password.value,
        email = document.forms.register_form.email.value;
    
    $.ajax({
        url: '../php/register.php',
        method: 'POST',
        dataType: 'json',
        data: {
            login: login,
            password: password,
            confirm_password: confirm_password,
            email: email
        },
        success: function(data) {
            
        }
    });
};