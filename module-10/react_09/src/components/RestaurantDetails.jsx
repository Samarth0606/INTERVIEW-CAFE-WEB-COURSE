import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useDispatch } from 'react-redux';
import { addItem } from '../utils/cartSlice';

function RestaurantDetails() {

    const {idd} = useParams();
    // console.log(idd);
    const [foodItemDetails,setFoodItemDetails] = useState([])

    useEffect(()=>{
        async function calling(){
            let API = `https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.65420&lng=77.23730&restaurantId=${idd}&submitAction=ENTER`
            let resp = await axios.get(API)
            console.log(resp.data.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.itemCards);
            setFoodItemDetails(resp.data.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.itemCards); 
        }
        calling()
    } , [idd])

    let dipatch = useDispatch()
    function handleAddItem(foodItem){
        dipatch( addItem(foodItem) )
    }

  return (
    <div>
        <h1 className='text-center font-bold text-2xl'>List of item's avaialable at restaurant</h1>
        {
            foodItemDetails.map((foodItem)=>{
                return (
                    <div className="flex w-3/4 mx-auto mb-10 border-b-4 p-4">
                        <div className="flex flex-col w-3/4">
                        <h1>{foodItem.card.info.name}</h1>
                        <h1>{foodItem.card.info.price / 100}</h1>
                        <h1>{foodItem.card.info.category}</h1>
                        </div>
                        <img
                        className="w-52 h-44 rounded-md border shadow-lg border-gray-100"
                        src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/${foodItem.card.info.imageId}`}
                        alt=""
                        />

                        <button
                        className="border bg-green-300 h-8 relative top-16 right-5"
                        onClick={() => handleAddItem(foodItem)}
                        >
                        Add +
                        </button>
                    </div>
                );
            })
        }
    </div>
  )
}

export default RestaurantDetails