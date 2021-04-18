import React from 'react';
import '../stylesheets/search_bar.css';

class SearchBar extends React.Component {
  constructor() {
    super();
    this.state = {
      code: "+1",
      country: "United States",
    };
  }

  // async fetchCountries() {
  // 	const response = await fetch("https://restcountries.eu/rest/v2/all");
  // 	console.log(response);
  // }

  handleChange(e) {
    e.preventDefault();
    this.setState({ code: e.currentTarget.value });
  }

  handleFocus(e) {
    e.preventDefault();
    console.log('Input Focused');
    // <CountryContainer />;
  }

  render() {
    const { country, code } = this.state;
    return (
      <div>
        <h2>Search for a country</h2>
        <input
          type="tel"
          value={code}
          onChange={this.handleChange.bind(this)}
          onFocus={this.handleFocus.bind(this)}
        />
        {/* <h2>{country}</h2>
				<Countries country={country}/> */}
        <div className="country-container">
          {/* <CountryContainer /> */}
					<h2>Hello</h2>
        </div>
      </div>
    );
  }
}

export default SearchBar;
