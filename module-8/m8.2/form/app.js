

let formEl = document.querySelector('form');

formEl.addEventListener('submit' , function(e){
    e.preventDefault();
    // console.log(e);
    // console.log(formEl.children);
    console.log(formEl.children[0].value);
    console.log(formEl.children[1].value);
})





