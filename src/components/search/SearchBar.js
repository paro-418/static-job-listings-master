import classes from "./SearchBar.module.css";
import SearchKeyword from "./SearchKeyword";
const SearchBar = () => {
  return (
    <div className={classes.searchBar}>
      <div className={classes.keywordContainer}>
        <SearchKeyword>JavaScript</SearchKeyword>
        <SearchKeyword>JavaScript</SearchKeyword>
        <SearchKeyword>JavaScript</SearchKeyword>
        <SearchKeyword>JavaScript</SearchKeyword>
        <SearchKeyword>JavaScript</SearchKeyword>
        <SearchKeyword>JavaScript</SearchKeyword>
        <SearchKeyword>JavaScript</SearchKeyword>
        <SearchKeyword>JavaScript</SearchKeyword>
        <SearchKeyword>JavaScript</SearchKeyword>
      </div>
      <button className={classes.btn}>clear</button>
    </div>
  );
};

export default SearchBar;
