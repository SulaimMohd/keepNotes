import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addNote, clearNotes } from '../../store/noteSlice'
import NoteCard from '../../Components/noteCard'

function NoteList() {
  const [noteList, setNoteList] = useState([])
  const notes = useSelector(state => state.noteReducer.notes)
  
  useEffect(() => {
    setNoteList(notes)
  }, [notes])
  
  const navigate = useNavigate()
  const dispatch = useDispatch()
  
  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <button 
          onClick={() => navigate('/addNote')} 
          className="bg-blue-600 text-white px-4 py-2 rounded shadow hover:bg-blue-700"
        >
          Create new Note
        </button>
        <button 
          onClick={() => dispatch(clearNotes())} 
          className="bg-red-600 text-white px-4 py-2 rounded shadow hover:bg-red-700"
        >
          Clear Notes
        </button>
      </div>
      
      <div className="grid gap-6 grid-cols-3">
        {noteList.length > 0 ? noteList.map(note => (
          <NoteCard {...note} key={note.id} />
        )) : <h1 className="text-xl font-semibold text-center col-span-full mt-10">Empty!!</h1>}
      </div>
    </div>
  )
}

export default NoteList

