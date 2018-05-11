import React, {Component} from 'react'


import {getLocation} from '../services/home-service'
import '../style/city.css'


export default class City extends Component{
    
    constructor(){
        super();

        this.state={
      
            cityData:[],
            
           
        }
    }
 
    
    render(){ 
        let {cityData}=this.state;

        return (
         
           
           <div className="city" >
              
              <div className="to-linght">
              <p className="locus"> <span>GPS定位你所在的城市</span></p>
              <p className="gps"><span>深圳</span> </p>
              </div>
             
              
              <div className="to-linght2">
              <p className="door"> <span>热门城市</span></p>
              <p className="hot"><span>北京</span><span>上海</span><span>广州</span><span>深圳</span> </p>
              </div>

             
             <div className="letter">
              <p className="sort"> <span>按字母排序</span></p>
                <ul  className="eng">
                    {cityData.map((item,index)=>{
                        return (<li key={index}>{item.letter}</li>)

                    })}
                </ul>




              </div>


              {/*  大盒子 */}
                <div className="look">
                    <ul className="look-box">

                      {
                         cityData.map((item,index)=>{
                              return (
                               <li key={index}>

                               <p className="head"> <span> {item.letter}</span>  </p>
                             
                              	 <ul className="box2">
                              	  
                              	  {
                              	   	 item.list.map((cityItem,j)=>{
                              	     	 return (  
                              	     	 	
                              	     	 	<li key={j}>{cityItem.name}  </li>
                              	     	 
                              	     	 )
                              	     })
                              	  
                              	  }
                     
                              	 </ul>
                             
                            

                               </li>

                              )

                          })
                      }



                 
                    

                       
                        </ul>


                </div>


           </div>

          
        )
    }


// 得到定位数据
   

componentDidMount(){
          

    getLocation()
    .then(result=>{

        this.setState({cityData:result});


        })
   
}


}

