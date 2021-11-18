import "./NavBar.scss";
import React from "react";
import { ReactElement } from "react";
import { NavGroup } from "./NavGroup";
import { PageGraph } from "./PageGraph";
import { DefaultLogo } from "./DefaultLogo";

const ThreeBars = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    aria-label="icon for navigation expander">
    <path
      aria-label="three horizontal bars stacked"
      d="M5 15h14v2H5zm0-8h14v2H5zm0 4h14v2H5z"
      fill="currentColor"
      fillRule="evenodd"></path>
  </svg>
);

export const NavBar = ({
  graph,
  logo = (
    <div style={{ width: "150px", height: "auto" }}>
      <DefaultLogo />
    </div>
  ),
  stylesheetSwitch = <></>,
}: {
  graph: PageGraph;
  logo?: ReactElement;
  stylesheetSwitch?: ReactElement;
}) => {
  const Logo = () => logo;
  const StylesheetSwitch = () => stylesheetSwitch;
  return (
    <nav>
      <header>
        <Logo />
        <div className="header-actions">
          <label htmlFor="navexpander" aria-label="show nav" tabIndex={0}>
            <ThreeBars />
          </label>
          <StylesheetSwitch />
        </div>
      </header>
      <input
        type="checkbox"
        id="navexpander"
        defaultChecked={true}
        style={{ display: "none" }}
      />
      <NavGroup items={graph.overallOrder(true)} graph={graph} />
    </nav>
  );
};
