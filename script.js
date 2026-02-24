const convertButton = document.querySelector('#convertButton')
const inputValue = document.querySelector('#inputValue-valor')
const selecTone = document.querySelector('.currencyFrom1')
const selecttwo = document.querySelector('.currencyFrom2')
const amount1 = document.querySelector('.amount1')
const amount2 = document.querySelector('.amount2')
const currencyName1 = document.querySelector('.currencyName1')
const currencyName2 = document.querySelector('.currencyName2')
const imgCurrency1 = document.querySelector('.img-currency1')
const imgcurrency2 = document.querySelector('.img-currency2')



const taxa = {
    USD: 5.20,
    EUR: 6.18,
    GBP: 7.08,
    BRL: 1
}

const currencycode = {
    USD: 'USD',
    EUR: 'EUR',
    GBP: 'GBP',
    BRL: 'BRL'
}

function convert() {

    const value = parseFloat(inputValue.value)

    const currencyorigin = taxa[selecTone.value];
    const currencyDestination = taxa[selecttwo.value];

    const result = (value * currencyorigin) / currencyDestination;

    amount1.innerHTML = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: currencycode[selecTone.value]
    }).format(inputValue.value);

    amount2.innerHTML = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: currencycode[selecttwo.value]
    }).format(result);

changeSelect2()
changeSelect1()

}

function changeSelect1() {

    if (selecTone.value === "USD") {
        imgCurrency1.src = "./assets/eua.png"
        currencyName1.innerHTML = "Dólar Americano"
    }

    else if (selecTone.value === "EUR") {
        imgCurrency1.src = "./assets/euro.png"
        currencyName1.innerHTML = "Euro"
    }

    else if (selecTone.value === "GBP") {
        imgCurrency1.src="./assets/libraesterlina.png"
        currencyName1.innerHTML = "Libra Esterlina"
    }

    else if (selecTone.value === "BRL") {
        imgCurrency1.src = "./assets/brasil.png"
        currencyName1.innerHTML = "Real Brasileiro"
    }
}
function changeSelect2() {

    if (selecttwo.value === "USD") {
        imgcurrency2.src = "./assets/eua.png"
        currencyName2.innerHTML = "Dólar Americano"
    }

    else if (selecttwo.value === "EUR") {
        imgcurrency2.src = "./assets/euro.png"
        currencyName2.innerHTML = "Euro"
    }

    else if (selecttwo.value === "GBP") {
        imgcurrency2.src="./assets/libraesterlina.png"
        currencyName2.innerHTML = "Libra Esterlina"
    }

    else if (selecttwo.value === "BRL") {
        imgcurrency2.src = "./assets/brasil.png"
        currencyName2.innerHTML = "Real Brasileiro"

    }





}






selecttwo.addEventListener('change', changeSelect2)
selecTone.addEventListener('change', changeSelect1)
convertButton.addEventListener('click', convert)

/*
const selectOne = document.querySelector('.currencyFrom1')
const input = document.querySelector('#inputValue-valor')
const selectTwo = document.querySelector('.currencyFrom2')

const amount1 = document.querySelector('.amount1')
const amount2 = document.querySelector('.amount2')
const currencyName2 = document.querySelector('.currencyName2')
const imgcurrency = document.querySelector('.img-currency')






function formatbr () {
   const formatado = new Intl.NumberFormat('pt-BR', {
       style: 'currency',
       currency: 'BRL'
   }).format(input.value);
   amount1.innerHTML = formatado
   return formatado
}

function convert() {
   if (selectTwo.value === 'USD') {
       const resultvalue = input.value / dolar
       currencyName2.innerHTML = 'Dólar Americano '
       amount2.innerHTML = new Intl.NumberFormat('en-US', {
           style: 'currency',
           currency: 'USD'
       }).format(resultvalue)
       imgcurrency.src="./assets/estados-unidos (1) 1.png"
}

   }



  else if (selectTwo.value === 'EUR') {
        const resultvalue = input.value / euro
        currencyName2.innerHTML = 'Euro'
        amount2.innerHTML = new Intl.NumberFormat('de-DE', {
           style: 'currency',
           currency: 'EUR'
       }).format(resultvalue)
      imgcurrency.src="./assets/Design sem nome 3.png" 
}
   else if (selectTwo.value === 'GBP') {
       const resultvalue = input.value / libra
       currencyName2.innerHTML = 'Libra Esterlina'
       amount2.innerHTML = new Intl.NumberFormat('en-GB', {
           style: 'currency',
           currency: 'GBP'
       }).format(resultvalue)
       imgcurrency.src="./assets/libra 1.png"
   }

}


selecttwo.addEventListener('change', convert)
convertButton.addEventListener('click', formatbr)
convertButton.addEventListener('click', convert)

**/








