let input=document.getElementById("number");
function upd(){
    let value=event.target.value;
    let forItem=event.target.parentNode.nextElementSibling;
    let fortable=forItem.nextElementSibling;
    let total=fortable.nextElementSibling;
    let totals=document.querySelectorAll(".total");
    let finalTotal=0;
    if(fortable.innerText=="table1"){
        table1[forItem.innerText]=value;
        total.innerText=items[forItem.innerText].price*value;
        updateTable1(fortable.innerText);
    }else if(fortable.innerText=="table2"){
        
        table2[forItem.innerText]=value;
        total.innerText=items[forItem.innerText].price*value;
        updateTable2();
    }else{
        table3[forItem.innerText]=value;
        total.innerText=items[forItem.innerText].price*value;
        updateTable3()
    }
    totals.forEach(sum=>{
        finalTotal+=parseInt(sum.innerText);
    })
    let span=document.querySelector(".totalSpan");
    span.innerText=finalTotal;
}
function deleteItem(){
    let totals=document.querySelectorAll(".total");
    let value=event.target.value;
    var forTable=event.target.parentNode.previousElementSibling.previousElementSibling.previousElementSibling;
    let forItem=forTable.previousElementSibling;
    let temp;
    if(forTable.innerText=="table1")temp=table1;
    else if(forTable.innerText=="table2")temp=table2;
    else{temp=table3;}
    temp[forItem.innerText]='0';
    updateTable1(forTable.innerText);
    
    hideRemovePop();
    updatePop(forTable.innerText);
}
function closeSession(){
    let toClear=event.target.previousElementSibling.innerText;
    if(toClear=="table1"){
      for(let count=0;count<table1.length;count++){
          table1[count]=0;
      }
    }else if(toClear="table2"){
        for(let count=0;count<table2.length;count++){
            table2[count]=0;
        }  
    }else{
        for(let count=0;count<table3.length;count++){
            table3[count]=0;
        } 
    }
    updateTable1(toClear);
    hidePop();
}
