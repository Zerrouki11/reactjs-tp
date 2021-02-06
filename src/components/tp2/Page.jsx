import React, { Component } from 'react';
import { Card, Input, Button } from 'reactstrap';
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import dataJson from "../data/Data.json";
import Post from "./Post";
import { isEmpty } from '../../tools';
import 'react-quill/dist/quill.snow.css';
import ReactQuill from 'react-quill';


class Page extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: isEmpty(dataJson.posts, []).sort((a, b) => a.id < b.id ? 1 : -1),
            new: {
                user: "",
                content: "",
            }
        };
    }
    handleChange(html) {
        this.setState({
            ...this.state,
            new: {
                ...this.state.new,
                content: html,
            }
        })
    }
    render() {
        return (
            <div>
                <Card className="m-3 p-5 border">
                    <Input
                        className="mb-3"
                        type="text"
                        placeholder="Utilisateur"
                        value={this.state.new.user}
                        onChange={(e) => { this.setState({ ...this.state, new: { ...this.state.new, user: e.target.value } }) }}
                    />
                    <div>
                        <ReactQuill theme="snow" className="text-center" value={this.state.new.content} onChange={(event) => {
                            this.setState({ ...this.state, new: { ...this.state.new, content: event } })
                        }} />
                    </div>
                    <div className="text-right">
                        <Button className="mt-3 w-20 " color="primary" size="sm"
                            onClick={() => {
                                if (this.state.new.user === "" || this.state.new.content === "")
                                    return alert("veuillez remplir les champs requis!");
                                this.setState({
                                    ...this.state,
                                    posts: [
                                        ...this.state.posts,
                                        {
                                            id: this.state.posts.length + 1,
                                            content: this.state.new.content,
                                            user: this.state.new.user,
                                            dislikes: 0,
                                            likes: 0,
                                            comments: []
                                        }
                                    ].sort((a, b) => a.id < b.id ? 1 : -1),
                                    new: {
                                        user: "",
                                        content: ""
                                    }
                                })
                            }}
                        >
                            <FontAwesomeIcon
                                values="test"
                                icon={faPlus}
                            /> Ajouter ce poste</Button>
                    </div>
                </Card>
                <div>
                    {this.state.user}
                </div>

                {
                    this.state.posts.map(post => {
                        return (
                            <Post post={post} key={post.id} delete={(postID) => {
                                let newPostsList = [...this.state.posts];
                                newPostsList.splice(this.state.posts.indexOf(this.state.posts.find(item => item.id === postID)),1);
                                this.setState({
                                    ...this.state,
                                    posts: newPostsList
                                });
                            }} />
                        )
                    })}
            </div>





        );

    }


}

export default Page;