import React from 'react'; 
import { BrowserRouter, Route } from 'react-router-dom'; //1

const Header = () => <h2>Header</h2> 
const Dashboard = () => <h2>Dashboard</h2> 
const SurveyNew = () => <h2>SurveyNew</h2> 
const Landing = () => <h2>Landing</h2> 


const App = () => {
    return (
        <div>
            Hi There!
        </div>
    );
};

export default App; 

/*
//1
BrowserRouter - Can be thought of as brains of react-router. Tells react router how to behave. The thing that looks at the current url and changes the components on the screen when url changes. 

Route - The route object right here is a re-act component that is used to set up a rule between a certain route that the user might visit inside an application and a set of components that will be actually visible on the screen.
*/