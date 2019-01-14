import * as React from 'react';
import { Component } from 'react';
import { match } from 'react-router';
import { RouteComponentProps } from 'react-router';

interface Routeinfo{
    id:any
}

class Details extends Component<RouteComponentProps<Routeinfo>,any>{
        
    render(){      
        
        const fetchedId =  this.props.match.params.id;
        console.log(fetchedId);
        let returnstruct:any=null;
        if(fetchedId == 1){
            returnstruct = <div>     
                    <div>
                       Name : Sunood
                    </div>                   
                    <div>
                     Department    : RM_Results
                    </div>
                    <div>
                     Designation   : SSE
                    </div>
                </div>
        }
        else if(fetchedId == 2)
        {
            returnstruct=<div>
                <div>
                       Name : Sreerag
                    </div>                   
                    <div>
                     Department    : RM_Results
                    </div>
                    <div>
                     Designation   : SE
                    </div>
            </div>
        }
        return(
        <React.Fragment>
            <h2>User Details</h2>
        <div>
            {returnstruct}
        </div>
        </React.Fragment>
        );
    }
}

export default Details;