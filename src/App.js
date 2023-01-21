import logo from './logo.svg';
import './App.css';
import {Red} from "./components/red"
import {Green} from "./components/green"
import {Yellow} from "./components/yellow"
import {BrowserRouter,Route} from "react-router-dom";
import {Component} from "react";

class App extends Component {
  constructor(props) {
    super(props);
     this.state = {
      red: '/Red',
      green: ' /Green',
      yellow:'/Yellow',
      redIsActive:true,
      yellowIsActive:false,
      greenIsActive:false,
         redStyle:'active__red',
         greenStyle:'green',
         yellowStyle:'yellow',
         i:0,
    }
  }

  yellTimeout = () =>{
      if (this.state.i === 0 ){
          setTimeout(() =>{
              this.setState({
                  yellowStyle:'yellow',
                  greenIsActive:true,
                  yellowIsActive:false,
                  greenStyle:'active__green'
              })
          },2000)
      } else if (this.state.i === 1){
           setTimeout(()=>{
               this.setState( {
                   yellowStyle:'yellow',
                   redIsActive:true,
                   yellowIsActive:false,
                   redStyle:'active__red'
               })
           },2000)
      }
  }







greenTimeout = () =>{
    setTimeout(() =>{
        this.setState({
            greenStyle:'green',
            greenIsActive:false,
            yellowIsActive:true,
            yellowStyle:'active__yellow',
            i:1
        })
    },5000)
}
redTimeout = () =>{

     setTimeout(() =>{
         this.setState({
             redStyle:'red',
             redIsActive:false,
             yellowIsActive:true,
             yellowStyle:'active__yellow',
             i:0
         })
     },5000)
}



render() {
    if (this.state.redIsActive){

        this.redTimeout();
    } else if (this.state.yellowIsActive){
        this.yellTimeout();

    } else if (this.state.greenIsActive){
        this.greenTimeout();
    }

  return (
      <BrowserRouter>
        <div className="traffic">
          <Route path={this.state.red} component={Red}/>
          <Route path={this.state.green} component={Green} />
          <Route path={this.state.yellow} component={Yellow} />


          <Red colorStyle={this.state.redStyle}/>
          <Yellow colorStyle={this.state.yellowStyle} />
          <Green colorStyle={this.state.greenStyle}/>

        </div>
      </BrowserRouter>
  );
}
}

export default App;
