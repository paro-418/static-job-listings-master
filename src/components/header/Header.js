import SearchBar from '../search/SearchBar';
import classes from './Header.module.css';

const Header = () => {
    return (
        <header className={classes.header}>
            <SearchBar/>
        </header>
    )
}

export default Header;