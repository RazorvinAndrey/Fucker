import React from 'react'
import {Route, withRouter, HashRouter} from "react-router-dom";
import {Provider, connect} from "react-redux"
import {compose} from "redux";
import store from "./Redux/radux-store";
import Start from "./components/Start/Start";
import Footer from "./components/Footer/Footer";
import {Header} from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import s from "./App.module.css"


function App(props) {
  return <div className={s.AppWrapper}>
    <div className={s.one}>
      <Header/>
    </div>
    <div className={s.two}>
      <NavBar/>
    </div>
    <div className={s.three}>
      <switch>
        <Route exact path={"/home"} render={() => <Start/>}/>
      </switch>
    </div>
    <div className={s.four}>
      <Footer/>
    </div>
  </div>
}

let mapStateToProps = (state) => {
  return {
  }
}


let AppContainer = compose(withRouter, connect(mapStateToProps, {}))(App);

const MainApp = (props) => {
  return <HashRouter>
    <Provider store={store}>
      <AppContainer/>
    </Provider>
  </HashRouter>
}

export default MainApp
