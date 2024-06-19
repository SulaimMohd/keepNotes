import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeNote,updateNote } from '../store/noteSlice'

function NoteCard({ id, title, dsicr, color }) {
  const updatedNote = useSelector(state=> state)
  console.log(updatedNote)
  const dispatch = useDispatch()
  const [isNotEditing, setIsEditing] = useState(true)
  const [updateContent, setUpdatedContent] = useState({
    id,
    title,
    dsicr,
    color
  })
  const handleSubmit = (e)=>{
    e.preventDefault()
    setIsEditing(preState => !preState)
    dispatch(updateNote({...updateContent}))
    
  }

  return (

    <form onSubmit={handleSubmit}>
      <div className=" bg-white shadow-md rounded-lg" style={{ backgroundColor: color }}>
        <div className="px-6 py-4">
          <div className="mb-4">
            <h2 className="text-xl font-bold mb-2">Title</h2>
            <input
              type="text"
              value={updateContent.title}
              disabled={isNotEditing}
              className="w-full px-3 py-2 border rounded"
              onChange={(e) => setUpdatedContent(preState => ({ ...preState, title: e.target.value }))}
              required
            />
          </div>
          <div className="mb-4">
            <h2 className="text-xl font-bold mb-2">Description</h2>
            <input
              type="text"
              value={updateContent.dsicr}
              disabled={isNotEditing}
              className="w-full px-3 py-2 border rounded"
              onChange={(e) => setUpdatedContent(preState => ({ ...preState, dsicr: e.target.value }))}
              required
            />
          </div>
          <div className="flex gap-2 justify-end">
            <button
              className="bg-red-500 text-white px-4 py-2 rounded"
              onClick={() => dispatch(removeNote({ id }))}
            >
              Delete
            </button>
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              {isNotEditing ? 'Edit' : 'Update'}
            </button>
          </div>
        </div>
      </div>
    </form>
  )
}

export default NoteCard

