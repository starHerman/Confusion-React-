import React from "react"
import Menu from "./MenuComponent"
import { DISHES } from "../shared/dishes"
import {PROMOTIONS} from "../shared/promotions"
import {LEADERS} from "../shared/leaders"
import {COMMENTS} from "../shared/comments"
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
      comments:COMMENTS,
      selectedDish: null
    };
  }
  select=(dishId)=>{
      this.setState({selectedDish:dishId});
      
  }
  
  render() {
    const HomePage=()=>{
        return (
          <Home
            dish={this.state.dishes.filter((dish) => dish.featured)[0]}
            promotion={
              this.state.promotions.filter((promotion) => promotion.featured)[0]
            }
            leader={this.state.leaders.filter((leader) => leader.featured)[0]}
          />
        );
    }
     const DishWithId = ({ match }) => {
       return (
          <DishDetail
            dish={
              this.state.dishes.filter(
                (dish) => dish.id === parseInt(match.params.dishId, 10)
              )[0]
            }
            comments={this.state.comments.filter(
              (comment) => comment.dishId === parseInt(match.params.dishId, 10)
            )}
          />
        
       );
     };
    return (
      <div>
        <Header />
        <Switch>
          <Route path="/home" component={HomePage}/>       
          <Route exact path="/menu"component={()=><Menu dishes={this.state.dishes}/>}/>
          <Route path="/menu/:dishId" component={DishWithId}/>
          <Route exact path="/contactus" component={Contact}/>
          <Redirect to="/home" />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default Main;
