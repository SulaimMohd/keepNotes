import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import NoteList from './Pages/NoteList/NoteList.jsx'
import AddNote from './Pages/AddNote/AddNote.jsx'
import store from './store/store.js'
import { Provider } from 'react-redux'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='/home' element={<NoteList />} />
          <Route path='/addNote' element={<AddNote />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
)
