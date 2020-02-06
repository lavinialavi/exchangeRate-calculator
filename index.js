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
    document.getElementById("result").value = calculate(input1, input2, input3);

}

document.getElementById("input2").addEventListener("change", calculateExchangeRate);
document.getElementById("input3").addEventListener("input", calculateExchangeRate);

function calculate(from, to, amount) {
    let result = 0;
    const EUR = {
        RON: 4.79,
        USD: 1.2,
        EUR: 1

    }

    const RON = {
        RON: 1,
        USD: 0.23,
        EUR: 0.21
    }

    const USD = {
        USD: 1,
        EUR: 0.91,
        RON: 4.33
    }
    const currencys = {

        EUR: {
            RON: 4.79,
            USD: 1.2,
            EUR: 1
        },

        RON: {
            RON: 1,
            USD: 0.23,
            EUR: 0.21
        },

        USD: {
            USD: 1,
            EUR: 0.91,
            RON: 4.33
        }

    }
 result= currencys[from][to]* amount;

    // if (from == "EUR") {
    //     result = EUR[to] * amount;
    // }

    // if (from == "RON") {
    //     result = RON[to] * amount;
    // }
    // if (from == "USD") {
    //     result = USD[to] * amount;
    // }
    return result;


}
