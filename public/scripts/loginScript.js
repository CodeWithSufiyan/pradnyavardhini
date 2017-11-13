
$(function () {
    $('#btnRegister').click(function () {
        var email = $('#email').val();
        var username = $('#username').val();
        var password = $('#password').val();
        var passwordConfirm = $('#passwordConfirm').val();
        var user = {
            email: email,
            username: username,
            password: password,
            passwordConfirm: passwordConfirm,
        }
        console.log(user)
        $.ajax({
            type: 'POST',
            url: '/',
            data: user,
            success: (user) => {

            }
        });
    });
});