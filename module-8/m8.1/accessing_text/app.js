
// selection
let heading1 = document.querySelector('h1');
console.log(heading1);



// manipulation

console.log(heading1.innerText);
console.log(heading1.textContent);
console.log(heading1.innerHTML);

// heading1.textContent
// heading1.innerHTML
heading1.innerText = "SAMARTH VOHRA" //SETTER
heading1.textContent = "SAMARTH VOHRA 2" //SETTER
heading1.innerHTML = "SAMARTH VOHRA 3" //SETTER



// ----------------------

// heading1.style.color = "red"
// heading1.style.backgroundColor = "yellow"
heading1.style.cssText = `  
                            color: red;
                            background-color: green;
                            font-size: 100px;
                        `
