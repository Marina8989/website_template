//appear
const test = document.querySelector('.test');
setTimeout(() => {
      test.style.display = 'block'; 
      
}, 2000);

const test2 = document.querySelector('.test2');
setTimeout(() => {
    test2.style.display = 'block';

}, 7000);

const test3 = document.querySelector('.test3');
setTimeout(() => {
    test3.style.display = 'block';
}, 10000);

const test4 = document.querySelector('.test4');
setTimeout(() => {
    test4.style.display = 'block';
}, 13000);

//disappear


setTimeout(() => {
    test.style.display = 'none';

}, 20000);


setTimeout(() => {
    test2.style.display = 'none';

}, 24000);


setTimeout(() => {
    test3.style.display = 'none';
}, 26000);


setTimeout(() => {
    test4.style.display = 'none';
}, 28000);

//hearts show
const one = document.querySelector('.one');
setTimeout(() => {
     one.style.display = 'block';
}, 28000);

const two = document.querySelector('.two');
setTimeout(() => {
    two.style.display = 'block';
}, 28000);

const three = document.querySelector('.three');
setTimeout(() => {
    three.style.display = 'block';
}, 28000);

const four = document.querySelector('.four');
setTimeout(() => {
    four.style.display = 'block';
}, 28000);

const five = document.querySelector('.five');
setTimeout(() => {
    five.style.display = 'block';
}, 28000);

const six = document.querySelector('.six');
setTimeout(() => {
    six.style.display = 'block';
}, 28000);

const seven = document.querySelector('.seven');
setTimeout(() => {
    seven.style.display = 'block';
}, 28000);

const eight = document.querySelector('.eight');
setTimeout(() => {
    eight.style.display = 'block';
}, 28000);

//hearts size and color

const icon = document.querySelectorAll('.fa-heart');
setInterval(() => {
    for (let i = 0; i < icon.length; i++) {
        icon[i].style.color = 'yellow';
    }
}, 2000);
setInterval(() => {
    for (let i = 0; i < icon.length; i++) {
        icon[i].style.color = 'pink';
    }
}, 3000);

setInterval(() => {
    for (let i = 0; i < icon.length; i++) {
        icon[i].style.color = 'cyan';
    }
}, 5000);
setInterval(() => {
    for (let i = 0; i < icon.length; i++) {
        icon[i].style.color = 'orange';
    }
}, 6000);