import React,{Component} from 'react'
import {HashRouter as Router, Route, Redirect} from 'react-router-dom'


import Home from './pages/Home'
import Movies from './pages/Movies'
import Cinema from './pages/Cinema'
import City from './pages/City'

import CinemaDetails from './components/cinema/CinemaDetails'

import AppHeader from './common/AppHeader'
import SideNav from './common/SideNav'



export default class Page extends  Component{
	constructor(){
        super();
        this.state = {
            showSideNav: false
        }
    }
	
	
	render(){
		  let {showSideNav} = this.state;
		return (
			<Router>
		
			<div id="wrap">
			   
			
			<Route path="/" exact render={()=>{
                    return <Redirect to="/home"/>
                }}/>
                
			     <Route path="/home" component={Home}/>
                <Route path="/movies" component={Movies}/>
                <Route path="/cinema" component={Cinema}/>
			 
			   <Route path="/cinema/film/:id" component={CinemaDetails}/>
			  
			   <Route exact  path="/city"  component={City}  />
			   
			   <AppHeader MenuTap={this.handleSideNav.bind(this)}></AppHeader>
			   <SideNav onChange={this.handleSideNav.bind(this)}      isActive={showSideNav}></SideNav>
			 
			
			</div>
			
			
			
			
			</Router>
		)
	}
	
	
    handleSideNav(){//切换侧边栏
        this.setState({showSideNav: !this.state.showSideNav});
    }
	
	
}
