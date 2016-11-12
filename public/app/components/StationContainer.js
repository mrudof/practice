import React, { Component } from 'react'
import StationItem from '../components/StationItem'

class StationContainer extends Component {

  render(){
    var list;
    if (this.props.stations.length === 0) {
      list = <div className="alert alert-danger" role="alert">
              <p><strong>Oops! </strong> Nothing matches that search term. Please try another artist.</p>
            </div>
    } else {
      list = <div className="row">
         {
            this.props.stations.map((station ,i) => {
              return (<StationItem key={i} station={station} />)
            })
          }
        </div>
    }

    return (
      <div className="container">
        {list}
      </div>
      )
  }
}

export default StationContainer
