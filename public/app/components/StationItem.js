import React, { Component } from 'react'

class StationItem extends Component {
  render(){
    var station = this.props.station;
    return (
      <div className="col-xs-6 col-sm-6 col-md-4">
        <div className="station-item">
          <img src={`http://iscale.iheart.com/catalog/artist/${station.artistId}?ops=fit(250,0)`}/>
          <p><strong>{station.artistName}</strong><br></br>{station.description}</p>
        </div>
      </div>
      )
  }
}

export default StationItem
