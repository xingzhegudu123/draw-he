import React,{Component} from 'react'
import {Route, Redirect,Link, NavLink} from 'react-router-dom'

import NowPlaying from '../components/movies/NowPlaying'
import ComingSoon from '../components/movies/ComingSoon'

import moveDetail from '../components/movies/moveDetail'

import '../style/nowplaying.css'

export default class Movies extends  Component{
	 constructor({history}){
        super();
        this.history = history;
        this.state = {
            page:''
        }
    }

	
	
	render(){
		  let Page = React.Page;
          let {page} = this.state;
		return (
			<div>
			<Page id="movies" canloder={true} >
			
		  
		    <nav className="tabs">
           
                <NavLink className="tab" to="/movies/nowplaying">正在热映</NavLink>
                <NavLink    className="tab" to="/movies/comingsoon">即将上映</NavLink>
               
             </nav> 
  
                <Route exact path="/movies" render={()=>{
                    return <Redirect to="/movies/nowplaying"/>
                }}/>
                
                {/*先得识别movies  因此路径前得加movies*/}
                <Route path="/movies/nowplaying"   render={({history})=>{                
                 return <NowPlaying  history={history}  />
                }} />
                
                <Route path="/movies/comingsoon" render={({history})=>{                
                 return <ComingSoon  history={history}/>
                }} />
			
		
			 
			</Page>
			
			 <Route path="/movies/film/:id" component={moveDetail}  />
			</div>
		) 
	}
	
	

}
