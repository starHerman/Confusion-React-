import React from 'react'
import {Card,CardBody,CardImg,CardText,CardTitle,CardSubtitle, CarouselItem} from 'reactstrap'
 
function RenderCard(props){

  return(
    <Card>
      <CardImg src={props.item.image}></CardImg>
      <CardBody>
      <CardTitle>{props.item.name}</CardTitle>
      {props.item.designation?<CardSubtitle>{props.item.designation}</CardSubtitle>:null}
      <CardText>{props.item.description}</CardText>  
      </CardBody>
    </Card>

  );
}

function Home(props){
     return (
       <div className="container">
         <div className="row align-items-start">
              <div className="col-12 col-md m-1">
                <RenderCard item={props.dish}/>
              </div>
              <div className="col-12 col-md m-1">
                <RenderCard item={props.promotion}/>
              </div>
              <div className="col-12 col-md m-1">
                <RenderCard item={props.leader}/>
              </div>
         </div>
       </div>
     );

}
export default Home;