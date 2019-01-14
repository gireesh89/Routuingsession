import {render} from 'react-dom';
import { Component } from 'react';
import * as React from 'react';
import Samplebase from '../sample-base';

class Basic extends Samplebase {
    render(){
        return(
            <div className="control-pane">
                <div className="control-section card-control-section basic_card_layout">
                    <div className="e-card-resize-container">
                        <div className="row">
                            <div className="row card-layout">
                                <div className="col-xs-6 col-sm-6 col-lg-6 col-sm-6">
                                    <div className="e-card" id="basic_card">
                                        <div className="e-card-header">
                                            <div className="e-card-header-caption">
                                                <div className="e-card-title">
                                                    Basic Card
                                                </div>
                                                <div className="e-card-sub-title">
                                                    By Gireesh Kumar G on 19/12/2018
                                                </div>
                                                <div className="e-card-content">
                                                    This is a Sample Basic Card  done in React Application.
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xs-6 col-sm-6 col-lg-6 col-md-6">
                                    <div className="e-card" id="weather_card">
                                        <div className="e-card-header">
                                         <div className="e-card-header-caption">
                                            <div className="e-card-header-title"> Today </div>
                                            <div className="e-card-sub-title">Trivandrum - Scattered Showers</div>
                                            <div className="e-card-header"></div>
                                         </div>
                                        </div>
                                        <div className="e-card-header weather_report">
                                            <div className="e-card-header-image"></div>
                                            <div className="e-card-header-caption">
                                                <div className="e-card-header-title">1&#186; / -4&#186;</div>
                                                 <div className="e-card-sub-title">Chance for Snow: 100%</div>
                                            </div>
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Basic;