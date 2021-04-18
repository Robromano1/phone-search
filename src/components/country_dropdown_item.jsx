import { render } from "@testing-library/react";
import React from "react";
import "../stylesheets/country_dropdown.css";

class CountryDropdownItem extends React.Component {
  handleClick = (e) => {
    const newCountry = e.target.innerHTML;
    const newCode = '+' + this.props.code
    this.props.changeCountry(newCountry);
    this.props.changeCode(newCode);
  };

  render() {
    const { country, code, idx } = this.props;
    return (
      <ul>
        <li className="countryItem" key={idx} onClick={this.handleClick}>
          <div className="countryItemName">
            {country + ' '}({ code })
          </div>
        </li>
      </ul>
    );
  }
}

export default CountryDropdownItem;
