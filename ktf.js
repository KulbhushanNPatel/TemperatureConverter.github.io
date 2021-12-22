function kelToFaren() {
    let kelval = document.getElementById('kel').value;
    let formula = (kelval - 273.15) * 9/5 + 32;
    let celval = document.getElementById('faren').value = formula;
}