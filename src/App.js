/*Erika Bickford
All Rights Reserved (c) 2020
* March 2, 2020*/
import React, {Component} from 'react';
// import logo from './logo.svg';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import Header from "./components/layout/Header";
import About from "./components/pages/About";
import Login from "./components/pages/Login";
import Summary from "./components/Summary";
import Eligibility from "./components/Eligibility";
import CustomerReviews from "./components/CustomerReviews";
import ServiceValidation from "./components/pages/ServiceValidation";
import RegistrationForm from "./components/pages/RegistrationForm";
import Footer from "./components/layout/Footer";
import Help from "./components/pages/Help";
import Contact from "./components/pages/Contact";
import AccountInfo from "./components/pages/AccountInfo";
import AddressSearch from "./components/AddressSearch";
import RescueDisplay from "./components/pages/RescueDisplay";
import RegistrationSubmit from "./components/pages/RegistrationSubmit";
import PasswordCreate from "./components/pages/PasswordCreate";
import AccountSetupPeople from "./components/pages/AccountSetupPeople";
import NotImplemented from "./components/NotImplemented";
import AccountSetupPets from "./components/pages/AccountSetupPets";

class App extends Component {

    render() {
        return (
            <Router>
                <div className="App">
                    <div className={"container"}>
                        <Header/>
                        <Route exact path={"/"} render={props => (
                            <React.Fragment>
                                {/*<AddTodo addTodo={this.addTodo}/>*/}
                                {/*<Todos todos={this.state.todos} markComplete={this.markComplete}*/}
                                {/*       delTodo={this.delTodo}/>*/}
                                <Summary/>
                                <Eligibility/>
                                <CustomerReviews/>
                            </React.Fragment>
                        )}/>
                        <Route path={"/about"} component={About}/>
                        <Route path={"/login"} component={Login}/>
                        <Route path={"/service_validation"} component={ServiceValidation}/>
                        <Route path={"/help"} component={Help}/>
                        <Route path={"/contact"} component={Contact}/>
                        <Route path={"/not_implemented"} component={NotImplemented}/>
                        <Route path={"/registration"} component={RegistrationForm}/>
                        <Route path={"/register_submit"} component={RegistrationSubmit}/>
                        <Route path={"/register_complete"} component={PasswordCreate}/>
                        <Route path={"/account_setup/people"} component={AccountSetupPeople}/>
                        <Route path={"/account_setup/pets"} component={AccountSetupPets}/>
                        <Route path={"/account"} component={AccountInfo}/>
                        <Route path={"/addressSearch"} component={AddressSearch}/>
                        <Route path={"/search_results"} component={RescueDisplay}/>
                        <Footer/>
                    </div>
                </div>
            </Router>
        );
    }
}

export default App;
