import React from "react";
import { CountryDropdown } from "./country_dropdown";
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
      .then((data) => this.setState({ countryNames: data.map((d) => d.name) }));
  }

  handleChange(e) {
    e.preventDefault();
    const newCountry = e.currentTarget.value;
    this.props.changeCountry(newCountry);
  }

  editSearch = (e) => {
    this.setState({ searchName: e.target.value });
  };

  filterSearch = () => {
    return this.state.countryNames.filter((name) =>
      name.toLowerCase().includes(this.state.searchName.toLowerCase())
    );
  };

  render() {
    const { changeCountry } = this.props;
    return (
      <div className="dropdownInput">
        <input
          type="text"
          placeholder="Search"
          value={this.state.searchName}
          onChange={this.editSearch}
        />
        <div>
          <CountryDropdown countries={this.filterSearch()} />
        </div>
      </div>
    );
  }
}

export default CountrySearch;
