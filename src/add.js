import React, { Component }  from 'react';
export default function AddPurchase(fullDate,item,cur,price,currs){
    let check;
    for(let i=0; i<Object.keys(currs).length;i++){
      if(cur==Object.keys(currs)[i]){
       check=true;
       break;
      }
    }
    if(!check || isNaN(price)){
      alert("Inappropriate values!");
    }
    else{
	    console.log(fullDate + ' '+ item + ' ' + cur + ' ' + price);
	    return fullDate + '|' + item + '|' + cur + '|'+ price.toString();
        console.log("New purchase was added");  
    }
}