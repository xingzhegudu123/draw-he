import axios from 'axios'
import { HOME_BANNER_URL,HOME_BEING, HOME_ABOUT} from '../api'

//影片页
import {ADD_BEGIN,COMING_SOON_URL, FILM_DETAIL} from '../api'

//影院页
import {CINEMA_URL} from '../api'

//城市定位页
import {LOCATION_URL} from '../api'
   

//首页--轮播图
export  function getHomeBannerData(){
    return new Promise((resolve, reject)=>{
        
        axios.get(HOME_BANNER_URL)
        .then(response=>{
            let data = response.data.data.billboards;
            resolve(data);
        })


    })
}


//首页--正在热映
export function getBeingData(){
    return new Promise((resolve, reject)=>{
        
        axios.get(HOME_BEING)
        .then(response=>{
            let data = response.data.data.films;
            resolve(data);
        })


    })
}

//首页--即将上映
export function getAboutData(){
    return new Promise((resolve, reject)=>{
        
        axios.get(HOME_ABOUT)
        .then(response=>{
            let data = response.data.data.films;
            resolve(data);
        })


    })
}







//影片页  --正在热映



export function getBeginDatas(options){
    return new Promise((resolve, reject)=>{
        
        axios.get(ADD_BEGIN,{
        	params: options
        })
        .then(response=>{
            let data = response.data.data.films;
            resolve(data);
        })


    })
}



//即将上映

export function getCommingSoonDatas(options){
    return new Promise((resolve, reject)=>{
        
        axios.get(COMING_SOON_URL,{
        	params: options
        })
        .then(response=>{
            let data = response.data.data.films;
            resolve(data);
        })


    })
}




//影片--详情页
export function getDetailsData(showUrl){
    return new Promise((resolve, reject)=>{
        
        axios.get(showUrl)
        .then(response=>{
            let data = response.data.data.film;
            resolve(data);
        })


    })
}


//影院数据
export function getCinemaData(){
    return new Promise((resolve, reject)=>{
        
        axios.get(CINEMA_URL)
        .then(response=>{
            // console.log(response.data.data.cinemas); //所有影院数据
            let cinemas = response.data.data.cinemas;
            let cinemasMap = {};
            cinemas.map(cinema=>{ //得到每个对象
                // console.log(cinema.district.name);
                let name = cinema.district.name;
                if(!cinemasMap[name]){
                    cinemasMap[name] = [];
                }
                cinemasMap[name].push(cinema);
            })


            resolve(cinemasMap);
        })

    })
}



//影院详情页数据--
export function getCinemaDetails(showUrl){
    return new Promise((resolve, reject)=>{
        
        axios.get(showUrl)
        .then(response=>{
            let data = response.data.data.cinema;
            resolve(data);
        })


    })
}



//请求城市定位数据--
export  function getLocation(){
    return new Promise((resolve, reject)=>{
        
        axios.get(LOCATION_URL)
        .then(response=>{
           
        
            let cities = response.data.data.cities;
           //按字母分类
		    let obj = {};
		    cities.map(item=>{
		        let letter = item.pinyin[0];
		        if(!obj[letter]){
		            obj[letter] = [];
		        }
		        obj[letter].push(item);
		    })
		  
//        console.log(obj);
    //排序
    //获得所有key值
      let keys = Object.keys(obj);
    //对keys排序
    //选择排序
       for(let i = 0; i < keys.length-1; i++){
        let k = i;
        for(let j = i+1; j< keys.length;j++){
            if(keys[k] > keys[j]){
                k = j;
            }
        }
        let temp = keys[i];
        keys[i] = keys[k];
        keys[k] = temp;
    }
//      console.log(keys);
      //按照排序取出values值
    let newList = keys.map(letter=>{
        return {
            letter,
            list: obj[letter]
        }
    })
// console.log(newList);
            resolve(newList);

            //将citiesMap转为数组，
            // 按字母序排序
        })

    })
}