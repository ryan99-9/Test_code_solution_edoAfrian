import React from 'react'
import { Badge, Button, Table } from 'react-bootstrap'
import Navi from '../../component/navbar'
import './dashboard.css'
import Axios from 'axios'
import { Link } from 'react-router-dom'
const APIPost = 'https://jsonplaceholder.typicode.com/posts'
const APIUser = 'https://jsonplaceholder.typicode.com/users'

class Dashboard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            post: [],
            page: 1,
            perPage: 10,
            max: 0,
            user: [],
            comments: [],
        }
    }
    //mengirim all user ke reducer - ada nama namanya
    //Mengambil nama itu dengan id nya yang ada di posting

    componentDidMount() {
        Axios.get(`${APIPost}`)
            .then(res => {
                this.setState({ post: res.data, max: Math.ceil(res.data.length / this.state.perPage) })
            })
        Axios.get(`${APIUser}`)
            .then(res => {
                this.setState({ user: res.data })
            })
    }

    onNextPage = () => {
        this.setState({ page: this.state.page + 1 })
    }
    onPrevPage = () => {
        this.setState({ page: this.state.page - 1 })
    }
    onShowPosting = () => {
        let beginningIndex = (this.state.page - 1) * this.state.perPage
        let currentPost = this.state.post.slice(beginningIndex, beginningIndex + this.state.perPage)
        console.log(currentPost)
        return (
            currentPost.map(item => {
                return (
                    <div className='show'>
                        <div className='nama'> {this.showName(item.userId)}</div>
                        <div className='post'>{item.title}</div>
                            {/* <i class="fal fa-ellipsis-h"></i>  */}
                        <div>
                            <Button variant="outline-light" as={Link} to={`/Detail?${item.id}`} >Detail</Button>
                        </div>
                    </div>
                )
            })
        )
       
        

    }

    
    showName = (id) => {
        console.log(id)
        if (id == 1) {
            return "Leanna Graham"
        } else if (id == 2) {
            return "Ervin Howell"
        } else if (id == 3) {
            return "Clementine Bauch"
        } else if (id == 4) {
            return "Patricia Lebsack"
        } else if (id == 5) {
            return "Chelsey Dietrich"
        } else if (id == 6) {
            return "Mrs Dennis Schulist"
        } else if (id == 7) {
            return "Kurtis Weissnat"
        } else if (id == 8) {
            return "Nicholas Runolfsdottir V"
        } else if (id == 9) {
            return "Glenna Reichert"
        } else if (id == 10) {
            return "Clementina DuBuque"
        }
    }

    render() {
        return (
            <div>
                <div>
                    <Navi />
                </div>
                <div className='main'>
                    <div className='bg'>
                    </div>
                    <div className='contain_dash'>
                        <p className='posting'>POSTING</p>
                        
                        {this.onShowPosting()}
                        <div className='pagination'>
                            <Button
                                disabled={this.state.page <= 1 ? true : false}
                                onClick={this.onPrevPage}
                                variant="light"><i class="fad fa-angle-double-left"></i></Button>
                            <p>page {this.state.page} of {this.state.max}</p>
                            <Button
                                disabled={this.state.page >= this.state.max ? true : false}
                                onClick={this.onNextPage}
                                variant="light"><i class="fad fa-angle-double-right"></i></Button>
                        </div>
                        {/* </Table> */}
                    </div>
                </div>
            </div>

        )
    }
}

export default Dashboard