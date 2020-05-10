import React from 'react'
import {Card,CardBody,CardImg,CardText,CardTitle,CardSubtitle} from 'reactstrap'
 import {Loading} from './LoadingComponent'
 import {baseUrl} from "../shared/baseUrl"
function RenderCard({item,isLoading,errmess}){
  
    if (isLoading) {
        return(
                <Loading />
        );
    }
    else if (errmess) {
        return(
                <h4>{errmess}</h4>
        );
    }
    else
      return(
        <Card>
          <CardImg src={baseUrl+item.image}></CardImg>
          <CardBody>
          <CardTitle>{item.name}</CardTitle>
          {item.designation?<CardSubtitle>{item.designation}</CardSubtitle>:null}
          <CardText>{item.description}</CardText>  
          </CardBody>
        </Card>

      );
}

function Home(props){
     return (
       <div className="container">
         <div className="row align-items-start">
           <div className="col-12 col-md m-1">
             <RenderCard
               item={props.dish}
               isLoading={props.dishesLoading}
               errmess={props.dishesErrMess}
             />
           </div>
           <div className="col-12 col-md m-1">
             <RenderCard
               item={props.promotion}
               isLoading={props.promotionsLoading}
               errmess={props.promotionsErrMess}
             />
           </div>
           <div className="col-12 col-md m-1">
             <RenderCard
               item={props.leader}
               isLoading={props.dishesLoading}
               errmess={props.dishesErrMess}
             />
           </div>
         </div>
       </div>
     );

}
export default Home;