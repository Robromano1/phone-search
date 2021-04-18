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
    fetch("https://restcountries.eu/rest/v2/all")
      .then((res) => res.json())
      .then((data) => this.setState({ countryNames: data.map((d) => ({name: d.name, code: d.callingCodes[0] }) ) }));
  }

  handleChange(newCountry) {
    this.props.changeCountry(newCountry);
  }

  editSearch = (e) => {
    this.setState({ searchName: e.target.value });
  };

  filterSearch = () => {
    return this.state.countryNames.filter((country) =>
    country.name.toLowerCase().includes(this.state.searchName.toLowerCase())
    );
    // this.state.countryNames.forEach(country => {
    //   console.log(country);
    // })
  };

  handleFocus = (e) => {
    e.preventDefault();
    document.getElementById('countryDropdown').style.display = 'block';
  }

  render() {
    const { changeCountry } = this.props;
    return (
      <div className="dropdownInput">
        <input
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
          />
        </div>
      </div>
    );
  }
}

export default CountrySearch;
