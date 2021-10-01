var userName = prompt('Enter your name here:');
    console.log('Hello, ' + userName);

var userQuestion = prompt('Ask a question here: ');
console.log('So, ' + userName +  ' asked: ' + userQuestion);

var randomNumber = Math.floor(Math.random() * 8);

console.log('The magic eight ball says: ')
var eightBall = '';

if(randomNumber === 0){
    eightBall = 'It is certain';
}
if(randomNumber === 1){
    eightBall = 'It is decidedly so';
}
if(randomNumber === 2){
    eightBall = 'Reply hazy try again';
}
if(randomNumber === 3){
    eightBall = 'Cannot predict now';
}
if(randomNumber === 4){
    eightBall = 'Do not count on it';
}
if(randomNumber === 5){
    eightBall = 'My sources say no';
}
if(randomNumber === 6){
    eightBall = 'Outlook not so good';
}
if(randomNumber === 7){
    eightBall = 'Signs point to yes';
}
console.log(eightBall);

