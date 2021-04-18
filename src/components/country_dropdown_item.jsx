import React from "react";
import "../stylesheets/country_dropdown.css";

export const CountryDropdownItem = ({ country, idx }) => (
  <ul>
    <li className="countryItem" key={idx}>
      {country}
    </li>
  </ul>
);
