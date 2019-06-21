import React,{Component} from 'react';
import {Square} from '.'

export default class board extends Component{
    constructor(props){
        super(props)
        this.state={
           turnX:true,
           Square:Array(9).fill(null)
        }
    }
    render(){
        const{turnX}=this.state
        return(
            <div>
                <div className="status">{`Es el turno de ${turnX?'X':'O'}`}</div>
                <div className="board-row">
                    <Square></Square>
                    <Square></Square>
                    <Square></Square>
                </div>
                <div className="board-row">
                    <Square></Square>
                    <Square></Square>
                    <Square></Square>
                </div>
                <div className="board-row">
                    <Square></Square>
                    <Square></Square>
                    <Square></Square>
                </div>
            </div>
        )

    }
}
