import React, { Fragment } from "react";
import HeroComponent from "../Components/Hero/Hero.Component";

import HeaderComponent from "../Components/Header/Header.Component";
const HeaderSection = (props) => {
  return (
    <Fragment>
      <HeaderComponent onOpen={props.onOpen} />
      <HeroComponent />
    </Fragment>
  );
};

export default HeaderSection;
