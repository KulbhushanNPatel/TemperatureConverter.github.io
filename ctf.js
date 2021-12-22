function celciusToFaren() {
    let celval = document.getElementById('cel').value;
    // console.log(celval)
    let cel = (celval * 9 / 5) + 32
    let far = document.getElementById('faren').value = cel;
}

function farenToCelcius() {
    let farval = document.getElementById('faren').value;
    let celval = document.getElementById('cel').value;
    let far = (farval - 32) * 5 / 9;
    let cel = document.getElementById('cel').value = far;
}