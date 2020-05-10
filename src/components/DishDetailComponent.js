import React from 'react'
import {Card,CardBody,CardTitle,CardImg,CardText,BreadcrumbItem,Breadcrumb,Button,Row,Col,Label,Modal,ModalBody,ModalHeader} from 'reactstrap'
import { Control, LocalForm, Errors } from "react-redux-form";
import {Link} from 'react-router-dom'
import {Loading} from './LoadingComponent'
import {baseUrl} from "../shared/baseUrl"
const maxLen = (len) => (val) => !val || val.length <= len;
const minLen = (len) => (val) => val && val.length >= len;

 

  function RenderDish({dish}) {
   
     if(dish!=null){
        return (
          <Card>
            <CardImg width="100%" src={baseUrl+dish.image} />
            <CardBody>
              <CardTitle>
                <h4>{dish.name}</h4>
              </CardTitle>
              <CardText>
                <strong>{dish.description}</strong>
              </CardText>
            </CardBody>
          </Card>
        );
        
    }
  }

  function RenderComments({ comments, addComment, dishId }) {
    if (comments == null) {
      return <div></div>;
    } else {
      const c = comments.map((comment) => {
        return (
          <li key={comment.id}>
            <div>
              <strong>{comment.comment}</strong>
            </div>
            <br />
            <div>
              -- {comment.author} ,{" "}
              {new Intl.DateTimeFormat("en-US", {
                year: "numeric",
                month: "short",
                day: "2-digit",
              }).format(new Date(Date.parse(comment.date)))}
            </div>
            <br />
          </li>
        );
      });
      return (
        <ul className="list-unstyled">
          <h4>Comment</h4>
          {c}
          <li>
            <CommentForm dishId={dishId} addComment={addComment}/>
          </li>
        </ul>
      );
    }
  }
  class CommentForm extends React.Component{
     constructor(props){
       super(props);
       this.state={
        isModalOpen:false
          }
        this.toggleModal=this.toggleModal.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
     }
        toggleModal(){
        this.setState({
          isModalOpen:!this.state.isModalOpen
        });
        }
        handleSubmit(values){
          alert(values.author);
        this.toggleModal();
        this.props.addComment(this.props.dishId,values.rating,values.author,values.comment);
     }
     render(){
       return (
         <React.Fragment>
           <Button onClick={this.toggleModal}>
             <i className="fa fa-pencil fa-lg "></i> Submit Comment
           </Button>
           <Modal
             isOpen={this.state.isModalOpen}
             toggle={this.toggleModal}
             className=" "
           >
             <ModalHeader toggle={this.toggleModal}>
               <strong>Submit Comment</strong>
             </ModalHeader>
             <ModalBody toggle={this.toggleModal}>
               <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                 <Row className="form-group">
                   <Col md={10}>
                     <Label htmlFor="rating">Rating</Label>
                   </Col>
                   <Col md={12}>
                     <Control.select
                       model=".rating"
                       name="rating"
                       className="form-control"
                     >
                       <option>1</option>
                       <option>2</option>
                       <option>3</option>
                     </Control.select>
                   </Col>
                 </Row>
                 <Row className="form-group">
                   <Col md={10}>
                     <Label htmlFor="author">Your name</Label>
                   </Col>
                   <Col md={12}>
                     <Control.text
                       model=".author"
                       name="author"
                       className="form-control"
                       validators={{
                         maxLen: maxLen(15),
                         minLen: minLen(3),
                       }}
                     ></Control.text>
                     <Errors
                       className="text-danger"
                       show="touched"
                       model=".author"
                       messages={{
                         minLen: "Must be greater than 2 characters",
                         maxLen: "Must be less than 15 characters",
                       }}
                     ></Errors>
                   </Col>
                 </Row>
                 <Row className="form-group">
                   <Col md={10}>
                     <Label htmlFor="comment">Comment</Label>
                   </Col>
                   <Col md={12}>
                     <Control.textarea
                       model=".comment"
                       name="comment"
                       className="form-control"
                       rows={8}
                     ></Control.textarea>
                   </Col>
                 </Row>
                 <div className="form-group">
                   <Button color="primary" type="submit">
                     Submit
                   </Button>
                 </div>
               </LocalForm>
             </ModalBody>
           </Modal>
         </React.Fragment>
       );
     }

  }
  const DishDetail=(props)=>{
        // const dish = props.dish;
        // const comments=props.comments;
         if (props.isLoading) {
           return (
             <div className="container">
               <div className="row">
                 <Loading />
               </div>
             </div>
           );
         } else if (props.errmess) {
           return (
             <div className="container">
               <div className="row">
                 <h4>{props.errmess}</h4>
               </div>
             </div>
           );
         }
         else
            return (
              <div className="container">
                <div className="row">
                  <Breadcrumb>
                    <BreadcrumbItem>
                      <Link to="/menu">Menu</Link>
                    </BreadcrumbItem>
                    <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                  </Breadcrumb>
                  <div className="col-12">
                    <h3>{props.dish.name}</h3>
                    <hr />
                  </div>
                </div>
                <div className="row">
                  <div className="col-12 col-md-5 m-1">
                    <RenderDish dish={props.dish}
                    />
                  </div>
                  <div className="col-12 col-md-5 m-1">
                    <RenderComments comments={props.comments} 
                    addComment={props.addComment}
                    dishId={props.dish.id}/>
                  </div>
                  
                </div>
                
              </div>
            );
    }
export default DishDetail;