import React, { useEffect, useState } from 'react';
import { useQuery,useMutation } from 'react-query';
import { ICurrentLocation } from '../../ts/type-defs/header'
import { getLocationDetails } from '../../ts/utility';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';


const CurrentLocation:React.FC<ICurrentLocation> = ({zipCode,setZipCode,locationUrl}) => {
    
    const {isLoading,error,data,refetch} = useQuery('userLocationData',()=> getLocationDetails(locationUrl),{
        enabled: false,
      });

    const [locationData,setLocationData] = useState<any>({});

    useEffect(()=>{
    if(data && zipCode){
      setLocationData(data.results[zipCode.toString()]);
    }
    },[data,locationUrl,zipCode]);


  return (
    <>
      <div>
        <button className="location--btn">
          <FontAwesomeIcon icon={faLocationDot} onClick={() => refetch()} />
        </button>
      </div>
    </>
  );
}

export default CurrentLocation