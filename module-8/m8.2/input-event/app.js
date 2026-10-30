


let inpEl = document.querySelector('input')
let btnEL = document.querySelector('button')


// inpEl.addEventListener('input' , function(){
//     console.log("input triggered");
    
// })

// event

// inpEl.addEventListener('input' , function(event){
//     // console.log(event);
//     // console.log(event.target);
//     console.log(event.target.value);
//     console.log(event.data);
// })
// -------------------------

btnEL.addEventListener('click', function(e){
    console.log(inpEl.value);
})
