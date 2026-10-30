

// localStorage.setItem("theme", "dark") //2 args
// console.log(localStorage.getItem("theme")); // 1



// localStorage.setItem("age", 10) 
// console.log(localStorage.getItem("age")); 


// JSON.stringify() //STORE

// JSON.parse() //READ

// --------------------------

let obj = {
    name:"SAMARTH",
    Address: "Delhi",
    pincode: 110000
}

localStorage.setItem("personal", JSON.stringify(obj)) 

// console.log(localStorage.getItem("personal")); 

// console.log(typeof(localStorage.getItem("personal"))); 

let finalData = JSON.parse(localStorage.getItem("personal"))

console.log(finalData);



