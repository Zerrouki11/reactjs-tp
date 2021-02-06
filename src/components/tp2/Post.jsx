import React, { Component } from 'react';
import { Card, Input, Button } from 'reactstrap';
import { faThumbsDown, faThumbsUp, faPlus, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ReactQuill from 'react-quill';
import { isEmpty } from "../../tools";
import 'react-quill/dist/quill.snow.css';
import Comment from "./Comment";
class Post extends Component {
    constructor(props) {
        if (props.post !== null && typeof props.post !== "undefined") {
            let post = props.post;
            super();
            this.delete = props.delete;
            this.state = {
                id: isEmpty(post.id, null),
                likes: isEmpty(post.likes, 0),
                dislikes: isEmpty(post.dislikes, 0),
                content: isEmpty(post.content, ""),
                user: isEmpty(post.user, ""),
                comments: isEmpty(post.comments, []),
                newComment: {
                    user: "",
                    content: ""
                }
            }
        }
    }
    render() {
        return (
            <Card className="m-3 p-5 border">
                <div className="text-right">
                    <Button color="danger"
                        onClick={() => this.delete(this.state.id)}
                    >
                        <FontAwesomeIcon

                            values="test"
                            icon={faTrashAlt}
                        /> </Button>

                </div>
                <h4>{this.state.user}</h4>
                <p> <div dangerouslySetInnerHTML={{
                    __html: this.state.content
                }}></div></p>
                <span className="m-2">
                    <span class="counters">

                        <i className="app-i mr-1 ml-1">{this.state.likes}</i>
                        <FontAwesomeIcon
                            onClick={() => { this.setState({ ...this.state, likes: isEmpty(this.state.likes, 0) + 1 }) }}
                            values="test"
                            className="clickable"
                            icon={faThumbsUp}
                            color="blue" />
                    </span>
                    <span class="counters">
                        <i className="app-i mr-1 ml-1">{this.state.dislikes}</i>
                        <FontAwesomeIcon
                            onClick={() => { this.setState({ ...this.state, dislikes: isEmpty(this.state.dislikes, 0) + 1 }) }}
                            values="test"
                            className="clickable"
                            icon={faThumbsDown}
                            color="red" />
                    </span>
                </span>
                <h4>Commentaires :</h4>

                {this.state.comments.map(comment => {
                    return (
                        <Comment key={comment.id} comment={comment} delete={(commentID) => {
                            let newCommentsList = [...this.state.comments];
                            newCommentsList.splice(this.state.comments.indexOf(this.state.comments.find(item => item.id === commentID)), 1);
                            this.setState({
                                ...this.state,
                                comments: newCommentsList
                            });
                        }} />
                    )
                })}
                <Card className="m-3 p-5 border">
                    <Input
                        className="mb-3"
                        type="text"
                        placeholder="Utilisateur"
                        value={this.state.newComment.user}
                        onChange={(e) => { this.setState({ ...this.state, newComment: { ...this.state.newComment, user: e.target.value } }) }}
                    />
                    <ReactQuill theme="snow" className="text-center"
                        value={this.state.newComment.content}
                        onChange={(event) => {
                            this.setState({ ...this.state, newComment: { ...this.state.newComment, content: event } })
                        }} />
                    <div className="text-right">
                        <Button className="mt-3 w-20 " color="info" size="sm"
                            onClick={() => {
                                if (this.state.newComment.user === "" || this.state.newComment.content === "")
                                    return alert("veuillez remplir les champs requis!");
                                this.setState({
                                    ...this.state,
                                    comments: [
                                        ...this.state.comments,
                                        {
                                            id: this.state.comments.length + 1,
                                            content: this.state.newComment.content,
                                            user: this.state.newComment.user,
                                            dislikes: 0,
                                            likes: 0,
                                        }
                                    ],
                                    newComment: {
                                        user: "",
                                        content: ""
                                    }
                                })
                            }}
                        >
                            <FontAwesomeIcon

                                values="test"
                                icon={faPlus}
                            /> Ajouter ce commentaire</Button>
                    </div>

                </Card>


            </Card>
        );
    }
}

export default Post;