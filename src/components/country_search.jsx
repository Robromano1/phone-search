import React from "react";
import CountryDropdown from "./country_dropdown";
import "../stylesheets/country_dropdown.css";

class CountrySearch extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      countryNames: [],
      searchName: "",
    };
  }

  componentDidMount() {
    // Api call that fetches all the countries including their codes when this
    // component mounts to the DOM.
    fetch("https://restcountries.eu/rest/v2/all")
      .then((res) => res.json())
      .then((data) =>
        this.setState({
          countryNames: data.map((d) => ({
            name: d.name,
            code: d.callingCodes[0],
          })),
        })
      );
  }

  handleChange(newCountry) {
    this.props.changeCountry(newCountry);
  }

  editSearch = (e) => {
    this.setState({ searchName: e.target.value });
  };

  filterSearch = () => {
    // Filter search results based on user input
    return this.state.countryNames.filter((country) =>
      country.name.toLowerCase().includes(this.state.searchName.toLowerCase())
    );
  };

  handleFocus = (e) => {
    e.preventDefault();
    document.getElementById("countryDropdown").style.display = "block";
  };

  resetSearch = () => {
    // resets the search name in state to clear the search input when a
    // country is selected from the list
    this.setState({ searchName: "" });
  };

  render() {
    return (
      <div className="dropdownInput">
        <input
          id="searchCountry"
          type="text"
          placeholder="Search"
          value={this.state.searchName}
          onChange={this.editSearch}
          onFocus={this.handleFocus}
        />
        <div id="countryDropdown">
          <CountryDropdown
            countries={this.filterSearch()}
            changeCountry={this.handleChange.bind(this)}
            changeCode={this.props.changeCode}
            resetSearch={this.resetSearch}
          />
        </div>
      </div>
    );
  }
}

export default CountrySearch;
