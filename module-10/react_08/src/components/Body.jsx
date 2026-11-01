import React, { useEffect, useState } from 'react'
import RestaurantCard from './RestaurantCard'
import ApiCalling from './ApiCalling';
import Search from './Search';

function Body() {


  let restArray = ApiCalling();

  const [allRestArr,setAllRestArr] = useState(restArray);

  useEffect(()=>{
    if( restArray && restArray.length){
      setAllRestArr(restArray)
    }
  } , [restArray])

  function handleFilter(restArray){
    setAllRestArr( restArray.filter((restaurant)=>{return restaurant.info.avgRating >= 4.3}) )
  }
  function handleReset(restArray){
    setAllRestArr(restArray)
  }

  return (
    <div>
      <h1 className='font-bold text-xl m-8'>Welcome and please order from Delhi</h1>
      <button onClick={()=>handleFilter(restArray)} className='p-2 ml-8 border  rounded-xl text-xl w-1/12 border-xl'>Rating 4.3+</button>
      <button onClick={()=>handleReset(restArray)} className='p-2 border  rounded-xl text-xl w-1/12 border-xl ml-20'>Reset+</button>
    
      <div>
        <Search restArray={restArray} setAllRestArr={setAllRestArr} />
      </div>

      <div className='flex flex-wrap w-10/12 m-auto'>
        <RestaurantCard restArrayy={allRestArr} />
      </div>
    </div>
  )
}

export default Body