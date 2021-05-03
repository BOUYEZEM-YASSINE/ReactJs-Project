import axios from 'axios';
import React, { Component } from 'react';

import { Link } from 'react-router-dom';
export class Detail extends Component {
  state = {
    obj: [],
  };
  componentWillMount = () => {
    const login = this.props.match.params.login;
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${login}`)
      .then((res) => {
        this.setState({
          obj: res.data.meals,
        });
      });
  };

  render() {
    return (
      <div className="container-fluid mx-0 my-5">
        {this.state.obj.map((gitDATA) => (
          <div className="row">
            <div className="col-lg-6">
              <img className="card-img-top" src={gitDATA.strMealThumb} alt="" />
            </div>
            <div className="col-lg-6">
              <h4 className="">
                {gitDATA.strMeal}
                <Link className="m-5 for" onClick={this.props.ajouter}>
                  <i className="fas fa-heart text-danger"></i>
                </Link>
              </h4>
              <h2>Their compon ents</h2>
              <h3>
                {gitDATA.strIngredient1} ,{gitDATA.strIngredient2},
                {gitDATA.strIngredient3} ,{gitDATA.strIngredient4},
                {gitDATA.strIngredient9} ,{gitDATA.strIngredient5},
                {gitDATA.strIngredient6},{gitDATA.strIngredient7},
                {gitDATA.strIngredient8},{gitDATA.strIngredient10},
              </h3>
              <h2>Preparation method</h2>

              <h6> {gitDATA.strInstructions}</h6>
            </div>
          </div>
        ))}
      </div>
    );
  }
}
export default Detail;