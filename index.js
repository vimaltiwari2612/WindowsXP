setTime = function (){
    var today = new Date();
    var time = today.getHours() + ":" + today.getMinutes() ;
    document.getElementsByClassName("time")[0].innerHTML = time;
    
}

function register(e, div){
    clearDropdowns(div);
    if(e.button === 2){
        console.log('open dropdown');
        openDropdown(e, div);
    }
}

clearDropdowns = (parent) =>{
    var dropdowns = parent.getElementsByClassName("dropdown");
    
    for(var i = 0 ; i < dropdowns.length ; i++){
    
        dropdowns[i].remove();
    }

}

openDropdown = (e , parent) =>{
    
div = document.createElement("div");
div.style.position = "absolute";
div.className = "dropdown";
div.style.left = e.x+"px";
div.style.top = e.y+"px";

parent.appendChild(div);

}

setTime();