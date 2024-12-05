import { useState , useMemo } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {useEffect}from 'react'
import './App.css'



export default function App() {

  const[notes,setNotes] = useState([])
  const[newNote,setNewNotes] = useState('')

const AddNewNote = ()=>{
  let newNoteObj = {
    id:notes.length +1 ,
    title: newNote
  }
  setNotes(prevNotes => [...prevNotes,newNoteObj])
  setNewNotes('')
}




  return (
    <div>

      <input type="text" onChange={e => setNewNotes(e.target.value)} />
      <br />
      <button onClick={AddNewNote} >Add New Note</button>
    <h2>All Notes : </h2>
    <ul className='noteHolder'>
      {notes.map(note =>(
        <li key={note.id} >{note.id}-{note.title}</li>
      ))}
    </ul >
    <h2>Notes include js : </h2>
    <ul className='noteHolder'>
    {useMemo(()=>{
      return notes.filter(note =>{
        return note.title.toLowerCase().includes('js')}).map(
        note => ( 
          <li key={ note.id}> {notes.length+1 - note.id} - {note.title} </li>
        )
      )
    },[notes])}
    </ul>
    </div>
  )
}
