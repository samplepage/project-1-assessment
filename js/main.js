let count = 0; 
document.querySelector('#count').innerHTML = count; 

let thisPlus = document.querySelector('#plus');
let thisMinus = document.querySelector('#minus'); 

document.addEventListener('DOMContentLoaded', ()=>{

    const increaseNumber = () => {
        console.log(count);
        //console.log(input.value); 
        count = count + input.value;  
        document.querySelector('#count').innerHTML = count;
        if (count < 0) {
            document.querySelector('#count').classList.add('color');
        }
    };   

    const decreaseNumber = () => {
        console.log(count);
        count = count - input.value;
        document.querySelector('#count').innerHTML = count; 
        if (count < 0) {
            document.querySelector('#count').classList.add('color');
        }
    };    

    //event listeners-------------------
    thisPlus.addEventListener('click', increaseNumber);
    thisMinus.addEventListener('click', decreaseNumber); 

})  