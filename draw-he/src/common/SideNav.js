import React,{Component} from 'react'
import PropTypes from 'prop-types'
import store from '../store'

import {Link} from 'react-router-dom'

export default class SideNav extends  Component{
	 constructor(){
        super();
        
         
     
        this.state = {
            navData: [
                {name:'首页', path:'/home'},
                {name:'电影', path:'/movies'},
                {name:'影院', path:'/cinema'},
                {name:'商城', path:'/shopcity'},
                {name:'我的', path:'/mine'},
                {name:'卖座卡', path:'/drapcard'}
            ],
        
        }
        
       
    }
	 
	
	
	render(){
		let {navData} = this.state;
		let {isActive} = this.props;  //接收header传给app再传给SideNav的true或false
		 let navClass = 'side-wrap'+(isActive?' active':'');
		return (
			<div className={navClass}>
			
			 
				<div className="cover"></div>
			 <div className="big-cover" onClick={this.changePage.bind(this)}></div>
			
			<nav className="side-nav">
			      <li className="side-item">
       		    
       		    {
                        navData.map((item, index)=>{
                            return (
                                <Link key={index} to={item.path} name={item.name} onClick={this.changePage.bind(this)}>
                                    {item.name} <span> > </span>
                                </Link>
                            )
                        })
                }
       		    
       		    
			  </li>
			</nav>
			
		
			
			</div>
		)
	}
	
	
	
	changePage(event){
		let name = event.target.name;

        this.props.onChange();
        
      this.setState({name: name});//没触发store前设置
     sessionStorage.setItem('test', name);

          store.dispatch({
              type: 'modify-name',
              value: name
          })
        
        
        
        
    }
	
	
}


//声明接收的外部传来的active毕川	
SideNav.propTypes = {
    isActive: PropTypes.bool.isRequired
}