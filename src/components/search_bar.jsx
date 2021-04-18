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

  handleChange(e) {
    e.preventDefault();
    this.setState({ code: e.currentTarget.value });
  }

  handleFocus(e) {
    e.preventDefault();
    document.getElementById("country-container").style.display = "block";
  }

  handleBlur(e) {
    e.preventDefault();
    document.getElementById("country-container").style.display = "none";
  }

  handleCodeChange = (newCode) => {
    this.setState({ code: newCode });
  };

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
            autoComplete="off"
            value={code}
            onChange={this.handleChange.bind(this)}
            onFocus={this.handleFocus.bind(this)}
          />
        </div>

        <div id="country-container">
          <CountryContainer code={code} changeCode={this.handleCodeChange} />
        </div>
      </div>
    );
  }
}

export default SearchBar;
