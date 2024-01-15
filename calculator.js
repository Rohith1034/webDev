var str = "";
var inp = "";
document.getElementsByClassName("inner one")[0].addEventListener("click",function (){
    alert("Got clicked");
    str = str + 1;
    alert(str);
    str = 0;
});
document.getElementsByClassName("inner two")[0].addEventListener("click",function (){
    alert("Got clicked");
    str = str + 2;
    alert(str);
    str = 0;
});
document.getElementsByClassName("inner three")[0].addEventListener("click",function (){
    alert("Got clicked");
    str = str + 3;
    alert(str);
    str = 0;
});
document.getElementsByClassName("inner four")[0].addEventListener("click",function (){
    alert("Got clicked");
    str = str + 5;
    alert(str);
    str = 0;
});
document.getElementsByClassName("inner five")[0].addEventListener("click",function (){
    alert("Got clicked");
    str = str + 5;
    alert(str);
    str = 0;
});
document.getElementsByClassName("inner six")[0].addEventListener("click",function (){
    alert("Got clicked");
    str = str + 6;
    alert(str);
    str = 0;
});
document.getElementsByClassName("inner seven")[0].addEventListener("click",function (){
    alert("Got clicked");
    str = str + 7;
    alert(str);
    str = 0;
});
document.getElementsByClassName("inner eight")[0].addEventListener("click",function (){
    alert("Got clicked");
    str = str + 8;
    alert(str);
    str = 0;
});
document.getElementsByClassName("inner nine")[0].addEventListener("click",function (){
    alert("Got clicked");
    str = str + 9;
    alert(str);
    str = 0;
});
document.getElementsByClassName("inner zero")[0].addEventListener("click",function (){
    alert("Got clicked");
    str = str + 0;
    alert(str);
    str = 0;
});

document.addEventListener("keydown",function (event){
    if (event.key == "1" ) {
        str =  str + 1;
        alert(str);
        str = 0;
    }
    if (event.key == "2" ) {
        str =  str + 2;
        alert(str);
        str = 0;
    }
    if (event.key == "3" ) {
        str =  str + 3;
        alert(str);
        str = 0;
    }
    if (event.key == "4" ) {
        str =  str + 4;
        alert(str);
        str = 0;
    }
    if (event.key == "5" ) {
        str =  str + 5;
        alert(str);
        str = 0;
    }
    if (event.key == "6" ) {
        str =  str + 6;
        alert(str);
        str = 0;
    }
    if (event.key == "7" ) {
        str =  str + 7;
        alert(str);
        str = 0;
    }
    if (event.key == "8" ) {
        str =  str + 8;
        alert(str);
        str = 0;
    }
    if (event.key == "9" ) {
        str =  str + 9;
        alert(str);
        str = 0;
    }
    if (event.key == "0" ) {
        str =  str + 0;
        alert(str);
        str = 0;
    }
    if (event.key == "/" ) {
        str =  str + "/";
        alert(str);
        str = 0;
    }
    if (event.key == "*" ) {
        str =  str + "*";
        alert(str);
        str = 0;
    }
    if (event.key == "+" ) {
        str =  str + "+";
        alert(str);
        str = 0;
    }
    if (event.key == "=" ) {
        str =  str + "=";
        alert(str);
        str = 0;
    }

} );