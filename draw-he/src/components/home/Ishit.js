import React, {Component} from 'react'


import {getBeingData} from '../../services/home-service'
export default class Ishit extends Component{
	
	constructor({history}){
        super();

       this.history=history;
        this.state = {
          beingData:[]
        }
    }
	
	render(){
		 let {beingData} = this.state;
		
		return (
           <div  className="being-are">
                     <ul id="proced">
                    
                     { 
                     	beingData.map((item,index)=>{

                        return (
                            <li key={index} onClick={this.goMoveDetail.bind(this, item)}>   
                            
                            <img src={item.cover.origin}/>  
                            <div className="base">
                              <p  className="titleBal">{item.name}</p>
                               <p  className="description">{item.cinemaCount}家影院上映 {item.watchCount}人购票</p>
                                <span className="score">{item.grade} </span>
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
	 	  
	 	getBeingData().then(result=>{
	 		
	 		 this.setState({beingData:result})

	 	})
	 	

	 	
	 	
	 }
	
	goMoveDetail(item){
		let id = item.id;
		this.history.push('/movies/film/'+id)
	}
	
	
}