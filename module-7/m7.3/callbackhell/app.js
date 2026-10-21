function step1( fn ){
    console.log("please wait i am selecting image...");
    setTimeout(()=>{
        fn("SELECTED IMAGE")
    } , 4000)
}

function step2(image , fn){
    console.log(`please wait adding filter to my ${image}...`);
    setTimeout(()=>{
        fn('FILTERED IMAGE')
    } , 2000)
}

function step3(filter , fn){
    console.log(`please wait adding caption to your ${filter}...`);
    setTimeout(()=>{
        fn("CAPTIONED IMAGE")
    } , 5000)
}

function step4(caption){
    console.log(`please wait uploading ${caption}`);
    setTimeout(()=>{
        console.log("FINALLY UPLOADED");
    } , 3000)
}

// CALLBACK HELL - HORIZONTAL GROWTH - PYRAMID OF DOOM
step1( function(image){
    console.log(image);
    step2( image , function(filter){
        console.log(filter);
        step3(filter , function(caption){
            console.log(caption);
            step4(caption)
        } )
    } )
} )






