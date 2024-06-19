import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  notes: JSON.parse(localStorage.getItem('noteList')) || []
}

const noteSlice = createSlice({
  name:'noteSlice',
  initialState,
  reducers:{
    addNote(state, action){
      console.log(action.payload)
      state.notes.push(action.payload)
      localStorage.setItem('noteList', JSON.stringify(state.notes))
    },
    removeNote(state, action){
      state.notes = state.notes.filter(note=> note.id !== action.payload.id)
      localStorage.setItem('noteList', JSON.stringify(state.notes))
    },
    updateNote(state, action){
      state.notes = state.notes.map(note => {
        if(action.payload.id === note.id){
          return {...action.payload}
        }else{
          return note
        }
      })

      localStorage.setItem('noteList', JSON.stringify(state.notes))
    },
    clearNotes(state, action){
      state.notes = []
      localStorage.removeItem('noteList')
      console.log('Notes have been cleared')
    }
  }
})

export const { addNote, clearNotes, removeNote, updateNote } = noteSlice.actions
export default noteSlice.reducer