import React from 'react'
import { Table } from 'react-bootstrap'
import { connect } from 'react-redux'
import Navi from '../../component/navbar.jsx'
import './profile.css'

class Profile extends React.Component {
    render() {
        return (
            <div className='main_profile'>
                <Navi />
                <div className='main_tab'>
                    <p style={{margin:'auto'}}>PROFILE</p>
                    <Table striped bordered hover size="sm tab">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <td>{this.props.name}</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>Username</th>
                            <td>{this.props.username}</td>
                        </tr>
                        <tr>
                            <th>Email</th>
                            <td>{this.props.email}</td>
                        </tr>
                        <tr>
                            <th>Phone</th>
                            <td>{this.props.phone}</td>
                        </tr>
                    </tbody>
                </Table>
                </div>
                

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        name : state.userReducer.name,
        email : state.userReducer.email,
        phone : state.userReducer.phone,
        username: state.userReducer.username
    }
}

export default connect(mapStateToProps)(Profile)