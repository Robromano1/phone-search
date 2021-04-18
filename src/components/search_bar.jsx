import React from "react";
import "../stylesheets/search_bar.css";
import CountryContainer from "./country-container";

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
    this.setState({ country: e.currentTarget.value });
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
    const { country, code } = this.state;
    return (
      <div>
        {/* <h2>Search for a country</h2> */}
				<div className="inputWrap">
					<label for="phone">Phone</label>
					<input
						id="phone"
						type="tel"
						value={country}
						onChange={this.handleChange.bind(this)}
						onFocus={this.handleFocus.bind(this)}
					/>
				</div>

        <div id="country-container" onBlur={this.handleBlur.bind(this)}>
          <CountryContainer country={country} code={code} />
        </div>
      </div>
    );
  }
}

export default SearchBar;
