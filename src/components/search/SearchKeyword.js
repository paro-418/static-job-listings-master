import classes from "./SearchKeyword.module.css";
import React from "react";
import removeIcon from "../../images/icon-remove.svg";

const SearchKeyword = (props) => {
  return (
    <React.Fragment>
      <span className={classes.searchKeyword}>
        {props.children}
        <div className={classes.btn}>
          <img src={removeIcon} alt="remove icon"></img>
        </div>
      </span>
    </React.Fragment>
  );
};

export default SearchKeyword;
