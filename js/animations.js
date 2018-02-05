
function myFunction() {
    document.getElementById("logo1").style.display = 'none';
    document.getElementById("logo2").style.display = 'block';
    document.getElementById("fio").style.display = 'block';
    document.getElementById("contacts").style.display = 'block';
    document.getElementById("website").style.background = '#263238';
}

function myFunction1() {
    document.getElementById("website").style.background = '#263238';
}

function mouseOver() {
    document.getElementById("website").style.background = '#3949AB';
    document.getElementById("website").style.transition = '400ms';
}

function mouseOut() {
    document.getElementById("website").style.background = '#263238';
}

setTimeout(myFunction, 3500);
setTimeout(myFunction1, 2000);
