import React from 'react'
import {Card,CardBody,CardTitle,CardImg,CardText} from 'reactstrap'

 

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
                <h6>{dish.description}</h6>
              </CardText>
            </CardBody>
          </Card>
        );
        
    }
  }

  function RenderComments({dish}) {
      
        if(dish==null){
            return(<div></div>);
        }
        else{
            const c=dish.comments.map((comment)=>{
                return (
                  <React.Fragment>
                    <li key={comment.id}>
                      <div>{comment.comment}</div>
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
                  </React.Fragment>
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
        const dish = props.dish;
            return (
            <div className="container">
                <div className="row">
                <div className="col-12 col-md-5 m-1"><RenderDish dish={dish}/></div>
                <div className="col-12 col-md-5 m-1">
                    <RenderComments dish={dish}/>
                </div>
                </div>
            </div>
            );
    }
export default DishDetail;