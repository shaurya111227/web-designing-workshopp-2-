function checkPrime() {
    let num = document.getElementById("number").value;
    let result = document.getElementById("result");
    num = Number(num);
    if (num < 2){
        result.innerHTML = "Not a Prime Number";
        return;
    }
    let isPrime = true;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) result.innerHTML = "It is a Prime Number";
    else result.innerHTML = "Not a Prime Number";
}