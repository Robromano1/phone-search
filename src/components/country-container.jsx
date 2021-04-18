import React from "react";
import CountrySearch from "./country_search";
import '../stylesheets/country_dropdown.css';

class CountryContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { country: '' };
  }

  handleChange = (newCountry) => {
    this.setState({ country: newCountry });
  };

  render() {
    return (
      <div id="country-box">
        <div className="countryName">
          <h2>{this.state.country}</h2>
        </div>
        <CountrySearch changeCountry={this.handleChange} />
      </div>
    );
  }
}

export default CountryContainer;
