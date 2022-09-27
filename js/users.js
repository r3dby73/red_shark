window.onload = function(event) {
    event.preventDefault();
    
    $.ajax({
        url: '../php/users.php',
        method: 'GET',
        dataType: 'json',
        success: function(data) {
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