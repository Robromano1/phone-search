import React from "react";
import "../stylesheets/search_bar.css";
import CountryContainer from "./country-container";

class SearchBar extends React.Component {
  constructor() {
    super();
    this.state = {
      code: "+1",
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
    console.log("Input Focused");
    document.getElementById("country-container").style.display = "block";
  }

  handleBlur(e) {
    e.preventDefault();
    document.getElementById("country-container").style.display = "none";
  }

  render() {
    const { code } = this.state;
    return (
      <div>
        {/* <h2>Search for a country</h2> */}
        <div className="inputWrap">
          <label htmlFor="phone">Phone</label>
          <input
            id="phone"
            type="tel"
            value={code}
            onChange={this.handleChange.bind(this)}
            onFocus={this.handleFocus.bind(this)}
          />
        </div>

        <div id="country-container">
          <CountryContainer code={code} />
        </div>
      </div>
    );
  }
}

export default SearchBar;
