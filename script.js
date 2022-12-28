
function navMove(){
    var navmenu = document.getElementById("nav-bar");
    let id = null;
        let pos = 100;
        clearInterval(id);
        id  =setInterval(dis,5);
        function dis(){
            if(pos == 65){
                clearInterval(id);
            }else{
                pos--;;
                navmenu.style.left = pos+"%";
                
            }
        }
}
function closeNav(){
    var navmenu = document.getElementById("nav-bar");
    let id = null;
        let pos = 65;
        clearInterval(id);
        id  =setInterval(dis,5);
        function dis(){
            if(pos == 100){
                clearInterval(id);
            }else{
                pos++;
                navmenu.style.left = pos+"%";
                
            }
        }
}
function exitsearch(){
    var dashU = document.getElementById("searchBarDashU");
    var dashB = document.getElementById("searchBarDash");
    var circle = document.getElementById("searchbar");
    let id = null;
    let pos = 100;
    
    clearInterval(id);
    id  =setInterval(dis,3);
    function dis(){
        if(pos == 30){
            clearInterval(id);
        }else{
            pos--;
            let posDash = pos/6.5;
                circle.placeholder = "";
                circle.style.width = 30+"px";
                dashB.style.bottom = (posDash)+"px";
                dashB.style.right = (posDash)+"px";
                dashU.style.visibility = 'hidden';
        }
    } 
    
}

function searchAnimation(){
    var circle = document.getElementById("searchbar");
    var dashB = document.getElementById("searchBarDash");
    var dashU = document.getElementById("searchBarDashU");
    let id = null;
    let pos = 30;
    clearInterval(id);
    id  =setInterval(dis,3);
    function dis(){
        if(pos == 100){
            clearInterval(id);
        }else{
            pos++;
                circle.placeholder = "Type Text here..";
                circle.style.width = pos+"%";
                dashB.style.bottom = (pos/5.8)+"px";
                dashB.style.right = (pos/5)+"px";
                dashU.style.top = (pos/5.8)+"px";
                dashU.style.right = (pos/5)+"px";
                dashU.style.visibility = 'visible';
                
        }
    }
}
var menu_status = 'hidden';
function nav2(){
    var menu = document.getElementById("cont4-nav-menu");
    
    if(menu_status == 'hidden'){
        let id = null;
        let pos = -500;
        clearInterval(id);
        id  =setInterval(dis,1);
        function dis(){
            if(pos == 120){
                clearInterval(id);
            }else{
                pos+=10;
                menu.style.left = pos+"px";
                menu_status = 'not-hidden';
            }
        }
        
    }else{
        let id = null;
        let pos = 120;
        clearInterval(id);
        id  =setInterval(dis,1);
        function dis(){
            if(pos == -500){
                clearInterval(id);
            }else{
                pos-=10;
                menu.style.left = pos+"px";
                menu_status = 'hidden';
            }
        }
    }
}

var imgSrc = document.getElementById("contImg");
var x = 2;
setInterval(chanceSrc, 10500);
function chanceSrc(){
    if(x == 5){
        imgSrc.src = "slider/image_"+x+".jpg";
        x = 1;
    }else{
        imgSrc.src = "slider/image_"+x+".jpg";
        x++;
    }
}

const texts = ["UNMATCHED COMBINATIONS.","SUPERIOR QUALITY.", "SATISFYING TEXTURES."];
var txt = document.getElementById("text-animated");
var y = 0;
setInterval(changeTxt,4005);
function changeTxt(){
    if(y == 2){
        txt.innerHTML = texts[y];
        y = 0;
    }else{
        txt.innerHTML = texts[y]
        y++;
    }
}