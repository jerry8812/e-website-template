import React, { Component } from 'react'

import banner_women from '../../assets/images/banner/women.jpg'
import banner_electronic from '../../assets/images/banner/electronic.jpg'
import banner_jewelery from '../../assets/images/banner/jewelery.jpg'
import banner_jewelery_a from '../../assets/images/banner/jewelery01.jpg'


export default class BannerSlide extends Component {
  constructor(props) {
    super(props)
    this.slideRef = React.createRef()
    this.state = {
      index: 0,
      allImages: [banner_women, banner_electronic, banner_jewelery, banner_jewelery_a]
    }
  }
  slideTo = () => {
    let index = this.state.index + 1
    if(index > this.state.allImages.length) {
      this.slideRef.current.style.transitionDuration = ''
      this.slideRef.current.style.left = 0
      setTimeout(() => {
        this.slideRef.current.style.transitionDuration = '1s'
        index = 1
        this.setState({index})
      })
      return
    }
    this.setState({
      index
    })
  }
  componentDidMount() {
    this.timer = setInterval(()=> {
      this.slideTo()
    }, 2500)
  }

  render() {
    const {index, allImages} = this.state
    const style = {
      width: (allImages.length + 1) * 100 + 'vw',
      left: `-${index*100}%`,
      transition: `left 1s ease-out`
    }
    return (
      <div className="banner">
        <div className="imagelist" ref={this.slideRef} style={style}>
          {allImages.map((image, index)=> {
            return <img src={image} key={index} alt="banner"></img>
          })}
          <img src={allImages[0]} alt="banner"></img>
        </div>
        <div className="banner-shop">
          <div>ALWAYS BE</div>
          <div>ORIGINAL</div>
          <div>NEW ARRIVALS ARE HERE</div>
          <div>
            <button>Shop Now</button>
          </div>
        </div>
      </div>
    )
  }
}

