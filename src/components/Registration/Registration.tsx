import * as React from 'react';
import { Component } from 'react';
import { Txtbox, TxtArea, BtnSubmit } from '../Input/inputtext';
import { createHashHistory, createBrowserHistory } from 'history';
import { RouteComponentProps, Redirect } from 'react-router';
import {Route,BrowserRouter,match} from 'react-router-dom';
import { Session } from 'inspector';
import {Drpbox} from '../Input/inputtext';

interface DetailParams{
    id:string;
  }
  
  interface DetailsProps{
    required:string;
    match?:match<DetailParams>;  
  }

class Registration extends Component<DetailsProps,any>{
    state={
        pathurl:"",
        grades:[{gradeName:"Select Grade"}],
        project:[{projName:"Select Project"}],
        department:[{depName:"Select Department"}],
        designation:[{designame:"Select Designation"}]
    }  
    componentDidMount(){        
        let gradearry=this.state.grades;
        gradearry.push({gradeName:"SSE"});
        let projArray=this.state.project;
        projArray.push({projName:"eAssessment"},{projName:"Innovation"},{projName:"IB Aurora"});
        let departArray=this.state.department;
        departArray.push({depName:"RM-Results"},{depName:"RM-Education"},{depName:"RM-Resources"});
        let desigArray=this.state.designation;
        desigArray.push({designame:"SE"},{designame:"SSE"},{designame:"TA"})
        this.setState({
            grades:gradearry,
            project:projArray,
            department:departArray,
            designation:desigArray
        });
    }    
    handleUserData():any{
        <Redirect to='/dashboard'></Redirect>
    }

    
    render(){  
        let bindDesigOptions =this.state.grades.map((grade)=>
         <option key={grade.gradeName}>{grade.gradeName}</option>
        )   
        let bindProjectOptions = this.state.project.map((project)=> <option key={project.projName}>{project.projName}</option>)   
       const match=this.props.match;    
       let bindDepartOptions=this.state.department.map((depart)=><option key={depart.depName}>{depart.depName}</option>)  
        return(
            <React.Fragment>
                <form onSubmit={this.handleUserData()}>                
                      <Txtbox id={"txtId"} placeholder={"Please enter Employee Id"} labelName={"EmployeeId :"} type={"text"}></Txtbox>
                      <Txtbox id={"txt12"} placeholder={"Please Enter Name"} labelName={"Name : "} type={"text"}></Txtbox>
                      <Txtbox id={"txt13"} placeholder={"Please Enter MobileNo"} labelName={"Mobile No :"} type={"text"}></Txtbox>     
                      <TxtArea id={"txtA12"} placeholder={"Please Enter the Address1"} labelName={"Address1 :"}></TxtArea>           
                      <TxtArea id={"txtA13"} placeholder={"Please Enter the Address2"} labelName={"Address2 :"}></TxtArea>
                      <Drpbox id={"drpdwn1"} labelName={"Grade :"} dropdownOptions={bindDesigOptions} ></Drpbox>      
                      <Drpbox id={"drpdwn2"} labelName={"Project :"} dropdownOptions={bindProjectOptions} ></Drpbox>                                                              
                      <Drpbox id={"drpdwn3"} labelName={"Department :"} dropdownOptions={bindDepartOptions}></Drpbox>
                      <BtnSubmit id={"btnReg"} type={"submit"} btnName={"Register"}></BtnSubmit>             
                </form>                    
            </React.Fragment>
            
            
            
        );
    }
}

export default Registration;