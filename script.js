let items=[
    {
        "name":"Crusty Garlic Focaccia with Melted Cheese",
        "price":105
    },
    {
        "name":"French Fires",
        "price":110

    },
    {
        "name":"Home Country Fries with Herbs & Chilli Flakes",
        "price":100

    },
    {
        "name":"French Fries with Cheese & Jalapenos",
        "price":135

    }
]
let table1=[];
let table2=[];
let table3=[];

for(let item in items)
{ 
    let reverse=items.length-item-1;
        let toAdd=document.querySelector(".items");
    toAdd.insertAdjacentHTML('afterbegin',
        `<div id="${reverse}" class="item" draggable="true" ondragstart="drag(event)">
        <h2>${items[reverse].name}</h2>
        <p class="Price">&#8377 :${items[reverse].price}</p> 
    </div>`
    )    
}

//==========search for item==========//
let search=document.getElementById('menuSearch');
let menus=document.getElementsByClassName('item');

search.addEventListener('keyup',function(event){
    let search=event.target.value.toLowerCase();
    Array.from(menus).forEach(function(menus){
        const title=menus.firstElementChild.innerText.toLowerCase();
        if(title.indexOf(search)==-1){
         menus.style.display='none';
        }else{
            menus.style.display='block';
        }
    })

})

//------Search for table-----------//
let tableSearch=document.getElementById('tableSearch');
let tables=document.getElementsByClassName('table');

tableSearch.addEventListener('keyup',function(event){
    let search=event.target.value.toLowerCase();
    Array.from(tables).forEach(function(tables){
        const title=tables.firstElementChild.innerText.toLowerCase();
        if(title.indexOf(search)==-1){
         tables.style.display='none';
        }else{
            tables.style.display='block';
        }
    })

})

document.addEventListener("drop",function(event){
    
 event.preventDefault();
  var data = event.dataTransfer.getData("text");
  let target=event.path[0].id+event.path[1].id;
  if(target=="table1"){
    if(table1[data]==undefined){
        table1[data]=1;
      }
      else{
          table1[data]+=1;
      }
      let tableLength=table1.length;
      updateTable1(target);
    }
    else if (target=="table2") {
        if(table2[data]==undefined){
            table2[data]=1;
          }
          else{
              table2[data]+=1;
          }
          let tableLength=table2.length;
          updateTable1(target);
        
    } else {
        if(table3[data]==undefined){
            table3[data]=1;
          }
          else{
              table3[data]+=1;
          }
          let tableLength=table3.length;
          updateTable1(target);
        
    }
    
})

function updateTable1(target){
    let totalId=target+"Total";
    let itemTotal=target+"Items";
    let total=document.getElementById(totalId);
    let item=document.getElementById(itemTotal);
    let totalValue=0;
    let noOfItems=0;
    let temp;
    if(target=="table1"){
       temp=table1;
    }else if(target=="table2"){
temp=table2;
    }else{
        temp=table3;
    }
    for(let incriment=0;incriment<temp.length;incriment++){
        if(temp[incriment]!=undefined&& temp[incriment]!=0){
            totalValue+=items[incriment].price*temp[incriment];
            noOfItems+=parseInt(temp[incriment]);
        }
    }
    total.innerText=0;
    item.innerText=0;
total.innerText=totalValue;
item.innerText=noOfItems;  
}
// function updateTable2(){
//     let total=document.getElementById("table2Total");
//     let item=document.getElementById("table2Items");
//     let totalValue=0;
//     let noOfItems=0;
//     for(let incriment=0;incriment<table2.length;incriment++){
//         if(table2[incriment]!=undefined){
//             totalValue+=items[incriment].price*table2[incriment];
//             noOfItems+=parseInt(table2[incriment]);
//         }
//     }
// total.innerText=totalValue;
// item.innerText=noOfItems;  

// }function updateTable3(){
//     let total=document.getElementById("table3Total");
//     let item=document.getElementById("table3Items");
//     let totalValue=0;
//     let noOfItems=0;
//     for(let incriment=0;incriment<table3.length;incriment++){
//         if(table3[incriment]!=undefined){
//             totalValue+=items[incriment].price*table3[incriment];
//             noOfItems+=parseInt(table3[incriment]);
//         }
//     }
// total.innerText=totalValue;
// item.innerText=noOfItems;  

// }
document.addEventListener("dragover", function(event) {
    event.preventDefault();
  }, false);
var bill=document.querySelector(".bill");
function drag(event){
    event.dataTransfer.setData("text", event.target.id);
}
function billOpen(){
    bill.style.display="block";
    let tabl;
    console.log(this.event.path[0].id);
    console.log("for 1:"+this.event.path[1].id);
    if(this.event.path[0].id=="")tabl=this.event.path[1].id;
    else{
        tabl=this.event.path[0].id;
    }
    updatePop(tabl);
}

function hidePop(){
    bill.style.display="none";
    hideRemovePop();
}
function hideRemovePop(){
    let toAdd=document.querySelectorAll(".added");
    for(let i=0;i<toAdd.length;i++){
        toAdd[i].remove();
}
let buttonRemove=document.querySelector(".buttonRemove");
buttonRemove.remove();
}
window.onclick = function(event) {
    if (event.target == bill) {
    let toAdd=document.querySelector(".tableAdd");
      bill.style.display = "none";
    } 
}


function updatePop(called){
    let id;
        document.querySelector(".inTable").innerText=called;
        let toAdd=document.querySelector(".tableHeading");
        if(called=="table1")temp=table1;
        else if (called=="table2")temp=table2;
        else{temp=table3};
    id=called+"Total";
    let total=document.getElementById(id);
    document.querySelector(".totalSpan").innerText=total.innerText;  
    for(let item=0;item<temp.length;item++){
        if(temp[item]!=undefined&&temp[item]!=0){
            toAdd.insertAdjacentHTML('afterEnd',
        `<tr class="added">
            <td>${items[item].name}</td>
            <td>${items[item].price}</td>
            <td><input type="number" min=0 onchange="upd()" id="number" value=${temp[item]}></input></td>
            <td id="forItem" style="display:none">${item}</td>
            <td class="fortable" style="display:none">${called}</td>
            <td class="total">${temp[item]*items[item].price}<td>
            <td class="remov"><img  onClick="deleteItem()" src="images/dustbin.png" alt=""></td>
        </tr>`)
        } 
    }
    let forButton=document.querySelector(".popTable");
    forButton.insertAdjacentHTML('beforeEnd',
    `<div class="buttonRemove">
    <p style="display:none">${called}</p>
    <button class="button1" onclick="closeSession()">Generate Bill and Close Session</button>
    </div>
    `)
}