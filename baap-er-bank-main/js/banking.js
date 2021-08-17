const depositBtn = document.getElementById('deposit-button');
depositBtn.addEventListener('click', function(){
  
    // console.log('clicked')
   const depositTotal = document.getElementById('deposit-total')
   const depositTotalText = depositTotal.innerText
   //console.log(depositTotal)
   const depositTotalNumber = parseFloat(depositTotalText)
   //console.log(depositTotalNumber)
   const newDeposit = document.getElementById('deposit-input')
   const newDepositText = newDeposit.value
   //console.log(newDeposit+5)
   const newDepositNumber = parseFloat(newDepositText)
   //console.log(newDepositNumber+5)
   depositTotal.innerText = depositTotalNumber + newDepositNumber
    newDeposit.value = ''



//update balance

    const balanceTotal = document.getElementById('balance-total')
   const balanceTotalText = balanceTotal.innerText
   const balanceTotalNumber = parseFloat(balanceTotalText)
   //console.log(balanceTotalNumber + 5)
   balanceTotal.innerText = balanceTotalNumber + newDepositNumber
  
  
//    const newDeposit = document.getElementById('deposit-input')
//    const newDepositText = newDeposit.value
//    //console.log(newDeposit+5)
//    const newDepositNumber = parseFloat(newDepositText)
//    //console.log(newDepositNumber+5)
//    depositTotal.innerText = depositTotalNumber + newDepositNumber
//     newDeposit.value = ''
 })