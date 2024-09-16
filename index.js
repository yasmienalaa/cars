function DarkMode() {
    const body = document.body;
    body.classList.toggle('dark-mode');
}



var last = document.getElementById("last");
var form = document.getElementById("for");
form.style.visibility = "hidden";
last.addEventListener('click', function fun() {

    if (form.style.visibility == "hidden") {

        form.style.visibility = "visible";
    } else {
        form.style.visibility = "hidden";
    }
});




document.getElementById('browser').addEventListener('change', function () {
    const select = this.value;

    switch (select) {
        case 'Lotus':
            window.location.href = '#s6';
            break;
        case 'Ford':
            window.location.href = '#s2';
            break;
        case 'McLaren':
            window.location.href = '#s5';
            break;
        default:
            alert('we do not have this car brand');
            break;
    }
});

