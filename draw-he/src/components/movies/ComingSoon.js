import React, {Component} from 'react'


import {getCommingSoonDatas} from '../../services/home-service'


import Observer from '../../center/observer'

export default class NowPlaying extends Component{
	 constructor({history}){
        super();

        this.history = history;
        this.state={
          comingSoonData:[],
        
        }
     	
        
    }
	 
	 
	 render(){
	 	let {comingSoonData}=this.state;
	 

	 	 return (
	 	 	<div className="coming-soon" >
	 	 	  
	 	 	  <div className="draw">
                   <ul className="draw-large" >
                      {
                      comingSoonData.map((item,index)=>{
                          return (
                              <li key={index}  onClick={this.showDetail.bind(this,index)}>
                              <img src={item.cover.origin}/>  
                              
                              <div className="brief" >
                                 <p>{item.name}  <span className="mark" >{item.grade} > </span>    </p>
                                 <p  className="buy">{item.intro}    </p>
                                 
                                 <p className="buy">
                                 <span className="buy-in1">{item.cinemaCount}</span> 家影院上映
                                 <span className="buy-in2">{item.watchCount}</span>人购票 
                                 </p>

                              </div>


                              
                              </li>
                          )



                      })

                      }


                   </ul>


              </div>


	 	 	</div>
	 	 	
	 	 	
	 	 )
	 	 	
	 	 
	 }
	 
	   componentWillMount(){
	      

           
	 }
	 
	 
	 
  componentDidMount(){

     	let i = 1;
	      	
           Observer.$on('modify-data', (y)=>{
           	
           	if(y==0){
           		  i++;
           		  
           		 this.requestData(i);
           		  this.forceUpdate();
           	}
     
    })


      // 请求正在热映数据
    
       this.requestData(i);
        
    }
	 
	 
	 
	  requestData(j){
	  
	  	
	  	let option={
	  		page:j,
	  		count:7
	  	}
	  	
      	getCommingSoonDatas(option).then(result=>{
          
                
              	this.setState({comingSoonData: [...this.state.comingSoonData, ...result]}); //两数组拼接 每次请求7条数据
          })
      
	  
	  }
	 
	 
	
    showDetail(index){
        let itemBeginData =   this.state.comingSoonData[index];
        let name = itemBeginData.id;
     
              this.props.history.push('/movies/film/'+name);//使用路由的路径传值
      
      /*2 //使用路由的location.state传值
       this.history.push({
           pathname:'./one/show',
           state:{
               name
           }
   
       });//等价于link组件的to属性     */
   
   
   
   
   
     }
	
}
