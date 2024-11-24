function calculateCompoundInterest(principal, rate, time, n) {
    const decimalRate = rate / 100;

    const amount = principal * Math.pow((1 + decimalRate / n), n * time);

    const interest = amount - principal;

    return interest;
}

const principal = 1000; 
const rate = 5;         
const time = 2;         
const n = 4;            

const interest = calculateCompoundInterest(principal, rate, time, n);
console.log(`The compound interest is: ${interest}`);
