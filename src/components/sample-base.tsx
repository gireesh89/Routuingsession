import * as React from 'react';
import { Component } from 'react';

class Samplebase extends React.PureComponent{
    rendereComplete(){

    }
    componentDidMount(){
        setTimeout(() =>{
            this.rendereComplete();
        });
    }
}

export default Samplebase;