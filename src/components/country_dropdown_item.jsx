import { render } from "@testing-library/react";
import React from "react";
import "../stylesheets/country_dropdown.css";

class CountryDropdownItem extends React.Component {
  handleClick = (e) => {
    const newCountry = e.currentTarget.innerHTML;
    this.props.changeCountry(newCountry);
  };

  render() {
    const { country, idx } = this.props;
    return (
      <ul>
        <li className="countryItem" key={idx} onClick={this.handleClick}>
          {country}
        </li>
      </ul>
    );
  }
}

export default CountryDropdownItem;
