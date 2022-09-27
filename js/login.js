window.onload = function(event) {
    event.preventDefault();

    $.ajax({
        url: '../php/checkAuth.php',
        method: 'GET',
        dataType: 'json',
        success: function(data) {
            if(data.status)
                window.location.replace('../html/users.html');
        }
    });
};

document.forms.log_form.onsubmit = function(event) {
    event.preventDefault();

    let login = document.forms.log_form.login.value,
        password = document.forms.log_form.password.value;

    function inArray(arr)
    {
        for(let i = 1; i < arguments.length; i++)
            if($.inArray(arguments[i], arr) != -1)
                return true;
        return false;
    }

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

                    case 'incorrectInput':
                        if(!inArray(data.errors, 'emptyLogin', 'emptyPassword'))
                        {
                            $('p[name="auth_error"]').text('Incorrect login or password');
                            $('p[name="auth_error"]').removeAttr('hidden');
                        }
                        break;
                }
            });
        }
    });
};