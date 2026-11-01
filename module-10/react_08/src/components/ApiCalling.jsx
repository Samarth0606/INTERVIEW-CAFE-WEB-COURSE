import React, { useEffect, useState } from 'react'
import axios from "axios"

function ApiCalling() {

    const [allRestaurant,setAllRestaurant] = useState([])

    useEffect(()=>{
        async function calling(){
            let resp = await axios.get("https://www.swiggy.com/mapi/restaurants/list/v5?offset=0&is-seo-homepage-enabled=true&lat=28.65420&lng=77.23730&carousel=true&third_party_vendor=1")
            console.log(resp.data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
            setAllRestaurant(resp.data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
        }
        calling()
    }, [])

  return allRestaurant
}

export default ApiCalling