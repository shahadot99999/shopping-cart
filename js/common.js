function getTextElementValueById(elementId) {
    const phoneTotalElement = document.getElementById(elementId);
    const currentPhoneTotalString = phoneTotalElement.innerText;
    const currentPhoneTotal = parseInt(currentPhoneTotalString);
    return currentPhoneTotal;
}
function setTexElementValueById(elementId, value) {
    const subTotalElement = document.getElementById(elementId);
    subTotalElement.innerText = value;
}

function calculateSubTotal() {
    const currentPhoneTotal = getTextElementValueById('phone-total');
    const currentCaseTotal = getTextElementValueById('case-total');
    const currentsubTotal = currentPhoneTotal + currentCaseTotal;
    setTexElementValueById('sub-total', currentsubTotal);


    //calculate tax
    const taxAmountString = currentsubTotal * 0.1.toFixed(2);
    const taxAmount = parseFloat(taxAmountString);
    setTexElementValueById('tax-amount', taxAmount);

    const finalAmount = currentsubTotal + taxAmount;
    setTexElementValueById('final-total', finalAmount);
}