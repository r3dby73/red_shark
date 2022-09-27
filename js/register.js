document.forms.register_form.onsubmit = function(event) {
    event.preventDefault();

    let login = document.forms.register_form.login.value;
        password = document.forms.register_form.password.value,
        confirm_password = document.forms.register_form.confirm_password.value,
        email = document.forms.register_form.email.value;

    function inArray(arr)
    {
        for(let i = 1; i < arguments.length; i++)
            if($.inArray(arguments[i], arr) != -1)
                return true;
        return false;
    }

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
            if(data.errors.length == 0)
                window.location.replace('../html/login.html');

            $('p[name="login_error"]').attr('hidden', true);
            $('input[name="login"]').removeClass('error_input');
            $('p[name="password_error"]').attr('hidden', true);
            $('input[name="password"]').removeClass('error_input');
            $('p[name="confirm_password_error"]').attr('hidden', true);
            $('input[name="confirm_password"]').removeClass('error_input');
            $('p[name="email_error"]').attr('hidden', true);
            $('input[name="email"]').removeClass('error_input');
        }
    });
};