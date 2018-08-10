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

for (c = 0; c < 9; c++) {

    if (c < 9) {
        for (d = 0; d < 20; d++) {
            num3 = hundreds[c] + " " + numbers[d] + ", "
            let div = document.getElementById("div1")
            let result = document.createTextNode(num3)
            div.appendChild(result);
        }
    }


    for (y = 0; y < 8; y++) {

        for (z = 0; z < 10; z++) {
            num4 = " " + hundreds[c] + "-" + tens[y] + " " + numbers[z] + ", ";
            let div = document.getElementById("div1");
            let result = document.createTextNode(num4)
            div.appendChild(result)
        }
    }



}

let num5 = "one-thousand"
let div = document.getElementById("div1");
let result = document.createTextNode(num5)
div.appendChild(result)