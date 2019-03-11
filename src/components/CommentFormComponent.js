import React, { Component } from 'react';
import { Modal, ModalHeader, ModalBody, Button, Row, Col, Label } from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form';

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);

class CommentForm extends Component {

    constructor(props) {
        super(props);

        this.state = {
            firstname: '',
            message: '',
            visible: false,
            rating: 1
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    toggleModal() {
        this.setState({
            visible: !this.state.visible
        });
    }

    handleChange(event) {
        this.setState({
            rating: event.target.value
        });
    }

    handleSubmit(values) {
        this.props.postComment(this.props.dishId, values.rating, values.firstname, values.message);
        this.toggleModal()
    }

    render() {
        return (
            <div>
                <button type="button" className="btn btn-primary-outline" onClick={this.toggleModal}>
                    <i className="fa fa-pencil fa-fw" aria-hidden="true"></i>
                    Submit Comment
                </button>
                <Modal isOpen={this.state.visible} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
                    <ModalBody>
                        <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                            <Row>
                                <Col><Label htmlFor="rating"><b>Rating</b></Label></Col>
                            </Row>
                            <Row className="form-group">
                                <Col>
                                    <Control.select model=".rating" id="rating" name="rating" value={this.state.rating} onChange={this.handleChange}>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                        <option value="6">6</option>
                                        <option value="7">7</option>
                                        <option value="8">8</option>
                                        <option value="9">9</option>
                                        <option value="10">10</option>
                                    </Control.select>
                                </Col>
                            </Row>
                            <Row>
                                <Col><Label htmlFor="firstname"><b>Your Name</b></Label></Col>
                            </Row>
                            <Row className="form-group">
                                <Col>
                                    <Control.text model=".firstname" id="firstname" name="firstname"
                                        placeholder="Your Name"
                                        className="form-control"
                                        validators={{
                                            required, minLength: minLength(3), maxLength: maxLength(15)
                                        }}
                                    />
                                    <Errors
                                        className="text-danger"
                                        model=".firstname"
                                        show="touched"
                                        messages={{
                                            required: 'Required',
                                            minLength: 'Must be greater than 2 characters',
                                            maxLength: 'Must be 15 characters or less'
                                        }}
                                    />
                                </Col>
                            </Row>
                            <Row>
                                <Col><Label htmlFor="message"><b>Your Comment</b></Label></Col>
                            </Row>
                            <Row className="form-group">
                                <Col>
                                    <Control.textarea model=".message" id="message" name="message"
                                        rows="6"
                                        className="form-control" />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Col>
                                    <Button type="submit" color="primary">
                                    Submit
                                    </Button>
                                </Col>
                            </Row>
                        </LocalForm>
                    </ModalBody>
                </Modal>
            </div>
        );
    }
}

export default CommentForm;
