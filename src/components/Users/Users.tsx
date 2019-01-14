import * as React from 'react';
import { Component } from 'react';
import '../Users/User.css';
import Details from '../Details/Detail';
import history from '../History';
import { RouteComponentProps } from 'react-router';
import {Route} from "react-router-dom";

interface userProps extends RouteComponentProps{
    data:[
        {
            id:number,
            name:string
        }
    ],
    showComponent:boolean
}

class Users extends Component<userProps,any>{
    
    constructor(){
        super();
        this.state={
            showComponent:false
        };
        
    }   

    _onButtonClick=(id:any):any => { 

        this.props.history.push("/details/"+id); 
    }

    render(){    
       const userData=[{
            id:1,
            name:"Sunood"
        },{
            id:2,
            name:"Sreerag"
        },{
            id:3,
            name:"Sreejith"
        }]       
        
        
        const rows:any = userData.map((users,index)=>{     
            return(
                    
                   <tr key={index}>
                       <td>
                           {users.id}
                       </td>
                       <td>{users.name}</td>
                       <td>
                                 <input  type='button' value='View' onClick={this._onButtonClick.bind(null,users.id)} ></input>
                                    
                        </td>
                   </tr>
                
            )       
        });  
               
             return(
                <React.Fragment>
                    <h2>Users</h2>
                    <div>
                    <table>
                <thead>
                    <tr>
                        <td>Id</td>
                        <td>Name</td>                        
                        <td></td>
                    </tr>

                </thead>
                     <tbody>
                         {rows}
                       </tbody>
                  </table>
                    
                    </div>
                </React.Fragment>
            )   
        
    }
}

export default Users;