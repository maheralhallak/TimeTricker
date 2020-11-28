import React, { Component } from 'react';
import './sideBar.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class SideBar extends Component {
    render() {
    
        return (
            <div>
                
                <nav className="side-bar open">
                    <ul>
                        <li><a href="#"><FontAwesomeIcon icon="hourglass" />  Time Tracker</a></li>
                        <li><a href="https://imisstheoffice.eu/"><FontAwesomeIcon icon="chair"/>  Missing Office? </a></li>
                        <li><a href="#"><FontAwesomeIcon icon="check-square" size="s" />  Todo </a></li>
                        <li><a href="#"><FontAwesomeIcon icon="clock" />  appointment calendar</a></li>
                        <li><a href="#"><FontAwesomeIcon icon="people-carry"/>  Team chat</a></li>
                        <li><a href="#"><FontAwesomeIcon icon="camera-retro"/>  Video conference </a></li>
                        <li><a href="#"><FontAwesomeIcon icon="hands-helping"/>  Need Help? </a></li>
                    </ul>
                </nav>
                
            </div>
        );
    }
}

export default SideBar;
