import React from 'react'
import ReactDOM from 'react-dom'

//全局组件--引入了就执行
import Page from './common/Page'
React.Page = Page




import App from './App'

ReactDOM.render(
    <App/>,
    document.querySelector("#app")
)




