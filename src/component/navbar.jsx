import React from 'react'
import {
    Navbar,
    Container,
    Nav,
} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import './navbar.css'


class Navi extends React.Component {
    render() {
        return (
            <div className='nav_main'>
                <Navbar bg="light" variant="light">
                    <Container>
                        <Navbar.Brand href="#home">User List</Navbar.Brand>
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/">Login</Nav.Link>
                            <Nav.Link as={Link} to="/Dashboard">Dashboard</Nav.Link>
                            <Nav.Link as={Link} to="/Profile">Profile</Nav.Link>
                            <Nav.Link style={{ fontWeight: 'bold', marginLeft: '35rem' }}>Hello {this.props.name} </Nav.Link>
                        </Nav>
                    </Container>
                </Navbar>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        name : state.userReducer.name
    }
}
export default connect(mapStateToProps)(Navi)