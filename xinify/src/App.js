import React from 'react';
import {
    BrowserRouter as Router,
} from "react-router-dom";
import SideNav from './components/SideNav';
import MainContent from './components/MainContent';


const App = () => {
    return (
        <Router>
            <div className="row no-gutters">
                <div className="col-md-3">
                    <SideNav />
                </div>
                <div className="col-md-8">
                    <MainContent />
                </div>
            </div>
        </Router>
    )
}

export default App;
