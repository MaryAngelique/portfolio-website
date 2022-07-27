import React from "react";

const PageTitle = (props) => {
    const { headerText, icon } = props;

  return (
    <div className="wrapper">
        <h2>{title}</h2>
        <span>{icon}</span>
    </div>
  );
};


export default PageTitle;