document.forms.log_form.onsubmit = function(event) {
    event.preventDefault();

    let login = document.forms.log_form.login.value,
        password = document.forms.log_form.password.value;

    $.ajax({
        url: '../php/login.php',
        method: 'POST',
        dataType: 'json',
        data: {
            login: login,
            password: password
        },
        success: function(data) {

        }
    });
};