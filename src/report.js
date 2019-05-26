import React, { Component }  from 'react';
import Convert from './convert';
export default function Report(cur,year,purchasesArr,APIcurrs){
  let check;
  var sum=0;
  for(let i=0; i<Object.keys(APIcurrs).length;i++) if(cur==Object.keys(APIcurrs)[i]) check=true;
  if(check){
    console.log(year);
    console.log(cur);
    if(year.toString() && cur){
      for(let i=0; i<purchasesArr.length; i++){
        if (purchasesArr[i].split('|')[0].split('-')[0]==year.toString()){  
          if(purchasesArr[i].split('|')[2]!=cur){sum+=Convert(purchasesArr[i].split('|')[2],parseInt(purchasesArr[i].split('|')[3],10),cur,APIcurrs)}
          else{sum+=parseInt(purchasesArr[i].split('|')[3],10)};
        }     
      }  
    }
  }else{
      alert("Inappropriate values!");
  } 
  return sum;
  console.log("Income was succesfully reported!");
}