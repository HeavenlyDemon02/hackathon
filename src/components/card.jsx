import React from 'react'
// import { useState } from 'react';
import '../components/card.css'
// const axios = require('axios')
const Card = (req,res) => {
//   const [loading,setLoading] = useState(false);
//   const productID = req.params.id;
//   const [data,setData] = useState([]);
//   const getCertainProduct = async(productID) =>{
//     try{
//       const response = await axios.get(`https://127.0.0.1:8080/api/user/listings/${productID}`);
//       setData(response.data);
//     }catch(e){
//       console.log(e);
//     }
//   }
// getCertainProduct(productID);
  return (
    <div>
  <section class="product">
	<div class="product__photo">
		<div class="photo-container">
			<div class="photo-main">
				<div class="controls">
				</div>
				<img src="https://thumbs.dreamstime.com/b/new-red-tractor-1326711.jpg" alt="green apple slice"/>
			</div>
			<div class="photo-album">
				<ul>
					<li><img src="https://t3.ftcdn.net/jpg/02/78/21/80/360_F_278218000_M8XeJ17iOrQb35aOgfBsaJZxZHE03nUG.jpg" alt="green apple"/></li>
					<li><img src="https://thumbs.dreamstime.com/z/beautiful-image-old-indian-tractor-204616365.jpg" alt="half apple"/></li>
					<li><img src="https://t3.ftcdn.net/jpg/02/78/21/80/360_F_278218000_M8XeJ17iOrQb35aOgfBsaJZxZHE03nUG.jpg" alt="green apple"/></li>
					<li><img src="https://thumbs.dreamstime.com/z/beautiful-image-old-indian-tractor-204616365.jpg" alt="apple top"/></li>
				</ul>
			</div>
		</div>
	</div>
	<div class="product__info">
		<div class="title">
			<h1>Ashok Leyland Diesel Tractor</h1>
			{/* <span>COD: 45999</span> */}
		</div>
		<div class="price">
      ₹ <span>3000</span> /day
		</div>
		<div class="description">
			
			<h3>DESCRIPTION</h3>
			<p>This tractor features a sturdy chassis, durable tires, and a powerful engine that delivers reliable performance, even in challenging terrain. It also comes equipped with a range of convenient features, including a comfortable seat, intuitive controls, and easy-to-read gauges.</p>
      </div>
		<button class="buy--btn">Take for Rent</button>  
    <button class="sell--btn">Contact Seller</button>
	</div>
</section>
    </div>
  )
}

export default Card