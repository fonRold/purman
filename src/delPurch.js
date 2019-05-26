import React, { Component }  from 'react';
export default function DeletePurchase(fullDate,purchasesArr,listPurchases){
    for(let i=0; i<purchasesArr.length; i++){
      if (purchasesArr[i].split('|')[0]==fullDate){
        purchasesArr.splice(i,1);
        i--;
        console.log("Purchase was removed!");
      } 
    }
}