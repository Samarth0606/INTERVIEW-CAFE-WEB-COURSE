import React from 'react'

function Search({restArray , setAllRestArr}) {

    function handleRestSearch(searchedText){
        setAllRestArr(restArray.filter((restaurant)=>restaurant.info.name.toLowerCase().includes(searchedText.toLowerCase()) ))
    }   


  return (
    <div>
        <input className='border' onChange={(e)=>handleRestSearch(e.target.value)} type="text" name="" id="" />
    </div>
  )
}

export default Search