import React from 'react'

const carousal = () => {
  return (
   <>
   <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100" src="https://www.deere.co.in/assets/images/region-1/products/tractors/d-series-tractors/john-deere-india-d-series-tractors.jpg" alt="First slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="https://t3.ftcdn.net/jpg/04/32/15/18/360_F_432151892_oQ3YQDo2LYZPILlEMnlo55PjjgiUwnQb.jpg" alt="Second slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="..." alt="Third slide"/>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
   </>
  )
}

export default carousal