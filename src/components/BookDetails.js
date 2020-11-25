import React,{ Component } from 'react';
import { Card, CardImg, CardText, CardBody, Breadcrumb, BreadcrumbItem , Button, Col, Modal, ModalHeader, ModalBody, Label, Row } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Control, LocalForm, Errors } from 'react-redux-form';
import { FadeTransform, Fade, Stagger } from 'react-animation-components';

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);

class CommentForm extends Component {

  constructor(props){
        super(props);
        this.toggleModal=this.toggleModal.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
        this.state = {
            isModalOpen: false
        };
    }

    toggleModal(){
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }

    handleSubmit(values) {
      this.toggleModal();
      this.props.postComment(this.props.bookId, values.author, values.rating, values.comment);
      alert("Please! Refresh The page");
    }

  render(){
    return(
      <React.Fragment>
        <Button onClick={this.toggleModal} outline className="offset-2 btn-info"><span className="fa fa-lg fa-pencil"></span> Submit Comment</Button>

        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
          <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
          <ModalBody>
              <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                  <Label htmlFor="rating">Rating</Label>
                  <Row className="form-group">
                      <Col className="col-12">
                          <Control.select model=".rating" name="rating" default="3"
                          className="custom-select col-md-12 from-control">
                              <option>1</option>
                              <option>2</option>
                              <option>3</option>
                              <option>4</option>
                              <option>5</option>
                          </Control.select>
                      </Col>
                  </Row>
                  <Label htmlFor="author">Your name</Label>
                  <Row className="form-group">
                      <Col md={12}>
                          <Control.text model=".author" id="author" name="author" placeholder="Your Name" 
                          className="form-control"
                          validators={{
                              required, minLength: minLength(3), maxLength: maxLength(15)
                          }}
                          />
                          <Errors 
                              className="text-danger"
                              model=".author"
                              show="touched"
                              messages={{
                                  required: 'Required',
                                  minLength: 'Must be greater than 2 chracters',
                                  maxLength: 'Must be 15 characters or less'
                              }}
                          />
                      </Col>
                  </Row>
                  <Label htmlFor="comment">Comment</Label>
                  <Row className="form-group">
                      <Col>
                          <Control.textarea model=".comment" id="comment" name="comment" 
                          rows="6"  
                          className="form-control"/>
                              
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
    </React.Fragment>
    );
  }
}

function RenderBook({book}){
	if(book!=null){
		return(
			<div className="col-12 col-sm-5 m-1">
        <FadeTransform in transformProps={{ exitTransform: 'scale(0.5) translateY(-50%)'}}>
  				<Card>
  					<CardImg top width="100%" src={book.image} alt={book.name} />
  					<CardBody>
                      <CardText><em><h6>Category: {book.category}</h6></em></CardText>
  				      <CardText>{book.description}</CardText>  
            </CardBody>
  				</Card>
        </FadeTransform>
			</div>
		);	
	}
	else {
        return (
            <div></div>
        );
    }
}

  function RenderComments({auth, comments, postComment, bookId}) {
  	if(comments!=null){

		return(
			<div className='col-12 col-md-5 m-1'>
                <h4> Comments </h4>
                <ul>
                      <Stagger in>
                        {comments.map((comment) => {
                            return (
                                <Fade key={comment._id} in>
                                <li>
                                    <p>{comment.comment}</p>
                                    <p>{comment.rating} stars</p>
                                    <p>-- {comment.by} , {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day:'2-digit'}).format(new Date(Date.parse(comment.updatedAt)))}</p>
                                </li>
                                </Fade>
                            );
                        })}
                      </Stagger>
                </ul>
                <CommentForm auth={auth} bookId={bookId} postComment={postComment} />
            </div>
		);	
	}
	else {
        return (
            <div></div>
        );
    }
}

function Details(props) {
    
  if(props.book!=null){
              return (
                <React.Fragment>
                    <div className="container">
                        <div className="row">
                            <Breadcrumb className="container">
                                <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                                <BreadcrumbItem><Link to="/books">Books</Link></BreadcrumbItem>
                                <BreadcrumbItem active>{props.book.name}</BreadcrumbItem>
                            </Breadcrumb>
                            <div className="col-12">
                                <h3>{props.book.name}</h3>
                                <hr />
                            </div>                
                        </div>
                        <div className="row">
                            <RenderBook book={props.book} />
                            <RenderComments auth={props.auth} comments={props.book.comments} postComment={props.postComment} bookId={props.book._id} />
                        </div>
                    </div>
                </React.Fragment>
            );  
  }
  else{
    return(<div></div>);
  }
}
       	



export default Details;