import React from "react";
import CountryDropdownItem from "./country_dropdown_item";
import "../stylesheets/country_dropdown.css";

class CountryDropdown extends React.Component {
  handleChange = (newCountry) => {
    this.props.changeCountry(newCountry);
  };

  render() {
    const { countries } = this.props;
    return (
      <div className="countryWrapper">
        {countries.map((country, idx) => (
          <CountryDropdownItem
            country={country}
            idx={idx}
            key={idx}
            changeCountry={this.handleChange}
          />
        ))}
      </div>
    );
  }
}

export default CountryDropdown;
