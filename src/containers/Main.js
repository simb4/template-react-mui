import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

import Login from '../components/auth/Login';
import Header from '../components/header/Header';

import VisitsPage from './pages/VisitsPage';
import SchedulePage from './pages/SchedulePage';
import NoMatch from './NoMatch';

import { Layout } from 'antd';

const HelloWorld = () => {
  return (<h3>Hello world! {window.location.pathname} </h3>);
}

class _Main extends Component {
  render() {
    // let isLoggedIn = { isLoggedIn: true };
    let isLoggedIn = { isLoggedIn: this.props.isLoggedIn };
    return (
      <Router>
        <Layout>
          <Layout.Header className="root">
            <Header />
          </Layout.Header>
          <Layout.Content>
            <Switch>
              <AuthRoute path="/login" component={Login} {...isLoggedIn}/>
              <UserRoute exact path="/" component={HelloWorld} {...isLoggedIn}/>
              <UserRoute exact path="/visits" component={VisitsPage} {...isLoggedIn}/>
              <UserRoute exact path="/classes" component={SchedulePage} {...isLoggedIn}/>
              <UserRoute exact path="/stats" component={HelloWorld} {...isLoggedIn}/>
              <Route name="not-found" component={NoMatch} />
            </Switch>
          </Layout.Content>
          {/*
            <Footer> Footer </Footer>
          */}
        </Layout>
      </Router>
    )
  }
}

export const AuthRoute = (props) => {
  let { component: Component, isLoggedIn, ...rest, } = props;
  return (
    <Route {...rest} component={props => (
      !isLoggedIn ? (
        <Component {...props} />
      ) : (
        <Redirect to={props.location.from ? 
          props.location.from : "/"}/>
      )
  )} />
)}

export const UserRoute = (props) => {
  let { component: Component, isLoggedIn, ...rest } = props;
  return (
    <Route {...rest} component={props => (
      isLoggedIn ? (
        <Component {...props} />
      ) : (
        <Redirect to={{
          pathname: '/login',
          from: props.location.pathname,
        }}/>
      )
  )} />
)}


const mapStateToProps = (state) => ({
  isLoggedIn: state.auth.isLoggedIn,
})

const mapDispatchToProps = {}

const MainPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(_Main);

export default MainPage;
