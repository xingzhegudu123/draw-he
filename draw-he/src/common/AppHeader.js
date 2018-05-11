import React,{Component} from 'react'
import store from '../store'
import {Link,NavLink} from 'react-router-dom'

export default class AppHeader extends  Component{

   constructor(){
        super();
        this.state = {
            name: store.getState().username,
            psd: store.getState().password
        }
    }
    
	render(){
		
		return (
			<header className="app-header">
			
			<span className="mune" onClick={this.headerBtnAction.bind(this)}><i className="iconfont tit">&#xe62c; </i></span>
             <h1 className="title" >{this.state.name}</h1>
             <Link className="location"  to="/city" onClick={this.showSelectCity.bind(this)}>深圳</Link>
             <span  className="mune2"><i className="iconfont tit2">&#xe610; </i> </span>
			
			</header>
		)
	}
	
	 headerBtnAction(){
        this.props.MenuTap();
    }
	
	
	showSelectCity(){
		  //显示选择城市
		   store.dispatch({
		   	
              type: 'modify-name',
              value: '选择城市'
          })
		  
	}
	
	
	
	
	
	
	
	componentDidMount(){
            // 监听全局状态的变化
            store.subscribe(()=>{
//              console.log('AppHeader组件监听到了全局状态的变化');
    
                this.setState({
                    name: store.getState().username,
                    psd: store.getState().password
                });
                
            })
        }

}
