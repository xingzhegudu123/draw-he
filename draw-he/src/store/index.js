import { createStore } from 'redux'

// 全局初始状态
let initialState = {
    username: '卖座电影',
    password: '123456'
}

// 声明reducer函数
//参数1：全局状态
// 参数2：执行修改状态的事件对象
// 作用：修改全局状态的函数，根据事件进行修改state
// 返回值：全局使用的新的state
let reducer = function(state, action){

    console.log('reducer执行了');

//  console.log('state:');
//  console.log(state);
//  console.log('action:');
//  console.log(action);

    if(action.type == '@@redux/INIT'){
        // 对全局数据进行初始化
        var res = sessionStorage.getItem('test');
          
         state =  Object.assign({}, initialState, {username:res});//刷新时改变初始值

        return state;
    }

    if(action.type == 'modify-name'){
    
         state = Object.assign({}, state, {username: action.value});
        return state;
    }

}

// 创建管理全局状态的仓库
const store = createStore(reducer);

export default store;

