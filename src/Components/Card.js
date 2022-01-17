import React, { Component } from "react";

class Card extends Component {
    render() {
        const {name, email, username} = this.props;
        return (
            <div className="tc bg-light-blue dib br3 pa3 ma2 grow bw2 shadow-5">
                <img alt={username} src={`https://robohash.org/${name}?set=set4`} />
                <div>
                    <h2>{name}</h2>
                    <p>{email}</p>
                </div>
            </div>
        )
    }
}

export default Card;