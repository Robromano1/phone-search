import React from "react";
import CountrySearch from "./country_search";

class CountryContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { country: this.props.country };
  }

  handleChange = (newCountry) => {
    this.setState({ country: newCountry });
  };

  render() {
    return (
      <div id="country-box">
        <div>
          <h2>{this.state.country}</h2>
        </div>
        <CountrySearch changeCountry={this.handleChange.bind(this)} />
      </div>
    );
  }
}

export default CountryContainer;
