import React, {Component} from 'react'


import {getAboutData} from '../../services/home-service'

import {timestampToTime} from '../../util/format'

export default class Upcoming extends Component{
	
	constructor(){
        super();


        this.state = {
          aboutData:[]
        }
    }
	
	render(){
		 let {aboutData} = this.state;
		 
		return (
           <div  className="about-are">
               <ul id="at-once">
                    { aboutData.map((item,index)=>{

                        return ( 
                            <li key={index} onClick={this.goDetailID.bind(this, item)}>   
                                  <img src={item.cover.origin}/>  
                                 
                                <div className="stand">
                                 
                                 <p>{item.name} 
                                 <span>{timestampToTime(item.premiereAt)}</span>
                                 </p>
                                </div>
                            
                            </li>
                        )
                    })
 
                    }

                   </ul>
            </div>
			
			
		)
	}
	
	
	
	 componentDidMount(){
	 	  
	 	getAboutData().then(result=>{
	 		
	 		 this.setState({aboutData:result})
	 	
	 	})
	 	

	 	
	 	
	 }
	 
	 
	 goDetailID(item){
		let id = item.id;
	
		this.props.handID(id);
	}
	
	
	
	
}