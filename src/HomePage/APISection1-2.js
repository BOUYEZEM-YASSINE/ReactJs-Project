import axios from 'axios'
import React, { Component } from 'react'

export class APIS12 extends Component {
    state = {
        Menu :[]
    }
    componentDidMount(){
        let table=[];
        axios.get('https://www.themealdb.com/api/json/v1/1/search.php?s=')
        .then(res =>
            {
                
                for (let i =0 ; i < 3 ; i++) {
                    table.push(res.data.meals[i]);
                  }
                  this.setState({
                    Menu: table
                  })
              
    })
        }
    render() {
        return (
            <div>
                    <div className="row d-flex justify-content-center mx-0 my-5">
                             <h3 className="XYYZ">You gonna find a wide variety <br/>of food recipes in this site</h3>
                    </div>
                  <div className="row d-flex justify-content-center my-5 mx-0">
          {this.state.Menu.map(hhh => (
          
                <div class="card S mx-4 col-md-3 my-2">
                    <img class="card-img-top" src={hhh.strMealThumb}  alt="Card image"/>
                    <div class="card-body">
                        <h4 class="card-title">{hhh.strMeal}</h4>
                        <p class="card-text">Some example text some example text. John Doe is an architect and engineer</p>
                        <a href={hhh.strYoutube} class="btn btn-primary" target="_blank">See Profile</a>
                    </div>
                </div>
          ))}

        </div>
            </div>
        )
    }
}

export default APIS12
