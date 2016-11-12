import React, { Component } from 'react'

class SearchBar extends Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    var searchContent = this.refs.keyword,
    keyword = this.refs.keyword.value,
    url = `http://api-3283.iheart.com/api/v1/catalog/searchAll?keywords=${keyword}&queryTrack=false&queryBundle=false&queryArtist=true&queryStation=false&queryFeaturedStation=false&queryTalkShow=false&queryTalkTheme=false&queryKeyword=false&countryCode=US`;
    $.ajax({
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      method: 'get',
      url: url
    }).done((response) => {
      if (response.artists === null) {
        this.props.searchedStations([]);
      } else {
        this.props.searchedStations(response.artists.slice(0,6));
        searchContent.value = "";
      }
    }).fail((err) => {
      this.props.searchedStations([]);
    });
  }


  render(){
    return (
      <nav className="navbar navbar-default">
        <form className="navbar-form navbar-right" role="search" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <input ref="keyword" type="text" className="form-control" placeholder="Search Artists"/>
          </div>
          <button type="submit" className="btn btn-default"><span className="glyphicon glyphicon-search"></span></button>
        </form>
      </nav>

      )
  }
}

export default SearchBar

