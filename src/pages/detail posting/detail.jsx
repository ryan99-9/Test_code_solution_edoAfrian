import React from 'react'
import { Badge, Button } from 'react-bootstrap'
import Navi from '../../component/navbar'
import Axios from 'axios'
const APIPost = 'https://jsonplaceholder.typicode.com/posts'
const APICom = 'https://jsonplaceholder.typicode.com/comments'

class Detail extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            post: [],
            comment: [],
            showId: false
        }
    }
    componentDidMount() {
        let idUrl = document.location.href.substring(29, 31)
        console.log(idUrl);
        Axios.get(`${APIPost}?id=${idUrl}`)
            .then(res => {
                this.setState({ post: res.data })
                console.log(res.data);
            })
        Axios.get(`${APICom}?postId=${idUrl}`)
            .then(res => {
                this.setState({ comment: res.data })
                console.log(res.data);
            })
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
                        <p>DETAIL</p>
                        {this.state.post.map(item => {
                            if (this.state.showId) {
                                return (
                                    <div>
                                        <p> {item.body} </p>
                                            {this.state.comment.map(item=>{
                                                return (
                                                    <div>{item.name}, {item.body}</div> 
                                                )
                                            })}
                                        <div>
                                            <Button onClick={()=>this.setState({showId:false})} variant="outline-primary">Hide</Button>
                                        </div>
                                    </div>
                                )
                            }
                            return (
                                <div>
                                    <p> {item.body} </p>
                                    <div>
                                        <Button onClick={()=>this.setState({showId:true})} variant="outline-primary"><i className="fal fa-comment">
                                            <Badge bg="outline-primary">{this.state.comment.length}</Badge></i></Button>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        )
    }
}

export default Detail