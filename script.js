function convert() {
    let input = document.getElementById("inBox").value;
    let output = document.getElementById("outBox");
    let selector = document.getElementById("convertSelector").value;
    let selectedNum = parseInt(selector, 10);
    let inVal = parseInt(input, 10);

    let out = inVal.toString(selectedNum).toUpperCase();
    output.value = out;
}