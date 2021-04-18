import React from "react";
import { CountryDropdownItem } from "./country_dropdown_item";
import "../stylesheets/country_dropdown.css";

export const CountryDropdown = ({ countries }) => {
  return (
    <div className="countryWrapper">
      {countries.map((country, idx) => (
        <CountryDropdownItem country={country} idx={idx} key={idx} />
      ))}
    </div>
  );
};
