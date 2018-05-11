import React, {Component} from 'react'
import {Link,NavLink} from 'react-router-dom'


import '../../style/filmdetail.css'
import store from '../../store'


import {getDetailsData} from '../../services/home-service'
import {timestampToTime} from '../../util/format'

export default class moveDetail extends Component{
    
    constructor({match,location}){
        super();
        let aim='/v4/api/film/';
        let showUrls= aim + (match.params.id).toString();

        this.state={
            id:match.params.id,
           
            showUrl:showUrls,  //请求路径
            detailData:{}  //详情页数据

        }
      
      

         
    }
 
    
    render(){ 
         let  {detailData} = this.state;
 

//     
        return (
            <div className="detail" >
               
              {   
                  <div className="detail-film">
                   <img src = {'https://pic.maizuo.com/usr/movie/d51a92aa4c18aff57cc0b3425ac96d2e.jpg'} />
                     
                    <p className="introduce-film"><span></span>影片简介</p>
                
                <div className = "introduce">
                     
                     <p>导演: {detailData.director} </p>
                       {/* {
                           detailData.actors.map((item,index)=>{
                            return ( <p>item.name</p>)  
                           })
                       } */}


                     <p>地区语言：{detailData.nation}</p>
                     <p>类型:{detailData.category}</p>
                     <p>上映日期:{timestampToTime(detailData.premiereAt)}</p>
                      <p>{detailData.synopsis} </p>
                
                 </div>
                   
                     <span className="ticket">立即购票</span>


                    </div>

              }





            </div>
        )
    }



    componentDidMount(){
          
            // 请求详情页数据
            getDetailsData(this.state.showUrl)
            .then(result=>{
       
                 this.setState({detailData:result});
           
                
                //异步操作请求完数据--改变全局数据
               store.dispatch({
                  type: 'modify-name',
                  value: this.state.detailData.name
              })
           
            
            
            
            })
                  
           




    }

}