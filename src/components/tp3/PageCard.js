import React, { Component } from "react";

import InfiniteScroll from 'react-infinite-scroll-component';
import Repository from "./Repository";

let started = false;

class PageCard extends Component {
    state = {
        loading: true,
        page: 1,
        repos: [],
    }
    fetchData(state) {
        let date = (new Date(Date.now() - 30 * 24 * 60 * 60 * 1000));
        fetch(
            "https://api.github.com/search/repositories?q=created:>"
            + date.getFullYear() + "-" +
            ("0" + (date.getMonth() + 1)).slice(-2) + "-" +
            ("0" + date.getDate()).slice(-2) + "&sort=stars&order=desc&page="
            + (state.page)).then(response => response.json())
            .then(data => {
                this.setState({ repos: [...state.repos, ...data.items], loading: false, page: state.page + 1 });
            });
    }
    render() {
        if (!started) {
            this.fetchData(this.state);
            started = true;
        }
        return (
            <InfiniteScroll
                dataLength={this.state.repos.length}
                next={() => this.fetchData(this.state)}
                hasMore={true}
                loader={<h4>Loading...</h4>}
                endMessage={
                    <p style={{ textAlign: 'center' }}>
                        <b>Yay! You have seen it all</b>
                    </p>
                }
            >
                <div >
                    {
                        this.state.repos.map(rep => {
                            return (
                                <Repository key={rep.id} rep={rep} />
                            )
                        }
                        )}

                </div>
            </InfiniteScroll>
        );
    }
}
export default PageCard;