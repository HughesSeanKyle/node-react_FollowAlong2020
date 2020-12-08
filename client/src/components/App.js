import React from 'react'; 
import { BrowserRouter, Route } from 'react-router-dom'; //1

import Header from './Header';
 
const Dashboard = () => <h2>Dashboard</h2> 
const SurveyNew = () => <h2>SurveyNew</h2> 
const Landing = () => <h2>Landing</h2> 


const App = () => { //2
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

export default App; 

/*
//1
BrowserRouter - Can be thought of as brains of react-router. Tells react router how to behave. The thing that looks at the current url and changes the components on the screen when url changes. 

Route - The route object right here is a re-act component that is used to set up a rule between a certain route that the user might visit inside an application and a set of components that will be actually visible on the screen.

//2 
BrowserRouter must have atleast one child 

In Route component the "/" refers to the ROOT route. e.g emaily.com or in dev just localhost:3000

("exact={true}" === "exact") = Make sure that the path is exactly root || localhost:3000 if landing to be displayed. (Do NOT Greedily match.)

The <Header /> will always be visible as it is not tied to any specific configuration. 
*/