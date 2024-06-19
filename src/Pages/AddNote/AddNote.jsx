import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addNote } from '../../store/noteSlice'
import { v4 as uuid } from 'uuid'

function AddNote() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [state, setState] = useState({
    title: '',
    dsicr: '',
    color: '#ffffff'
  })

  const handleSave = (e) => {
    e.preventDefault()
    localStorage.removeItem('noteList')
    dispatch(addNote({ id: uuid(), ...state }))
    console.log(state)
    navigate('/')
    setState({
      title: '',
      dsicr: '',
      color: '#ffffff'
    })
  }

  return (
    <form onSubmit={handleSave} className="max-w-lg mx-auto bg-white shadow-md rounded-lg p-6">
      <div className="flex flex-col space-y-4">
        <div className="flex flex-col">
          <label htmlFor="title" className="text-lg font-semibold mb-2">Title</label>
          <input
            name="title"
            id="title"
            className="border border-blue-600 px-3 py-2 rounded"
            type="text"
            value={state.title}
            required
            onChange={(e) => setState(preState => ({ ...preState, title: e.target.value }))}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="dsicr" className="text-lg font-semibold mb-2">Description</label>
          <input
            name="dsicr"
            id="dsicr"
            className="border border-blue-600 px-3 py-2 rounded"
            type="text"
            value={state.dsicr}
            required
            onChange={(e) => setState(preState => ({ ...preState, dsicr: e.target.value }))}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="color" className="text-lg font-semibold mb-2">Color</label>
          <input
            name="color"
            id="color"
            className="border border-blue-600 px-3 py-2 rounded"
            type="color"
            value={state.color}
            onChange={(e) => setState(preState => ({ ...preState, color: e.target.value }))}
          />
        </div>
        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded shadow hover:bg-blue-700"
          >
            Save
          </button>
        </div>
      </div>
    </form>
  )
}

export default AddNote
