import React from 'react'

import { InputGroup, FormControl, Button, Modal, Form } from 'react-bootstrap'
import { Link, Navigate } from 'react-router-dom'
import './login.css'
import { connect } from 'react-redux'
import { login, errLoginfalse } from '../../redux/action/userAction'
import Navi from '../../component/navbar'

class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            navigate: false,
        }
    }
    onLogin = () => {
        //ambil data dari username dan password
        let username = this.refs.username.value
        let password = this.refs.password.value

        //Kalau ada input yang masih kosong, dikasih notif jika tidak boleh ada yang kosong
        if (!username || !password) {
            return alert ('username dan password kosong')
           
        } else if (username !== password) {
            return  alert('Username berbeda dengan password')
        }
        //Cek apakah data username dan password yang di input user/diambil sudah ada didatabase 
        this.props.login(username)
    }
    render() {
        console.log(this.props.name);
        // console.log(this.state.navigate);
        if (this.props.name) {
            return <Navigate to="/Dashboard" />
        }
        return (
            <div>
                <Navi />
                <div className='main_login'>
                    <div className='branch1'>
                    </div>
                    <div className='branch2'>
                        <br /><br /><br /><br /><p className='page'>LOGIN PAGE</p>
                        <Form>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Username</Form.Label><br />
                                <Form.Control type="text" placeholder="input here" ref='username' />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Password</Form.Label><br />
                                <Form.Control type="text" placeholder="input here" ref='password' />
                            </Form.Group>
                            <Button variant="secondary" onClick={this.onLogin}>LOGIN</Button>
                        </Form>
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        name: state.userReducer.name,
    }
}

export default connect(mapStateToProps, { login, errLoginfalse })(Login)