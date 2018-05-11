import React, {Component} from 'react'

import {getCinemaDetails} from '../../services/home-service'
import '../../style/cinemaDatail.css'

import store from '../../store'
export default class CinemaDetails extends Component{
    
    constructor({match}){
        super();
        let aim='/v4/api/cinema/';
        let showUrls= aim + (match.params.id).toString();

      this.state={
           cinemaUrl:showUrls,
           CinemaDetailsData:[],
           ratio:0,
           revive:''

      }

    //  console.log(match.params.name); 取得当前页面id拼接路径   
    }
 
    
   
    //用iconfont
    // <a  class="come1"  href="#"><i class="iconfont">&#xe76e;</i>账号</a>
    render(){ 
         let {CinemaDetailsData,revive} = this.state;
          let Page = React.Page;
        return (
            <Page id="cinema-detail" >

                <div className="img-responsive">
                  
                  <img src={'https://static.m.maizuo.com/v4/static/app/asset/66461d1a02a9eaa64876c90952c42aed.png'} />
                
                
                
                
                </div>
            
                <div className="row-detailbox">
                   <div className="row-bot1">
                        <span>    <i className="iconfont ic1">&#xe640;</i>          </span>
                       <div className="row-center1">
                          <p className="seat1">订座票</p>
                          <p  className="seat2">选好场次及座位，到影院自助取票</p>
                        
                       </div>
                       <span className="piao">立即订票</span>

                   </div>
             
                
                </div>


  <div className="row-detailbox">
  
                   <div className="row-bot1">
                        <span>    <i className="iconfont ic2">&#xe655;</i>          </span>
                       <div className="row-center1">
                          <p className="seat1">通蜕票</p>
                          <p  className="seat2">有效期内到影院退换影票</p>
                         
                       </div>
                    
                       <span className="piao">立即订票</span>
                   </div>
             
                
                </div>



<div className="row-detailbox3">
                   <div className="row-bot1">
                        <span>    <i className="iconfont ic3">&#xe625;</i>          </span>
                       <div className="row-center1">
                          <p className="seat1">小卖品</p>
                          <p  className="seat2"></p>
                        
                       </div>
                       <span className="piao">购买</span>

                   </div>
             
                
                </div>



                                
<div className="row-detailbox4">
                   <div className="row-bot4">
                        <span>    <i className="iconfont ic4">&#xe61e; </i>          </span>
                       <div className="row-center4">
                          <p className="seat4">{CinemaDetailsData.address}</p>
                          <p  className="seay4"></p>
                        
                       </div>
                     

                   </div>
             
                
                </div>


                                
<div className="row-detailbox4">
                   <div className="row-bot1">
                        <span>    <i className="iconfont ic5">&#xe627;</i>          </span>
                       <div className="row-center1">
                          <p className="seat1">{CinemaDetailsData.telephones}</p>
                          <p  className="seat2"></p>
                        
                       </div>
                      

                   </div>
             
                
                </div>

             
             
              <div  className="separation">
              
              </div>
             
             


               <div className="park">
                   <div  className="top">
                       <span onClick = {this.tabAction.bind(this,"取票","0")}>
                     <p>  <i className="iconfont ic6">&#xe615;</i> </p>
                      <p className="out">取票</p>
                       </span>
                       <span onClick = {this.tabAction.bind(this,"3D","0")}>
                            <p>  <i className="iconfont ic6">&#xe609;</i> </p>
                            <p className="out">3D</p>
                       </span>
                       <span onClick = {this.tabAction.bind(this,"停车","0")}>
                            <p>  <i className="iconfont ic6">&#xe606;</i> </p>
                            <p className="out">停车</p>
                       </span>
                       <span onClick = {this.tabAction.bind(this,"优惠","0")}>
                            <p>  <i className="iconfont ic6">&#xe617;</i> </p>
                            <p className="out">优惠</p>
                       </span>
                       <span onClick = {this.tabAction.bind(this,"公交","地铁")}>
                            <p>  <i className="iconfont ic6">&#xe635;</i> </p>
                            <p className="out">交通</p>
                       </span>
                   </div>
               
                   <div  className="bot">
                        <p>{revive}</p>
                   </div>
               
               
               
               
               
               
               
               
               </div>










            
            </Page>
        )
    }






    // 得到影院详情页数据
componentDidMount(){
          
        
 getCinemaDetails(this.state.cinemaUrl)
        .then(result=>{
      
         
            this.setState({CinemaDetailsData:result})
            // 请求到数据设置初始值 
            if(this.state.CinemaDetailsData.services[0].name=="取票"){
             this.setState({revive:this.state.CinemaDetailsData.services[0].description});    
            }else{
                this.setState({revive:'暂无信息'});   
            }


          store.dispatch({
              type: 'modify-name',
              value: this.state.CinemaDetailsData.name
          })
          
        }) 
              
    
    
         
       



}
tabAction(rex1,rex2){
    let cont = this.state.CinemaDetailsData.services;
    
    var i ;
    for( i = 0;i<cont.length;i++){
         if(rex1==cont[i].name||rex2==cont[i].name){

          this.setState({revive:cont[i].description});    
   
             return;
         }

    }
      if(i=cont.length){
          this.setState({revive:'暂无信息'})
      }        


    // console.log( this.state.CinemaDetailsData.services); 为何不打印   


}











}