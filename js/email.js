/**
 * Created by Nadine on 20.02.2016.
 */
function checkmail(value) {
    reg = /\w+@\w+\.+\w+/i;
    if (!value.match(reg)) {
        alert("Пожалуйста, введите свой настоящий e-mail");
        document.getElementById('email').value=""; return false; }
}
