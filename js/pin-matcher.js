function createPin() {
    let pin = Math.round(Math.random() * 10000);
    pin = pin + "";
    if (pin.length == 4) {
        return pin;
    }
    else {
        console.log('got 3 digit and calling again', pin)
        return createPin();
    }
    
}

function generatePin() {
    const pin = createPin();
    const pinInput = document.getElementById('pin-input');
    pinInput.value = pin;
}

document.getElementById('key-pad').addEventListener('click', function (event) {
    const number = event.target.innerText;
    const typedNumber = document.getElementById('typed-numbers');

    if (isNaN(number)) {
        if (number == 'C') {
            typedNumber.value = '';
        }
    }
    else {
        
        const previousTypedNumber = typedNumber.value;
        const newTypedNumber = previousTypedNumber + number;
        typedNumber.value = newTypedNumber;
    }
   
})


function verifyPin() {
    const pin = document.getElementById('pin-input').value;
    const typedPin = document.getElementById('typed-numbers').value;

    const succeed = document.getElementById('succeed');
    const failor = document.getElementById('not-succeed');
    console.log(pin, typedPin);
    if (pin == typedPin) {
        succeed.style.display = 'block';
        failor.style.display = 'none';
    }
    else {
        failor.style.display = 'block';
        succeed.style.display = 'none';
    }
}


// calling functions

/* document.getElementById('generate-pin').addEventListener('click', function () {
    console.log('clicking');
}) */