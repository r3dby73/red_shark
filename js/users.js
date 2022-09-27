window.onload = function(event) {
    event.preventDefault();
    
    $.ajax({
        url: '../php/users.php',
        method: 'GET',
        dataType: 'json',
        success: function(data) {

        }
    });
};