let size = 10;

let line1 = '';
let line2 = '';

for (var i = 0; i<10; i=i+1 ) {
     if (i%2 == 0) {
        line1 = line1 + '0';
        line2 = line2 + 'x';
     }

    else {
        line1 = line1 + 'x';
        line2 = line2 + '0';
     }

}


for (var i = 0; i<10;i++){
    if (i%2 == 0){
        console.log(line1);
    }
    if (i%2 == 1){
        console.log(line2);
    }
}

//console.log ( )


function capitalise(str){
    let a = str[0].toUpperCase() + str.slice(1,str.length);
    return a;
}

let original = prompt ("Say Buddy !!!");
let final = capitalise(original);
console.log(final);

//

let str = prompt('Haan bhai kya haaal hy ??')
let arr = str.split(" ");
for(var i=0; i<arr.length; i++){
    arr[i]=arr[i].charAt(0).toUpperCase()+arr[i].slice(1);
}
let str2 = arr.join(" ");
console.log(str2);

//

let original = prompt("Type something here.");
let char = capitalise(original);
for(char i=0; i<char.length; i++)
{
    final[i]=final[i].charAt(0).toUpperCase()+final[i].slice(1);
}
let final = final.join(" ");
console.log(final);



let str = prompt('Type anything !')
let arr = str.toLowerCase.split(" ");
for(var i=0; i<arr.length; i++){
    arr[i]=arr[i].charAt(0).toUpperCase()+arr[i].slice(1);
}
let str2 = arr.join(" ");
console.log(str2);