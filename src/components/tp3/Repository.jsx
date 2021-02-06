import React, { Component } from 'react';
import { Card, Row, Col } from 'reactstrap';
import Moment from 'react-moment';

class Repository extends Component {
    constructor(props) {
        super();
        this.state = {
            rep: props.rep
        };

    }
    render() {
        return (
            <Card
                className=" m-5 p-5 border-1">
                <Row >
                    <Col xs="3">
                        <Card className="">
                            <img className="mw-100" src={this.state.rep.owner.avatar_url} alt="" />
                        </Card>
                    </Col>
                    <Col xs="9">
                        <div><h4>{this.state.rep.name}</h4>
                            <p>{this.state.rep.description}</p>
                            <div className="pt-2">
                                <span className="rounded p-2  bg-warning text-dark font-weight-bold">
                                    Stars: {this.state.rep.stargazers_count}
                                </span>
                                <span className="rounded p-2 mb-2 m-3 bg-info text-white font-weight-bold">
                                    Open issues : {this.state.rep.open_issues}
                                </span>
                                <span>
                                    Submitted <Moment date={this.state.rep.created_at} format="DD" durationFromNow />  days ago by {this.state.rep.full_name}

                                </span>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Card>
        );
    }
}

export default Repository;