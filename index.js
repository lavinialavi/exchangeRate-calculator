document.getElementById("input1").addEventListener('change', calculateExchangeRate);
document.getElementById("input2").addEventListener("change", calculateExchangeRate);
document.getElementById("input3").addEventListener("input", calculateExchangeRate);

function calculateExchangeRate() {
    var input1 = document.getElementById("input1").value;
    var input3 = document.getElementById("input3").value;
    var input2 = document.getElementById("input2").value;

    calculate(input1, input2, input3).then(resp =>
        document.getElementById("result").value = resp
    )
}

    function copyResult() {
        var copyText = document.getElementById("result");
        copyText.select();
        copyText.setSelectionRange(0, 99999)
        document.execCommand("copy");
        alert("Copied the text: " + copyText.value);
      }


function calculate(from, to, amount) {
    let result = 0;


    const url = 'https://api.exchangeratesapi.io/latest?&base=';


    return fetch(url + from)
        .then(
            function (response) {

                return response.json();
            }
        )
        .then(
            function (obj) {
                console.log(obj.rates[to]);
                result = obj.rates[to] * amount;
                
                return result;
            }
            
        )
        .catch(function (err) {
            console.log(err)
        })

    }
function calculatorTva (result){
    var result= document.getElementById("result").value;
    var tva= 20 ;
    var tvavalue= Number (tva) * Number (result);
   document.getElementById("valtva").innerHTML= tvavalue;
   calcTotal(tvavalue);
    
   

    function calcTotal(tvavalue){
        var result= document.getElementById("result").value;
        let bigresult= result +tvavalue;
        document.getElementById("rezultattva").innerHTML=bigresult;
    }
    
}




// function calculPretcuTva(){
//     var result= document.getElementById("result").value;
//     var result2=  document.getElementById("resulttva");

//     calculate(result,result2 ).then(resp=>
//         document.getElementById("")





