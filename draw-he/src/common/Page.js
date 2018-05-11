import React, {Component} from 'react'
import PropTypes from 'prop-types'

import Observer from '../center/observer'
export default class Page extends Component{
    	 constructor(){
          super();
     this.state = {
    	   refreshText: '下拉可以刷新',
	  		refreshImg: 'static/img/arrow.png',
	  		refreshActive: false,
	  		
	  		loadmoreImg: 'static/img/arrow.png',
	  		loadmoreText: '上拉加载更多',
	  		loadmoreActive: false,
	  		
	  		canlodermore:false
       }
    }
    render(){
    	let {loadmoreText,loadmoreActive,loadmoreImg,canlodermore} = this.state;
    	 let navClass = loadmoreActive?' active':'';
        return (
            <div ref="content" className="page" id={this.props.id}>
                <div className="page-wrap">
                
           
                
                    {this.props.children}
                
                {
                 	
                 	 canlodermore && <div className="down" >
		
		     	     <img src={loadmoreImg}   className={navClass}/>
			         <span>{loadmoreText}</span>
		     
		             </div>
                    
                 	
                 	
                 }
            
                    
                    
                    
                </div>
            </div>
        )
    }
    
     refresh(){
  		this.contentScroll.refresh();
  	}
    
    
    componentDidMount(){
            this.state.canlodermore = this.props.canloder;
    
    	let {loadmoreText,loadmoreActive,loadmoreImg,canlodermore} = this.state
        
        
  	const contentScroll = new IScroll(this.refs.content, { //获得dom，创建滚动视图
  		probeType: 3
  	});
  	this.contentScroll = contentScroll;
  	
  	//开始滚动前，更新视图大小
  	contentScroll.on('beforeScrollStart', ()=>{
  		this.refresh();
  	});
  	//向父组件传递滚动的位置
  	contentScroll.on('scroll', ()=>{
		
  	});

  	
    //添加上拉加载更多
  	if(canlodermore){
  		
  		//滑动过程中  只是改变文字和箭头方向
  		contentScroll.on('scroll', ()=>{
			var maxY = contentScroll.maxScrollY;
			var y = contentScroll.y;
		
			if(maxY < y){
				//正常显示文字，和图片，没有达到加载更多的条件
				
				
				this.setState({
				loadmoreText:'上拉加载更多',
				loadmoreImg:'static/img/arrow.png',
				loadmoreActive:false
				
			  })
			
			
			}
			else{      //maxY >= y 修改文字和图片，达到了加载更多的条件
			
			   this.setState({
			   	  loadmoreText:'释放立即加载',
				  loadmoreActive: true
			   })
			
			 
			}
		})
  		
  		
  		////滑动停止时---变为加载图片
		contentScroll.on('scrollEnd', ()=>{
			var maxY = contentScroll.maxScrollY;
			var y = contentScroll.y;

			
			if(y >= maxY+50){
				//不需要做修改
			}
			else if(y < maxY+50 && y > maxY){ 	//可以显示上拉加载更多了，收回
			
				contentScroll.scrollTo(0, maxY+50, 200);
			}
			else if(y <= maxY){
				
				this.setState({  //完全显示了，执行加载更多
					
				loadmoreImg: 'static/img/ajax-loader.gif',
				loadmoreText:'正在加载中...'
			})
				
				//隔两秒后恢复为之前的
//				setTimeout(()=>{
//					this.setState({
//						loadmoreImg: 'static/img/arrow.png',
//					    loadmoreText:'上拉加载更多'
//					    
//					    
//					})
//					
//					
//						contentScroll.scrollTo(0, maxY+50, 200);
//				
//					
//				
//				
//				
//				}, 2000);
				
				//vue
//				this.$emit('on-loadmore');
				
				
			 Observer.$emit('modify-data', 0);
				

			}
			
			
			
		})

  		
  	}
  	
  }
        
    
    
    
    
    
}

Page.propTypes = {
    id: PropTypes.string.isRequired,
  
    
    
}

