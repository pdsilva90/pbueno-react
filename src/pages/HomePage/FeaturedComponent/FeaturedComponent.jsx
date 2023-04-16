// import React, {useEffect, useState} from 'react';


// export default function FeaturedComponent() {
//     const [featuredItem, setFeaturedItem] = useState({})
//     const getFeaturedItemFunction = async() => {
//         const getFeaturedResponse = await fetch('')
//         const getFeaturedItemData = await getFeaturedResponse.json();
//         setFeaturedItem(getFeaturedItemData.data[getFeaturedItemData.data.length-1]);
//     }

//     const [showDetail, setShowDetail] = useState(false)
//     const featuredDetail = document.querySelector('.featured-detail')

//     const toggleDetailFunction = () => {
//         setShowDetail(!showDetail)
//         // featuredDetail.classList.toggle('active')
//     }

//     useEffect(getFeaturedItemFunction, [])

//     return(
//         <main className='featured-content-section'>
//             <div className='featured-img-container'>
//                 <img className="featured-img" src={featuredItem ? featuredItem.img : ""}/>
//             </div>
//             <section className='featured-text-container'>
//                 <p className='featured-subtitle'>Featured Product</p>
//                 <h3 className='featured-item-title'>{featuredItem ? featuredItem.itemName : ""} the {featuredItem ? featuredItem.itemType : ""}</h3>
//                 <p className='featured-price'>${featuredItem ? Number(featuredItem.price).toFixed(2) : ""}</p>
//                 {showDetail ? 
//                 <a className='homepage-button' onClick={toggleDetailFunction}>Close details</a>
//                 : 
//                 <a className='homepage-button' onClick={toggleDetailFunction}>View details</a>
//                 }                
//             </section>
//         </main>

//     )
// }
