import React, {Component} from 'react'; 
import { BrowserRouter, Route } from 'react-router-dom'; //1
import { connect } from 'react-redux';  // 3
import * as actions from '../actions'; // 4

import Header from './Header';
 
const Dashboard = () => <h2>Dashboard</h2> 
const SurveyNew = () => <h2>SurveyNew</h2> 
const Landing = () => <h2>Landing</h2> 


class App extends Component { //2
    componentDidMount() {
        this.props.fetchUser();
    };

    render() {
        return (
            <div className="container"> 
                <BrowserRouter>
                    <div>
                        <Header />
                        <Route exact path="/" component={Landing} />
                        <Route exact path="/surveys" component={Dashboard} />
                        <Route path="/surveys/new" component={SurveyNew} />
                    </div>
                </BrowserRouter>
            </div>
        );
    };
};

export default connect(null, actions)(App); //5 

/*
//1
BrowserRouter - Can be thought of as brains of react-router. Tells react router how to behave. The thing that looks at the current url and changes the components on the screen when url changes. 

Route - The route object right here is a re-act component that is used to set up a rule between a certain route that the user might visit inside an application and a set of components that will be actually visible on the screen.

//2 
BrowserRouter must have atleast one child 

In Route component the "/" refers to the ROOT route. e.g emaily.com or in dev just localhost:3000

("exact={true}" === "exact") = Make sure that the path is exactly root || localhost:3000 if landing to be displayed. (Do NOT Greedily match.)

The <Header /> will always be visible as it is not tied to any specific configuration. 

// 3
Call the connect function to give certian components the abiltiy to call action creators. 

// 4
Imported all different actions from actions file (* Take all different actions that have been defined and just assign them to the actions object)

//5 - Rembember IIFE explanation for this (In advanced JS section of Web dev course)
    1st arg: Map state to props, will not use on App component therefore === null
    2nd Arg: All different action creators to wire up - When all actions passed in they are assigned to the App component as props(Which means these can be passed down to any child component). 
*/