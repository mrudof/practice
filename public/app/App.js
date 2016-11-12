import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import StationContainer from './components/StationContainer'
import SearchBar from './components/SearchBar'

class App extends Component {
  constructor(){
    super()
    this.state = {
      stations: [{artistName:"The Weekend", description:"Feat. August Alsina, Jeremih and more", artistId:"744880" },
                  {artistName:"Selena Gomez", description:"Feat. Ariana Grande, Demi Lovato and more", artistId:"57706" },
                  {artistName:"R. City", description:"Feat. Nelly, Iyaz, Wiz Khalifa and more", artistId:"30005067" },
                  {artistName:"Justin Bieber", description:"Feat. Shawn Mendes, One Direction and more", artistId:"44368" },
                  {artistName:"Major Lazer", description:"Feat. Iyaz Dillon Francis & DJ Snake and more", artistId:"43557" },
                  {artistName:"Taylor Swift", description:"Feat. Meghan Trainor, Katy Perry and more", artistId:"33221" }]
    }
    this.updateSearchResults = this.updateSearchResults.bind(this);
  }

  updateSearchResults(results) {
      this.setState({
        stations: results
      })
    }

  render(){
    return (
      <div>
        <SearchBar searchedStations={this.updateSearchResults} />
        <StationContainer stations={this.state.stations} />
      </div>
      )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))

