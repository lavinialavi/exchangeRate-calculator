document.getElementById("input1").addEventListener('change', calculateExchangeRate);


function calculateExchangeRate() {
    const from = "euro";
    const to = "ron";
    const exchangeRate = 4.79;

    var input1 = document.getElementById("input1").value;
    console.log(input1);

    var input3 = document.getElementById("input3").value;
    console.log(input3);
    var input2 = document.getElementById("input2").value;
    console.log(input2);
    var result = document.getElementById("result").value =   calculate(input1, input2, input3); 
   
}

document.getElementById("input2").addEventListener("change", calculateExchangeRate);
document.getElementById("input3").addEventListener("input", calculateExchangeRate);

function calculate(from, to, amount) {
    let result = 0;
    const EUR = {
        RON: 4.79,
        USD: 1.2,
        EURO: 1

    }
    if (from == "EUR") {
        result = EUR[to] * amount;
    }

    return result;



}
