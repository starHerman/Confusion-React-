import React from 'react';
import {Card,CardTitle,CardImg,CardImgOverlay} from 'reactstrap';
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
    function RenderMenuItem({dish,onClick}){
        return (
          <Card onClick={()=>onClick(dish.id)}>
            <CardImg width="100%" src={dish.image} alt={dish.name} />
            <CardImgOverlay>
              <CardTitle>
                <h4>{dish.name}</h4>
              </CardTitle>
            </CardImgOverlay>
          </Card>
        );
    }
    const Menu=(props)=>{
        const menu=props.dishes.map((dish)=>{
            return (
              <div className="col-12 col-md-5 m-1" key={dish.id} >
                  <RenderMenuItem dish={dish} onClick={props.onClick}/>
              </div>
            );
        });
        return (
          <div className="container">
            <div className="row">{menu}</div>
            {/* <div className="row">
              <div className="col-12 ">
                {this.renderDish(this.state.selectedDish)}
              </div>
            </div> */}
          </div>
        );
    }
export default Menu;