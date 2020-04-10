import React from "react"
import Menu from "./MenuComponent"
import { DISHES } from "../shared/dishes"
import DishDetail from "./DishDetailComponent";
import Header from "./HeaderComponent"
import Footer from "./FooterComponent"
class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES,
      selectedDish: null
    };
  }
  select=(dishId)=>{
      this.setState({selectedDish:dishId});
      
  }
  render() {
    return (
      <div>
        <Header/>
        <Menu dishes={this.state.dishes} onClick={this.select} />
        <DishDetail dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]} />
        <Footer/>
      </div>

    );
  }
}

export default Main;
