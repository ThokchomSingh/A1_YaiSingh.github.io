
function capitalise(str){
    let a = str[0].toUpperCase() + str.slice(1,str.length);
    return a;
}

let original = prompt ("Say Buddy !!!");
let final = capitalise(original);
console.log(final);


let str = prompt('Type anything !')
let a = str.toLowerCase().split(" ");
for(i=0; i<a.length; i++){
    a[i]=a[i].charAt(0).toUpperCase()+a[i].slice(1);
}
let opt = a.join(" ");
console.log(opt);
