import axios from 'axios'
import React, { Component } from 'react'

export class APIS13 extends Component {
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
                <div className="row d-flex justify-content-center mx-0 my-5">
                    <h3 className="XYYZ">All the recipes on this site is totally verified</h3>
                </div>
                <div className="row d-flex justify-content-center mx-0 my-5">
                    <img src={'/images/validated.png'}/>
                </div>
            </div>
        );
    }
}

export default APIS13
