function celToKel() {
    // let celval = document.getElementById('cel').value;
    let celval = Number(document.getElementById('cel').value);
    console.log(celval)
    let formula = celval+273.15;
    console.log(typeof(celval))
    console.log(formula)
    let kelval = document.getElementById('kel').value = formula;
    
    console.log(kelval)

}