import React, { Component }  from 'react';
import ReactDOM from 'react-dom';
import AddPurchase from './add';
import Report from './report'
import DeletePurchase from './delPurch';
import Buttons,{ButtonsAdd,ButtonsReport,ButtonsDelete} from './buttons';

var purchasesArr=[];
var listPurchases = purchasesArr.map((purchase) =>
  <li>{purchase}</li>);
function getAPI(){
  fetch('http://data.fixer.io/api/latest?access_key=711c8140a61b5a445bb3853ffad0d6e2')
    .then((Response) => Response.json())
    .then((findresponse) => 
    {
      APIcurrs = findresponse.rates;
      console.log(findresponse);
    });
    console.log("Data was succesfully loaded!");
}
var APIcurrs=[];
export default class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      arr: listPurchases,
      item: 'Camera',
      date: 2019,
      fullDate: '2019-01-01',
      cur: 'UAH',
      price: '1240',
      showing: "start",
      report: 0,
    };
  }
  componentDidMount(){
    getAPI();if(!APIcurrs)alert("ERROR! API wasn't loaded!");
    purchasesArr=JSON.parse(localStorage['purchases']);
    listPurchases = purchasesArr.map((purchase) =>
    <li>{purchase}</li>);
    this.setState({arr: listPurchases});
  }
  componentWillUpdate(){
    localStorage['purchases']=JSON.stringify(purchasesArr);
  }
  handleSubmit = (event) => {event.preventDefault();}
  StateReport =() =>{this.setState({showing: 'report'});}
  StateAdd =() =>{this.setState({showing: 'add'});}
  StateDelete =() =>{this.setState({showing: 'delete'});}
  SetValue = (event) =>{this.setState({item: event.target.value});}
  SetDate = (event) =>{this.setState({date: event.target.value});}
  SetCur = (event) =>{this.setState({cur: event.target.value.toUpperCase()});}
  SetPrice = (event) =>{this.setState({price: event.target.value});}
  SetFulldate = (event) =>{this.setState({fullDate: event.target.value});}
  AddPurchase = () =>{  
    let newPurch=AddPurchase(this.state.fullDate,this.state.item,this.state.cur,this.state.price,APIcurrs);
    if(newPurch){
      purchasesArr.push(newPurch);
      listPurchases = purchasesArr.sort().map((purchase) =>
        <li>{purchase}</li>
      );
      this.setState({arr:listPurchases}); 
    } 
  }
  ReportPurchase = () =>{
    this.setState({report:Report(this.state.cur, this.state.date,purchasesArr,APIcurrs)});
  }
  DeletePurchase = () =>{
    DeletePurchase(this.state.fullDate,purchasesArr);
    listPurchases = purchasesArr.map((purchase) =>
         <li>{purchase}</li>
        ); 
    this.setState({arr:listPurchases}); 
  }   
  render(){
    if(this.state.showing==='start')
      return(
        <div id="main-panel">     
          <form onSubmit={this.handleSubmit}>           
            <Buttons StateAdd={this.StateAdd} StateReport={this.StateReport} StateDelete={this.StateDelete} />
          </form>
          <ul>{this.state.arr}</ul>
        </div>
      );
    else
      if(this.state.showing === "report")
      return(
        <div id="main-panel">     
        
          <form onSubmit={this.handleSubmit}>            
                <ButtonsReport date={this.state.date} SetDate={this.SetDate} cur={this.state.cur} SetCur={this.SetCur} report={this.state.report} ReportPurchase={this.ReportPurchase} />
          </form>
          <ul>{this.state.arr}</ul>
        </div>
      );
    else
    if(this.state.showing === "add")
      return(
        <div id="main-panel">     
          <form onSubmit={this.handleSubmit}>           
                <Buttons StateAdd={this.StateAdd} StateReport={this.StateReport} StateDelete={this.StateDelete} />
                <ButtonsAdd fullDate={this.state.fullDate} item={this.state.item} cur={this.state.cur} price={this.state.price} SetFulldate={this.SetFulldate} SetCur={this.SetCur} SetPrice={this.SetPrice} addPurchase={this.AddPurchase} SetValue={this.SetValue} />
            </form>
          <ul>{this.state.arr}</ul>
        </div>
      );
    else
    if(this.state.showing === "delete")
      return(
        <div id="main-panel">     
          <form onSubmit={this.handleSubmit}>           
              <Buttons StateAdd={this.StateAdd} StateReport={this.StateReport} StateDelete={this.StateDelete} />
              <ButtonsDelete fullDate={this.state.fullDate} SetFulldate={this.SetFulldate} DeletePurchase={this.DeletePurchase} />
          </form>
          <ul>{this.state.arr}</ul>
        </div>
      );
  }
}
ReactDOM.render(
  <App />,
  document.getElementById('root')
);