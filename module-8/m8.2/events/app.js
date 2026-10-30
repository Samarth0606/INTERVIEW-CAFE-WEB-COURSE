


// SELECTION
let btnEl = document.querySelector('button');
// btnEl.style.color = "red"
// btnEl.style.border = "2px solid black"

// MANIPULATION
btnEl.style.cssText = `
                color:red;
                border: 2px solid black;
                padding:10px;
                font-size: 30px;
            `


btnEl.addEventListener('click' , function(){
    console.log("hello");
    
});

