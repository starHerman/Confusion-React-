import React from 'react';
import {Card,CardTitle,CardImg,CardImgOverlay,Breadcrumb,BreadcrumbItem} from 'reactstrap';
import {Link} from 'react-router-dom'
import {Loading} from './LoadingComponent'
import {baseUrl} from "../shared/baseUrl"
    // constructor(props){
    //     super(props);
    //     this.state={
    //         selectedDish:null
    //     }
    // }
    // onDishSelect(dish){
    //     this.setState({selectedDish:dish});
    // }
    // renderDish(dish){
    //     if(dish!=null){
    //         return (
    //          <DishDetail dish={this.state.selectedDish}/>
    //         );
    //     }
    //     else{
    //         return(<div></div>);
    //     }
    // }
    function RenderMenuItem({dish}){
        return (
          <Card>
            <Link to={`/menu/${dish.id}`}>
              <CardImg width="100%" src={baseUrl+dish.image} alt={dish.name} />
              <CardImgOverlay>
                <CardTitle>
                  <h4>{dish.name}</h4>
                </CardTitle>
              </CardImgOverlay>
            </Link>
          </Card>
        );
    }
    const Menu=(props)=>{
        const menu=props.dishes.dishes.map((dish)=>{
            return (
              <div className="col-12 col-md-5 m-1" key={dish.id} >
                  <RenderMenuItem dish={dish} />
              </div>
            );
        });
         if (props.dishes.isLoading) {
           return (
             <div className="container">
               <div className="row">
                 <Loading />
               </div>
             </div>
           );
         } else if (props.dishes.errMess) {
           return (
             <div className="container">
               <div className="row">
                 <div className="col-12">
                   <h4>{props.dishes.errMess}</h4>
                 </div>
               </div>
             </div>
           );
         } else
              return (
                <div className="container">
                  <div className="row">
                    <Breadcrumb>
                      <BreadcrumbItem>
                        <Link to="/home">Home</Link>
                      </BreadcrumbItem>
                      <BreadcrumbItem active>Menu</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                      <h3>Menu</h3>
                      <hr />
                    </div>
                  </div>
                  <div className="row">{menu}</div>
                </div>
              );
    }
export default Menu;