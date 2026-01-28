console.log(buildSign('Birthday', 'Rob'));

function buildSign(occasion, name) {
    return `Happy ${occasion} ${name}`;
}



console.log(buildBirthdaySign(99));

function buildBirthdaySign(age) {
    if (age >= 50) {
        return "Happy Birthday! What a mature fellow you are."
    } else {
        return "Happy Birthday! What a young fellow you are."
    }
}


console.log(graduationFor('Hannah', 2020));


function graduationFor(name, year) {
    return `Congratulations ${name}!
Class of ${year}`;
}


console.log(costOf('Happy Birthday Rob!', 'dollars'))

function costOf(sign, currency) {
    let basePrice = 20;
    let totalPrice = basePrice + 2 * (sign.length);
    return `Your sign costs ${totalPrice} ${currency}.`
}