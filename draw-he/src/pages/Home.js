import React, {Component} from 'react'
import { Route, Redirect} from 'react-router-dom'
import HomeBanner from '../components/home/HomeBanner'

import Ishit from '../components/home/Ishit'
import Upcoming from '../components/home/Upcoming'

import '../style/home.css'

export default class Home extends Component{
	//之所以能在constructor中取得history  因为home是使用路由的component来装载的
    constructor({history}){
        super();
        this.history = history;
    }

    render(){
        let Page = React.Page;
        return (
            <Page id="home" canloder={false}>
                
                	{/* 轮播图 */}
                	
                	<HomeBanner />
                	
                	{/* 正在热映 */}
                	
                	
                	 <Route  component={Ishit}/>
                	
                	
                	
               <div className="more">
                      <button className="more-move"  onClick={this.goMoviesPage.bind(this, 'nowplaying')} >更多热映电影</button>

                        <p>
                        <span className="come"> 即将上映</span>
                        </p>
                  </div>

                {/* 即将上映 */}
                
                   <Upcoming  handID = {this.goMoveDetail.bind(this)} />
 




                 <div className="more">
                  <button  className="more-move"  onClick={this.goMoviesPage.bind(this, 'comingsoon')}>更多即将上映电影</button>
                  
                  </div>
                
               
                
            </Page>
        )
    }






    goMoviesPage(flag){
        this.history.push('/movies/'+flag)
    }
    
   goMoveDetail(index){
   	
   	this.history.push('/movies/film/'+index)
   	
   }
    
}