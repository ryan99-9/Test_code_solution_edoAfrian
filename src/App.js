import React from 'react'


//import komponen dari react router DOM
import { Routes, Route } from 'react-router-dom'
//import component
import Login from './pages/login/login'
import Dashboard from './pages/dashboard/dashboard'
import Detail from './pages/detail posting/detail'
import Profile from './pages/detail profile/profile'

//import Action
import { keepLogin } from './redux/action';

import { connect } from 'react-redux'





class App extends React.Component {
  // componentDidMount() {
  //   let id = localStorage.getItem('idUser')
  //   this.props.keepLogin(id)
  // }
  render() {
      return (
        <div>
          <Routes>
          <Route>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/detail" element={<Detail />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
          </Routes>
        </div>
      );
  }
}
const mapStateToProps = (state) => {
  return {
    role: state.userReducer.role
  }
}
export default connect(mapStateToProps, { keepLogin })(App);
