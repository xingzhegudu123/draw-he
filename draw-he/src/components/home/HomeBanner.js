import React, {Component} from 'react'

import {getHomeBannerData} from '../../services/home-service'

export default class HomeBanner extends Component{
	   constructor(){
        super();
	
	 this.state={
	  	 swiperContent: null,
	  }

}
	   
	   
	render(){
		 let {swiperContent} = this.state;
		 return (
		  <div ref="banner" className="swiper-container">
		      
             {swiperContent}
           
           
          </div>
		 	
		 )
		
	}
	
	
	//
	componentDidMount(){
		
		getHomeBannerData().then((result)=>{  
		
		//得到数据只渲染一次dom结构， dom结构不要根据数据变化而变化
            let dom = (
                <div className="swiper-wrapper">
                    {
                        result.map((item, index)=>{
                            return (
                                <div key={index} className="swiper-slide">
                                    <img width="100%"  src={item.imageUrl}/>
                                </div>
                            )
                        })
                    }
                </div>
            )


         //设置完dom结构再创建轮播视图
            this.setState({swiperContent: dom}, ()=>{

                // 创建轮播视图
        let bannerSwiper = new Swiper(this.refs.banner, {
            direction: 'horizontal',
            loop: true,
   
            autoplay : 3000,
            speed:500,
            // 如果需要滚动条
    
             effect : 'coverflow',
            // slidesPerView: 3,
            centeredSlides: true,
            // coverflow: {
            //     rotate: 30,
            //     stretch: 10,
            //     depth: 60,
            //     modifier: 2,
            //     slideShadows : true
            // }

    });

                bannerSwiper.update();//更新视图
            });
        })
		
		
	
	}
	
}