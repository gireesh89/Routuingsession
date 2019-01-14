import * as React from 'react';
import { Component } from 'react';
import { Txtbox, TxtArea, BtnSubmit } from '../Input/inputtext';
import { createHashHistory, createBrowserHistory } from 'history';
import { RouteComponentProps, Redirect } from 'react-router';
import {Route,BrowserRouter,match} from 'react-router-dom';

interface DetailParams{
    id:string;
  }
  
  interface DetailsProps{
    required:string;
    match?:match<DetailParams>;  
  }

class Registration extends Component<DetailsProps,any>{
    state={
        pathurl:""
    }       
    render(){        
       const match=this.props.match;      
        return(
            <React.Fragment>
                <form onSubmit={()=>{<Redirect to='/dashboard'></Redirect>}}>                
                      <Txtbox id={"txt12"} placeholder={"Please Enter Name"} labelName={"Name : "} type={"text"}></Txtbox>
                      <Txtbox id={"txt13"} placeholder={"Please Enter MobileNo"} labelName={"Mobile No"} type={"text"}></Txtbox>     
                      <TxtArea id={"txtA12"} placeholder={"Please Enter the Address1"} labelName={"Address1"}></TxtArea>           
                      <TxtArea id={"txtA13"} placeholder={"Please Enter the Address2"} labelName={"Address2"}></TxtArea> 
                      <BtnSubmit id={"btnReg"} type={"button"} btnName={"Register"}></BtnSubmit>                      
                          
                                     
                </form>
                    
            </React.Fragment>
            
            
            
        );
    }
}

export default Registration;