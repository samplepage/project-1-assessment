let count = 0;
document.querySelector('#count').innerHTML = count; 

let thatForm = document.querySelector('#thisForm').innerHTML;

let thisPlus = document.querySelector('#plus');
let thisMinus = document.querySelector('#minus'); 


const increaseNumber = () => {
    console.log(count);
    console.log(thatForm);
    thatForm += count;  
    document.querySelector('#count').innerHTML = count;  
}; 


const decreaseNumber = () => {
    console.log(count);
    thatForm -= count;
    document.querySelector('#count').innerHTML = count; 
};  

/*const changeColor = () => {
    if (count < 0) {
        document.querySelector('#count').classList.add('color');
    }
}*/

//event listeners-------------------
thisPlus.addEventListener('click', increaseNumber);
thisMinus.addEventListener('click', decreaseNumber);