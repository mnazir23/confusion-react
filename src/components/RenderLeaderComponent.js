import React from 'react';
import { Media } from 'reactstrap';
import '../App.css'

function RenderLeader (props) {
    return(
        <div className="row mb-5">
            <Media tag="li">
                <Media left middle>
                    <Media className="leaderImage" object src={props.leader.image} alt={props.leader.name} />
                </Media>
                <Media body className="ml-5">
                <Media heading>{props.leader.name}</Media>
                <h5>{props.leader.designation}</h5>
                <p>{props.leader.description}</p>
                </Media>
            </Media>
        </div>
    );
}

export default RenderLeader;