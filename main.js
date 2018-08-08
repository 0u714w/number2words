const numbers = [' ', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty'];
const tens = ['twenty', 'thirty', 'fourty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']
const hundreds = ['one-hundred', 'two-hundred', 'three-hundred', 'four-hundred', 'five-hundred', 'six-hundred', 'seven-hundred', 'eight-hundred', 'nine-hundred']
for (i = 1; i < 20; i++) {
    let num1 = " " + numbers[i] + " , "
    let div = document.getElementById("div1")
    let result = document.createTextNode(num1)
    div.appendChild(result)
}

for (let a = 0; a < 8; a++) {

    for (let b = 0; b < 10; b++) {
        num2 = tens[a] + " " + numbers[b] + ", ";
        let div = document.getElementById("div1");
        let result = document.createTextNode(num2);
        div.appendChild(result);
    }

}

for (c = 1; c < 9; c++) {

    if (c < 9) {
        for (d = 0; d < 20; d++) {
            num3 = [d] + hundreds[c] + " " + numbers[d] + ", "
            let div = getElementById("div1")
            let result = document.createTextNode(num3)
            div.appendChild(result);
        }
    }



}