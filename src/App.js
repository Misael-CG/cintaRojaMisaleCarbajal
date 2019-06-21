import React, { Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import{Board} from './componentes'

class App extends Component{
  constructor(props){
    super(props)
    this.state={

    }
  }
  render(){
    return(
      
      <div className="game">
        <div className="game-board">
          <Board/>
        </div>
        <div className="game-info">
          <div></div>
          <ol></ol>
        </div>
      </div>
    )
  }
}
export default App;
