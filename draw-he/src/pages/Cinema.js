import React, {Component} from 'react'

import '../style/movie.css'
 
import {getCinemaData} from '../services/home-service'


export default class Cinema extends Component{
    
    constructor({history}){

        super();
      this.history = history;
        this.state={ 
            unfold:false,
            showIndex:-1,
            CinemaDatas:{}
            

        }
    }
 
    
    render(){ 
       let {CinemaDatas,showIndex,unfold} = this.state;
       let coke = ( <span className="coke"> 可乐爆米花</span> );
         let Page = React.Page;
        
       let arr = [];
       for(var address in CinemaDatas){
          arr.push({bool:false,address});
       }
       
//       console.log(arr);
       
       
        return (
            <Page id="cinema" canloder={false} >
           
                <ul className="area" >
            {
            	
            
          arr.map((item,index)=>{
          	return  (
         		    <li className="area-item"  key={index}   >
             
                          <p  className="wish"  onClick={this.handleSpread.bind(this,index)} > {item.address}     </p>
                         
                      
                       {
                        showIndex ==index &&  unfold  &&  <ul   className="movie">
                                    {
                                   CinemaDatas[item.address].map((item1,j)=>{
                                     return (
                                       <li key={j}   onClick={this.goCinemaPage.bind(this,  item1.id)}       >
                                        
                                         <p  className="late1">{item1.name}  <span > ></span> </p>
                                         <p  className="late2"> { coke}      </p>
                                         <p  className="late3">   {item1.address}            </p>
                                         <p  className="late4">   距离未知             </p>
                                      
                                         
                                        
                                         
                                         </li>
                                     )

                                   })
                                    }    
                                  
        
                                        </ul>
        
                          }
                      
   
     
                     </li>
           
          	)
         })
                        
             

            }

       
                </ul>

            </Page>
        )
    }


  //点击展开收起
    handleSpread(index){
    	
	
       this.setState({showIndex:index});
      this.setState({unfold:!this.state.unfold});
     
    }






    //得到影院数据
   componentDidMount(){
       

        getCinemaData().then(result=>{
      
         this.setState({CinemaDatas:result});

        })
            

    }


// 点击进入影院详情
 //点击哪个就得到哪个对象的id
goCinemaPage(index){
     let name = index;
//    console.log(index);
   this.history.push('/cinema/film/'+name);//使用路由的路径传值          
   

}






}