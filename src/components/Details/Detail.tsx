import * as React from 'react';
import { Component } from 'react';
import { match } from 'react-router';
import { RouteComponentProps } from 'react-router';
import axios from 'axios';
import '../Details/css/Details.css';

interface Routeinfo{
    id:any    
}
interface IUserData{
    userData?:any
}

class Details extends Component<RouteComponentProps<Routeinfo>,IUserData>{
    constructor(){
        super();
        this.state={
            userData:[]
        }
    }    
    componentDidMount(){
                console.log(this.props.match.params.id);
                //"https://localhost:44360/api/user/"
                axios.get("http://localhost:9001/api/user/" + this.props.match.params.id).then(response =>{
                    console.log(response);
                    console.log(response.data);
                    if(response.status == 404){
                        this.setState({
                            userData:"No Data Found"
                        })
                    }
                    this.setState({                          
                        userData:response.data
                    });
                })
    }
    render(){              
        const fetchedId =  this.props.match.params.id;        
        let returnstruct:any=null;
        return(
        <React.Fragment>
            <h2>User Details</h2>
        <div className="user-details">
            <div>
                {this.state.userData.name}
            </div>
            <div>
                {this.state.userData.department}
            </div>
            <div>
                {this.state.userData.designation
                }
            </div>
            <div>
                {this.state.userData.employeeId}
            </div>
            <div>
                {this.state.userData.empGrade}
            </div>
        </div>
        </React.Fragment>
        );
    }
}

export default Details;