import React from "react"
import Menu from "./MenuComponent"
import { DISHES } from "../shared/dishes"
import {PROMOTIONS} from "../shared/promotions"
import {LEADERS} from "../shared/leaders"
import DishDetail from "./DishDetailComponent";
import Header from "./HeaderComponent"
import Footer from "./FooterComponent"
import {Switch,Route,Redirect} from 'react-router-dom'
import Home from "./HomeComponent";
import Contact from "./ContactComponent"
class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES,
      promotions:PROMOTIONS,
      leaders:LEADERS,
      selectedDish: null
    };
  }
  select=(dishId)=>{
      this.setState({selectedDish:dishId});
      
  }
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route path="/home">
            <Home
              dish={this.state.dishes.filter((dish) => dish.featured)[0]}
              promotion={this.state.promotions.filter((promotion) => promotion.featured)[0]}
              leader={this.state.leaders.filter((leader) => leader.featured)[0]}
            />
          </Route>
          <Route exact path="/menu">
            <Menu dishes={this.state.dishes} />
          </Route>
          <Route exact path="/contactus">
            <Contact />
          </Route>
          <Redirect to="/home" />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default Main;
