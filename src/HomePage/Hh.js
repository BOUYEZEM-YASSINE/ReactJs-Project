import axios from 'axios'
import React, { Component } from 'react'

export class Hh extends Component {
    state = {
        Menu :[]
    }
    componentDidMount(){
        axios.get('https://www.themealdb.com/api/json/v1/1/search.php?s=')
        .then(res =>
        {  this.setState({
        Menu :res.data.meals
    })
})
    }
    render() {
        return (
            <div>
                  <div className="row d-flex justify-content-center my-5 mx-0">
          {this.state.Menu.map(hhh => (
          
                <div class="card S mx-4 col-md-3 my-2">
                    <img class="card-img-top" src={hhh.strMealThumb}  alt="Card image"/>
                    <div class="card-body">
                        <h4 class="card-title">{hhh.strMeal}</h4>
                        <p class="card-text">Some example text some example text. John Doe is an architect and engineer</p>
                        <a href={hhh.strYoutube} class="btn btn-primary">See Profile</a>
                    </div>
                </div>
          ))}

        </div>
            </div>
        )
    }
}

export default Hh
