import React from 'react'
import {Card,CardBody,CardTitle,CardImg,CardText,BreadcrumbItem,Breadcrumb} from 'reactstrap'
import {Link} from 'react-router-dom'

 

  function RenderDish({dish}) {
    if (dish ==null) {
      return <div></div>;
    }
    else{
        return (
          <Card>
            <CardImg width="100%" src={dish.image} />
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

  function RenderComments({comments}) {
      
        if(comments==null){
            return <div></div>;
        }
        else{
            const c=comments.map((comment)=>{
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
            })
            return (
              <ul className="list-unstyled">
                <h4>Comment</h4>
                {c}
              </ul>
            );
        }   
    
  }
  const DishDetail=(props)=>{
        // const dish = props.dish;
        // const comments=props.comments;
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
                    <RenderDish dish={props.dish} />
                  </div>
                  <div className="col-12 col-md-5 m-1">
                    <RenderComments comments={props.comments} />
                  </div>
                </div>
              </div>
            );
    }
export default DishDetail;