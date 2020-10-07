let count = 0;
document.querySelector('#count').innerHTML = count; 

function onload() {
    console.log(count);
};  

let thatForm = document.getElementById('thisForm'); 
let bForm = thatForm.value;

let thisPlus = document.querySelector('#plus');
let thisMinus = document.querySelector('#minus'); 


const increaseNumber = () => {
    console.log(count);
    console.log(bForm);
    bForm += count;  
    //document.querySelector('#count').innerHTML = count;  
}; 


const decreaseNumber = () => {
    console.log(count);
    bForm -= count;
    //document.querySelector('#count').innerHTML = count; 
};  

/*const changeColor = () => {
    if (count < 0) {
        document.querySelector('#count').classList.add('color');
    }
    <form id="aForm" action="get">
}*/

//event listeners-------------------
thisPlus.addEventListener('click', increaseNumber);
thisMinus.addEventListener('click', decreaseNumber); 