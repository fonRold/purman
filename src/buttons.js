import React, { Component }  from 'react';
export default function Buttons(props){
  return(
    <div className="buttons">
      <button type="submit" onClick={props.StateAdd}>Add new purchase</button>
      <button type="submit" onClick={props.StateReport}>Report</button>
      <button type="submit" onClick={props.StateDelete}>Delete purchase</button>
    </div>
  );
}
export function ButtonsAdd(props){
  return (
    <div>
      <input type="date" value={props.fullDate} onChange={props.SetFulldate} />
      <input type="text" value={props.item} onChange={props.SetValue} />
      <input type="text" value={props.cur} onChange={props.SetCur} />
      <input type="text" value={props.price} onChange={props.SetPrice} />
      <input type="submit" value='Add' onClick={props.addPurchase} />
    </div>
  );
}
export function ButtonsReport(props){
  return (
    <div>
      Report for:
      <input type="number" value={props.date} onChange={props.SetDate} />
      <input type="text" value={props.cur} onChange={props.SetCur} />
      <input type="submit" value='Report' onClick={props.ReportPurchase} />
      <div>Sum: {props.report} {props.cur}</div>
    </div>
  );
}
export function ButtonsDelete(props){
  return(
    <div>
      <input type="date" value={props.fullDate} onChange={props.SetFulldate} />
      <input type="submit" value="Remove" onClick={props.DeletePurchase} />
    </div>
  );
}