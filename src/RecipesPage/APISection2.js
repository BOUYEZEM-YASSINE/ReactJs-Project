import React, { Component } from 'react'

import axios from 'axios'

export class APIS2 extends Component {


    state = {
        menu: []
    }
    componentDidMount() {
        axios.get('https://www.themealdb.com/api/json/v1/1/search.php?s=')
            .then(res => {
                console.log(res);
                this.setState({
                    menu: res.data.meals
                })

            })
    }

    render() {

        return (


            <div className="container-fluid row d-flex justify-content-center my-4 mx-0">
                    {this.state.menu.map(res => (
                        <div className="card S mx-4 col-md-3 my-2">
                                <img  className="card-img-top" src={res.strMealThumb} alt="" />
                                <div className="card-body">
                                    <h4 className="card-title">{res.strMeal}</h4>
                                    <a href={'/Detail/' +res.idMeal } target="_blank" className="btn btn-success">show more</a>
                            </div>
                        </div>
                    ))}
            </div>


        )
    }
}
export default APIS2;