import React, { Component } from 'react';
import { Card, Button } from 'reactstrap';
import { faThumbsDown, faThumbsUp, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { isEmpty } from "../../tools";
import 'react-quill/dist/quill.snow.css';
class Comment extends Component {
    constructor(props) {
        if (props.comment !== null && typeof props.comment !== "undefined") {
            let comment = props.comment;
            super();
            this.delete = props.delete;
            this.state = {
                id: isEmpty(comment.id, null),
                likes: isEmpty(comment.likes, 0),
                dislikes: isEmpty(comment.dislikes, 0),
                content: isEmpty(comment.content, ""),
                user: isEmpty(comment.user, ""),
            }
        }
    }
    render() {
        return (
            <Card className="m-2 p-3 border bg-light">
                <div className="text-right">
                    <Button color="danger" size="sm"
                        onClick={() => this.delete(this.state.id)}>
                        <FontAwesomeIcon
                            values="test"
                            icon={faTrashAlt}
                        /> </Button>

                </div>
                <h4>{this.state.user}</h4>
                <p dangerouslySetInnerHTML={{__html: this.state.content}} ></p>
                <span className="m-2">
                    <span class="counters">

                        <i className="app-i mr-1 ml-1">{this.state.likes}</i>
                        <span >
                            <FontAwesomeIcon
                                onClick={() => { this.setState({ ...this.state, likes: isEmpty(this.state.likes, 0) + 1 }) }}
                                className="clickable"
                                values="test"
                                icon={faThumbsUp}
                                color="blue" />
                        </span>
                    </span>
                    <span class="counters">
                        <i className="app-i mr-1 ml-1">{this.state.dislikes}</i>
                        <FontAwesomeIcon
                            onClick={() => { this.setState({ ...this.state, dislikes: isEmpty(this.state.dislikes, 0) + 1 }) }}
                            className="clickable"
                            values="test"
                            icon={faThumbsDown}
                            color="red" />
                    </span>
                </span>
            </Card>
        );
    }
}

export default Comment;