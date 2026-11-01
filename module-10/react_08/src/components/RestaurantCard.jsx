
function RestaurantCard( {restArrayy} ) {
  return (
    restArrayy.map((restDetail)=>{
        return(
             <div key={restDetail.info.id} className='m-8 w-58'>
                <img className="w-58 h-42 rounded-xl"  src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${restDetail.info.cloudinaryImageId}`} alt="" />
                <h1 className="font-bold">{restDetail.info.name}</h1>
                <span className="font-bold">{restDetail.info.avgRating}</span>
                <span className="mx-3">{restDetail.info.sla.slaString}</span>
                <p>{restDetail.info.cuisines[0]}</p>
                <p>{restDetail.info.areaName}</p>
            </div>
        )
    })
  )
}

export default RestaurantCard