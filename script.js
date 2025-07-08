let winner=[[1,2,3],[4,5,6],[7,8,9],[1,4,7],[2,5,8],[3,6,9],[1,5,9],[3,5,7]];
let array=new Array(9).fill("E");

function winCheck(){
    for(let [i1,i2,i3] of winner)
    {
        if(array[i1-1]!=='E' &&  array[i1-1]===array[i2-1] && array[i1-1]===array[i3-1]){
            return array[i1-1];
    }
    }
    return null;
}
let main=document.querySelector(".main");
let turn='O';
let count=0;

function handle(event){
  count++;  
  let box=event.target;
  if(box.innerHTML==="O"|| box.innerHTML==="X"){
    return;
  }
  box.style.backgroundColor="purple";
  if(turn=='O'){
    box.innerHTML="O";
    
    array[box.id-1]=turn;
    turn='X';
}
else{
    box.innerHTML="X";
    array[box.id-1]=turn;
    turn='O';
}
let win=winCheck();
if(win){
    
    let  res=document.querySelector("#res");
    res.innerHTML=`winner is ${win}`;
    let img=document.createElement("img");
    img.src="./happy.gif";
    img.style.width = "70px"; 
    res.appendChild(img); 
    main.removeEventListener('click',handle);

    return;
}
if(count==9){
    let  res=document.querySelector("#res");
    res.innerHTML=`ooops Match Tie ;(`;
    main.removeEventListener('click',handle);
    return;
}
}


let button=document.querySelector("button");

function reset(){
    array.fill("E");
    turn="O";
    count=0;
    let  res=document.querySelector("#res");
    res.innerHTML="";
    let box=document.querySelectorAll(".box");
    
    box.forEach(box => {
        box.innerHTML="";
        box.style.backgroundColor="rgb(244, 194, 252)";

    });
    main.addEventListener('click',handle);
}

main.addEventListener('click',handle);
button.addEventListener('click',reset);
