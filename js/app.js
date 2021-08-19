document.getElementById('pin-btn').addEventListener('click', function getNumber() {
    const displayPin = document.getElementById('display-pin');


    let pin = Math.round(Math.random() * 10000);
    displayPin.value = pin;
    const string = pin + '';
    if (string.length == 4) {
        return pin;
    }
    else {
        return getNumber();
    }
})
getNumber();