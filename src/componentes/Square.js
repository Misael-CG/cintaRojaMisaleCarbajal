import React,{Component} from 'react';


export default class Square extends Component{
    constructor(props){
        super(props)
        this.state={
            value:''
        }
    }
    render(){
        return(
            <button onClick={()=>this.setState({value:'X'})}
            className="square">
                {this.state.value}
            </button>
        )
    }
}