console.log('Hello 😁');

const billAmount = document.querySelector('#bill-amount');
const tipValueBtns = document.querySelectorAll('.form__tip-value');
const numberPeople = document.querySelector('#number-people');
const tipTotal = document.querySelector('.results__tip-total');
const totalBill = document.querySelector('.results__total-bill');
const resetBtn = document.querySelector('.results__reset');

let dollarFormat = Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD'
});

let BILL = 0;
let TIP = 0;
let PEOPLE = 0;

billAmount.addEventListener('change', (event) => {
  if (billAmount.value) {
    BILL = parseFloat(billAmount.value);
  }
  console.log('bill', BILL);
  setTotals()
})

tipValueBtns.forEach(tip => {
  if (tip.id == 'tip-value-custom') {
    tip.addEventListener('change', (event) => {
      removeActiveButton(tip)
      if (tip.value) {
        TIP = parseFloat(tip.value) / 100;
        setTotals()
      }
    })
  } else {
    let tipArr = tip.id.split('-');
    let tipQuantity = parseInt(tipArr[tipArr.length - 1]);
    tip.addEventListener('click', (event) => {
      removeActiveButton(tip)
      tip.classList.add('active');
      TIP = tipQuantity / 100;
      setTotals()
    })
  }
})

numberPeople.addEventListener('change', (event) => {
  if (parseInt(numberPeople.value) !== 0) {
    document.querySelector('.form__people-zero').style.display = 'none';
  } else {
    document.querySelector('.form__people-zero').style.display = 'block';
  }

  PEOPLE = parseInt(numberPeople.value);
  setTotals()
})

resetBtn.addEventListener('click', (event) => {
  BILL = 0;
  TIP = 0;
  PEOPLE = 0;
  billAmount.value = '';
  numberPeople.value = '';
  tipValueBtns[tipValueBtns.length - 1].value = '';
  tipTotal.innerHTML = dollarFormat.format(0);
  totalBill.innerHTML = dollarFormat.format(0);
  setTotals()
  removeActiveButton(undefined);
})

function setTotals() {
  if (BILL === 0) return;
  else if (PEOPLE === 0) return;


  let tipValue = (BILL * TIP) / PEOPLE;
  let totalValue = BILL / PEOPLE;
  tipTotal.innerHTML = dollarFormat.format(tipValue);
  totalBill.innerHTML = dollarFormat.format(totalValue + tipValue);
}

function removeActiveButton(tip) {
  tipValueBtns.forEach(button => {
    if (button !== tip) {
      if (button.id == 'tip-value-custom') {
        button.value = '';
      }
      if (button.classList.contains('active')) {
        button.classList.remove('active');
      }
    }
  })
}