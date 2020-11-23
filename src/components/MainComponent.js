import React,{ Component } from 'react';
import Header from './HeaderComponent.js';
import Footer from './FooterComponent.js';
import Home from './HomeComponent.js';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';



class Main extends Component {



  render(){
  
    const HomePage = () => {
      return(
          <Home 
          />
          
      );
    }

    

    return (
        <div>
          <Header />
            <TransitionGroup>
              <CSSTransition key={this.props.location.key} classNames="page" timeout={300}>
                <Switch location={this.props.location}>
                  <Route path='/home' component= {HomePage} />

                  <Redirect to="/home" />
                </Switch>
              </CSSTransition>
            </TransitionGroup>
          <Footer />
        </div>
    );
  }
}

export default withRouter((Main));