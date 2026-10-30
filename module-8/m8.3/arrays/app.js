
let sectionEl = document.querySelector('section');

let names = ["SAM" , "MAV" , "BUNNY" , "KICKY" , "SIMBA"]



// names.forEach(element => {
//     sectionEl.append(element)
// });

names.forEach(element => {
    let p = document.createElement('p');
    p.innerText = element;
    sectionEl.append(p)
});

