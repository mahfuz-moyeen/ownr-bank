

// load data
const loadData = () => {
    const amount = getAmount();
    if(amount.deposit === undefined){
        document.getElementById('deposit-amount').innerText = 00;
    }
    else if(amount.withdraw === undefined){
        document.getElementById('withdraw-amount').innerText = 00;
    }
    else if(amount.balance === undefined){
        document.getElementById('balance-amount').innerText = 00;
    }
    else{
        document.getElementById('deposit-amount').innerText = `${amount.deposit}`;
        document.getElementById('withdraw-amount').innerText = `${amount.withdraw}`;
        document.getElementById('balance-amount').innerText = `${amount.balance}`;
    }
    
    
};

// input value
function getInputValue(inputId){
        const inputValue = document.getElementById(inputId);
        const inputNumber = parseFloat(inputValue.value);

    if(inputNumber >= 0){
        inputValue.value = '';
        return inputNumber;
    }
    else{
        alert('Enter positive number');
    }
}

// update value
function updateTotalField(updateId,addAcount){
    const Amount = document.getElementById(updateId);
    const PreviesAmount = parseFloat(Amount.innerText);
    const Total = PreviesAmount + addAcount;
    Amount.innerText = Total;
}
function getCurrentBalance(){
    const balanceAmount = document.getElementById('balance-amount');
    const balancePreviesAmount = parseFloat(balanceAmount.innerText);
    return balancePreviesAmount;
}

//balane value
function updateBalance(amount,depositOrwithdraw){
    const balanceAmount = document.getElementById('balance-amount');
    const balancePreviesAmount = getCurrentBalance();
    // balance add
    if(depositOrwithdraw == true){
        const balanceTotal = balancePreviesAmount + amount;
        balanceAmount.innerText = balanceTotal;
    }
    else{
        const balanceTotal = balancePreviesAmount - amount;
        balanceAmount.innerText = balanceTotal;
        
    }
}




// deposit
document.getElementById('deposit-button').addEventListener('click', function(){
    
    const depositInput = getInputValue('deposit-input');
    const depositAmount = updateTotalField('deposit-amount',depositInput);
    const depositUpdateBalance = updateBalance(depositInput, true);
    addamount();

});

// withdraw
document.getElementById('withdraw-button').addEventListener('click', function(){
    
    const withdrawInput = getInputValue('withdraw-input');
    const currentBalance = getCurrentBalance();

    if(withdrawInput <= currentBalance){
        const withdrawAmount = updateTotalField('withdraw-amount',withdrawInput);
        const withdrawUpdateBalance = updateBalance(withdrawInput,false);
        addamount();

    }
    else{
        alert('You cannot withdraw your amonut');
    }
    
});



// call local storage
const getAmount = () =>{
    const amount = localStorage.getItem('amount');
    let amountObject;
    if(amount){
        amountObject = JSON.parse(amount);
    }
    else{
        amountObject = {};
    }
    return amountObject;
};
// add amount in local storage
const addamount = () => {
    const amounts = getAmount();
    const deposit = parseFloat(document.getElementById('deposit-amount').innerText);
    const withdraw = parseFloat(document.getElementById('withdraw-amount').innerText);
    const balance = parseFloat(document.getElementById('balance-amount').innerText);    
    amounts['deposit'] = deposit;
    amounts['withdraw'] = withdraw;
    amounts['balance'] = balance;
    const amountStringfy = JSON.stringify(amounts);
    localStorage.setItem('amount', amountStringfy);
};

// call load data 
loadData();