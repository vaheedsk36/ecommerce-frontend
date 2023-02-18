import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faSearch,faCaretDown } from '@fortawesome/free-solid-svg-icons';

const SearchBar = () => {
  return (
    <>
    <div className="search-bar">
        <button className='search-bar--dropdown'>
         <label>All</label>
         <FontAwesomeIcon icon={faCaretDown}/>
        </button>
        <input type="text" className="search-bar--input" placeholder="Search for products, brands and more"/>
        <button className='search-bar--button'>
         <FontAwesomeIcon icon={faSearch}/>
        </button>
    </div>
    <div className="search-bar--options">
        <label>Demo Data</label>
    </div>
    </>
  )
}

export default SearchBar