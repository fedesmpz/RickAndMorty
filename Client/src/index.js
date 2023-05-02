import React from 'react'
import ReactDOM from 'react-dom'
import indexStyle from './index.module.css'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import store from './redux/store'
import { Provider } from 'react-redux'



const root = ReactDOM.createRoot(document.getElementById('root'))


root.render(

  <Provider store={store}>
    <BrowserRouter>
          <video src="https://thumbs.gfycat.com/BrilliantSlimLeafhopper-mobile.mp4" autoplay="true" muted="true" loop="true" poster="https://   carontestudio.com/img/contacto.jpg"></video>
        <App />
    </BrowserRouter>
  </Provider>

)
