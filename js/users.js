window.onload = function(event) {
    event.preventDefault();
    
    $.ajax({
        url: '../php/users.php',
        method: 'GET',
        dataType: 'json',
        success: function(data) {
            if(data.login == null)
            {
                window.location.replace('../html/register.html');
                return;
            }

            data.users.forEach(function(user) {
                if(data.login == user['login'])
                {
                    $('table').append(
                        '<tr class="auth_user">' +
                            '<td>' + user['login'] + '</td>' +
                            '<td>' + user['password'] + '</td>' +
                            '<td>' + user['email'] + '</td>'
                        + '</tr>'
                    );
                    $('p[name="login"]').text('Hi, ' + user['login']);
                }
                else
                {
                    $('table').append(
                        '<tr>' +
                            '<td>' + user['login'] + '</td>' +
                            '<td>' + user['password'] + '</td>' +
                            '<td>' + user['email'] + '</td>'
                        + '</tr>'
                    );
                }
            });
        }
    });
};

$('a[name="logout"]').click(function(event) {
    event.preventDefault();

    $.ajax({
        url: '../php/logout.php',
        method: 'GET',
        dataType: 'json',
        success: function(data) {
            if (data.status)
                window.location.replace('../html/register.html');
            else
                alert('Error, unable to log out!');
        }
    });
});