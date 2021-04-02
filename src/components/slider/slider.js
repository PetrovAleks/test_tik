import React from 'react'
import { Slider } from '@lifarl/react-scroll-snap-slider'

const images = [
  {
    src_1: 'https://cdn.pixabay.com/photo/2017/04/10/08/08/church-window-2217785_960_720.jpg',
    src_2: 'https://cdn.pixabay.com/photo/2017/06/18/18/26/holi-2416686_960_720.jpg',
  },
  {
    src_1: 'https://www.gettyimages.com/gi-resources/images/500px/983794168.jpg',
    src_2: 'https://killerattitudestatus.in/wp-content/uploads/2019/12/gud-night-images.jpg',
  },
  {
    src_1: 'https://cdn.pixabay.com/photo/2017/04/10/08/08/church-window-2217785_960_720.jpg',
    src_2: 'https://cdn.pixabay.com/photo/2017/06/18/18/26/holi-2416686_960_720.jpg',
  },
]

const MainSlider = () => {
  return (
    <div className="slider-list">
      <Slider>
        {images.map((imageData, index) =>
          <div key={index} className="slider-item">
            <div className="wrapper-img">
              <img className="slider-img" src={imageData.src_1} width="400px" alt='some' />
            </div>
            <div className="wrapper-img">
              <img className="slider-img" src={imageData.src_2} width="400px" alt='some' />
            </div>
          </div> 
        )}
      </Slider>
    </div>
  )
}

export default MainSlider
