import { useEffect,useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch,faCaretDown } from '@fortawesome/free-solid-svg-icons';
import $ from 'jquery'


const SearchBar = () => {
    const [isSearchClicked,setIsSearchClicked] = useState<boolean>(false);
    let searchBarWidth = $('.search-bar').outerWidth();
    let searchDropDownWidth = $('.search-bar--dropdown').outerWidth();
    let viewportWidth = $(window).width();

    useEffect(()=>{
        if(isSearchClicked){
            if(searchBarWidth && searchDropDownWidth && viewportWidth){
                let searchOptionWidth = `${((searchBarWidth - searchDropDownWidth)/viewportWidth)*100}vw`;
                $('.search-bar--options').css('width',searchOptionWidth);
            }
        }
    },[isSearchClicked,searchBarWidth,searchDropDownWidth,viewportWidth]);
    
  return (
    <>
      <div className="search-bar">
        <button className="search-bar--dropdown">
          <label>All</label>
          <FontAwesomeIcon icon={faCaretDown} />
        </button>
        <input
          type="text"
          className="search-bar--input"
          placeholder="Search for products, brands and more"
        />
        <button
          className="search-bar--button"
          onClick={() => setIsSearchClicked(true)}
        >
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </div>
      {isSearchClicked ? (
        <div className="search-bar--options">
          <label>Demo Data</label>
        </div>
      ) : null}
    </>
  );
}

export default SearchBar