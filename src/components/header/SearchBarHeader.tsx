import React, { useMemo, useState } from 'react'
import CurrentLocation from './CurrentLocation';
import SearchBar from './SearchBar'

const SearchBarHeader = () => {

  const [zipCode,setZipCode] = useState<number|undefined>(undefined);

  let locationUrl = useMemo(()=>{
    return `${import.meta.env.VITE_ZIPCODEBASE_API_BASE_URL}/search?apikey=${import.meta.env.VITE_ZIPCODEBASE_API_KEY}&codes=${zipCode}`;
  },[zipCode]);

  return (
    <>
    <div className="search-bar-header">
      <CurrentLocation {...{zipCode,setZipCode}}/>
      <SearchBar/>
    </div>
    </>
  )
}

export default SearchBarHeader