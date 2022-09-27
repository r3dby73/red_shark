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

            data.errors.forEach(function(error) {
                switch(error)
                {
                    case 'emptyLogin':
                        $('p[name="login_error"]').text('Enter login');
                        $('p[name="login_error"]').removeAttr('hidden');
                        $('input[name="login"]').addClass('error_input');
                        break;

                    case 'emptyPassword':
                        $('p[name="password_error"]').text('Enter password');
                        $('p[name="password_error"]').removeAttr('hidden');
                        $('input[name="password"]').addClass('error_input');
                        break;

                    case 'emptyConfirmPassword':
                        $('p[name="confirm_password_error"]').text('Confirm password');
                        $('p[name="confirm_password_error"]').removeAttr('hidden');
                        $('input[name="confirm_password"]').addClass('error_input');
                        break;

                    case 'emptyEmail':
                        $('p[name="email_error"]').text('Enter email');
                        $('p[name="email_error"]').removeAttr('hidden');
                        $('input[name="email"]').addClass('error_input');
                        break;

                    case 'incorrectLoginLen':
                        if(!inArray(data.errors, 'emptyLogin'))
                        {
                            $('p[name="login_error"]').text('Too short login');
                            $('p[name="login_error"]').removeAttr('hidden');
                            $('input[name="login"]').addClass('error_input');
                        }
                        break;

                    case 'incorrectPasswordLen':
                        if(!inArray(data.errors, 'emptyPassword'))
                        {
                            $('p[name="password_error"]').text('Too short password');
                            $('p[name="password_error"]').removeAttr('hidden');
                            $('input[name="password"]').addClass('error_input');
                        }
                        break;

                    case 'incorrectLogin':
                        if(!inArray(data.errors, 'emptyLogin', 'incorrectLoginLen'))
                        {
                            $('p[name="login_error"]').text('Login can contain letters and numbers');
                            $('p[name="login_error"]').removeAttr('hidden');
                            $('input[name="login"]').addClass('error_input');
                        }
                        break;

                    case 'weakPassword':
                        if(!inArray(data.errors, 'emptyPassword', 'incorrectPasswordLen'))
                        {
                            $('p[name="password_error"]').text('Password must contain letters and numbers');
                            $('p[name="password_error"]').removeAttr('hidden');
                            $('input[name="password"]').addClass('error_input');
                        }
                        break;

                    case 'incorrectEmail':
                        if(!inArray(data.errors, 'emptyEmail'))
                        {
                            $('p[name="email_error"]').text('Invalid email');
                            $('p[name="email_error"]').removeAttr('hidden');
                            $('input[name="email"]').addClass('error_input');
                        }
                        break;

                    case 'mismatchPasswords':
                        if(!inArray(data.errors, 'emptyConfirmPassword'))
                        {
                            $('p[name="confirm_password_error"]').text('Passwords don\'t match');
                            $('p[name="confirm_password_error"]').removeAttr('hidden');
                            $('input[name="confirm_password"]').addClass('error_input');
                        }
                        break;

                    case 'existsLogin':
                        if(!inArray(data.errors, 'emptyLogin', 'incorrectLoginLen', 'incorrectLogin'))
                        {
                            $('p[name="login_error"]').text('Login already exists');
                            $('p[name="login_error"]').removeAttr('hidden');
                            $('input[name="login"]').addClass('error_input');
                        }
                        break;

                    case 'existsEmail':
                        if(!inArray(data.errors, 'emptyEmail', 'incorrectEmail'))
                        {
                            $('p[name="email_error"]').text('Email is already in use');
                            $('p[name="email_error"]').removeAttr('hidden');
                            $('input[name="email"]').addClass('error_input');
                        }
                        break;
                }
            });
        }
    });
};