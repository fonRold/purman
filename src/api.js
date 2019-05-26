import React, { Component }  from 'react';
export default function getAPI(){
	var APIcurrs=[];
  fetch('http://data.fixer.io/api/latest?access_key=711c8140a61b5a445bb3853ffad0d6e2')
    .then((Response) => Response.json())
    .then((findresponse) => 
    {
      APIcurrs = findresponse.rates;
      console.log(findresponse);
    });
    console.log("Data was succesfully loaded!");
    alert(Object.keys(APIcurrs));
    return APIcurrs;
}