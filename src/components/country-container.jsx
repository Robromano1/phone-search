import React from "react";
import CountrySearch from "./country_search";
import "../stylesheets/country_dropdown.css";

class CountryContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { country: "United States (1)" };
  }

  handleChange = (newCountry) => {
    // Set the state to the new country that was selected by the user in the
    // child component
    this.setState({ country: newCountry });
  };

  render() {
    return (
      <div id="country-box">
        <div className="countryName">
          <h3>{this.state.country}</h3>
        </div>
        <CountrySearch
          changeCountry={this.handleChange}
          changeCode={this.props.changeCode}
        />
      </div>
    );
  }
}

export default CountryContainer;
