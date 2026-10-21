


// let o1 = new Promise((resolve,reject)=>{
//     reject("no money")
//     resolve("100 rupees")
// })
// // console.log(o1);
// o1
// .then((data)=>{ console.log(data) })
// .catch((err)=>{ console.log(err) })
// .finally(()=>{ console.log("everything done") })

// ---------------



function step1(){
    console.log("please wait selecting image...");
    return new Promise((resolve , reject)=>{
        setTimeout(()=>{
            resolve("IMAGE SELECTED")
        } , 4000)
    }) 
}

function step2(image){
    console.log(`please wait adding filter to my ${image}...`);
    return new Promise((resolve , reject)=>{
        setTimeout(()=>{
            resolve("FILTERED IMAGE")
        } , 2000)
    }) 
}

function step3(filter){
    console.log(`please wait adding caption to my ${filter}...`);
    return new Promise((resolve , reject)=>{
        setTimeout(()=>{
            resolve("CAPTIONED IMAGE")
        } , 5000)
    }) 
}

function step4(caption){
    console.log(`please wait finally uploading my ${caption}...`);
    return new Promise((resolve , reject)=>{
        setTimeout(()=>{
            resolve("IMAGE UPLOADED")
        } , 3000)
    }) 
}

step1()
.then((image)=>{
    console.log(image) 
    return step2(image)
})
.then((filter)=>{
    console.log(filter);
    return step3(filter)
})
.then((caption)=>{
    console.log(caption);
    return step4(caption)
})
.then((uploaded)=>{
    console.log(uploaded);
})
.catch((err)=>{
    console.log(err)
})


