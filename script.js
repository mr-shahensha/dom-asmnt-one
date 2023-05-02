let decbtn=document.getElementById("decrement-btn");
let disval=document.getElementById("display-value");
decbtn.addEventListener("click",()=>{
    const value = Number(disval.innerText);
    if (value > 0) {
        disval.innerText = value - 1;
    } else {
      alert("Negative value not allowed");
    }
});
console.log(decbtn);

