import React from 'react';
import { Media } from 'reactstrap';
import '../App.css';
import { baseUrl } from '../shared/baseUrl';
import { Loading } from './LoadingComponent';
import { Fade, Stagger } from 'react-animation-components';

function RenderLeader (props) {
    if (props.isLoading) {
        return(
            <div className="container">
                <div className="row">            
                    <Loading />
                </div>
            </div>
        );
    }
    else if (props.errMess) {
        return(
            <div className="container">
                <div className="row"> 
                    <div className="col-12">
                        <h4>{props.errMess}</h4>
                    </div>
                </div>
            </div>
        );
    }
    else {
        const leaders = props.leaders.map((leader) => {
            return(
                <div className="row mb-5">
                <Fade in key={leader._id}>
                    <Media tag="li">
                        <Media left middle>
                            <Media className="leaderImage" object src={baseUrl + leader.image} alt={leader.name} />
                        </Media>
                        <Media body className="ml-5">
                        <Media heading>{leader.name}</Media>
                        <h5>{leader.designation}</h5>
                        <p>{leader.description}</p>
                        </Media>
                    </Media>
                </Fade>
                </div>
            );
        });

        return(
            <div className="row">
                <Stagger in>{leaders}</Stagger>
            </div>
        );
    }
}


export default RenderLeader;