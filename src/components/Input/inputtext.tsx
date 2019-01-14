import * as React from 'react';
import { Component } from 'react';
import {render} from 'react-dom'
import { string, any } from 'prop-types';

interface textBoxProps {
    id:string,
    placeholder?:string,
    labelName?:string,
    type?:string,
    btnName?:string
}

class Txtbox extends React.Component<textBoxProps> {
      
    constructor(props:any){
        super(props);
        this.state = { id:"", placeholder:"",labelName:"",type:"" }
    }   
    
    render() { 
        const divstyle ={
            width:"50%"
        };
        let id=this.props.id;
        return ( 
            <React.Fragment>               
                    <div className="form-group" style={divstyle}>
                            <label>{this.props.labelName}</label>
                            <input type={this.props.type} className="form-control" id={this.props.id} placeholder={this.props.placeholder}></input>
                    </div>                
            </React.Fragment>
            
              );
    }
}

class TxtArea extends Txtbox{
    constructor(props:any){
        super(props);
        this.state={id:"",placeholder:"",labelName:""}
    }
    render(){
        const divstyle ={
            width:"50%"
        };
        return(
            <div className="form-group" style={divstyle}>
                <label>{this.props.labelName}</label>
                <textarea  id={this.props.id} className="form-control" placeholder={this.props.placeholder}></textarea>
            </div>
        )
    }
}

class BtnSubmit extends Component<textBoxProps>{
    constructor(props:any){
        super(props);
        this.state={id:"",btnName:"",type:""}
    }
    render(){
        return(
            <div>
                <button type={this.props.type}>{this.props.btnName}</button>
            </div>
        );
    }
}

export {Txtbox};
export {TxtArea};
export {BtnSubmit};