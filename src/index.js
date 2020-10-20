    const numbers = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 
    'seventeen', 'eighteen', 'nineteen', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    const tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy' ,'eighty' , 'ninety'];


module.exports = function toReadable (number) { 
    
    if (0 <= number && number <= 19) {                       // от 0 до 19 включительно
        return numbers[number];
    } 
    
    if (20 <= number && number <= 99 && number % 10 == 0){   // от 20 до 99 включительно только круглые (20,30,40...90)
        return tens[Math.floor(number / 10)];
    }
    
    if (20 <= number && number <= 99 && number % 10 > 0){     // от 20 до 99 включительно все кроме круглых (20,30,40...90)
        return tens[Math.floor(number / 10)] + ' ' + numbers[number % 10];
    }
    
    if (100 <= number && number <= 999 && number % 100 == 0) {  // от 100 до 999 включительно только круглые (100, 200,300,400...900)
        return numbers[number / 100] + ' hundred';
    }
    
    if (100 <= number && number <= 999 && number % 100 <= 19) {                       // от 100 до 999 включительно все кроме круглых (100, 200,300,400...900) где 2 последние цифры до 20
        return numbers[Math.floor(number / 100)] + ' hundred ' + numbers[number % 100];
    }

    if (100 <= number && number <= 999 && number % 10 == 0 && number % 100 >= 20 ) {                       // от 100 до 999 включительно все кроме круглых (100, 200,300,400...900) где 2 последние цифры больше 20, но круглые
        return numbers[Math.floor(number / 100)] + ' hundred ' + tens[+number.toString()[1]];
    }

    if (100 <= number && number <= 999 && number % 100 >= 20 ) {                       // от 100 до 999 включительно все кроме круглых (100, 200,300,400...900) где 2 последние цифры больше 20, не круглые
        return numbers[Math.floor(number / 100)] + ' hundred ' + tens[+number.toString()[1]] + ' ' + numbers[number % 10];
    }
}
