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
            if(data.errors.length == 0)
                window.location.replace('../html/users.html');

            $('p[name="login_error"]').attr('hidden', true);
            $('input[name="login"]').removeClass('error_input');
            $('p[name="password_error"]').attr('hidden', true);
            $('input[name="password"]').removeClass('error_input');
            $('p[name="auth_error"]').attr('hidden', true);
        }
    });
};