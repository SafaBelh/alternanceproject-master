import React from 'react'
import Avatar from "../../assets/icons/avatar.jpg"

const NoteCard = ({Name , Admin , Note}) => {
  return (
    <div className='note-wrapper'>
        <div className="avatar">
            <img src={Avatar} />
        </div>
        <div className="note-text">
            <div className="applicant-name">{Name}</div>
            <div className="text-note">{Note}</div>
            <div className="noted-by">Noted By <span>{Admin}</span></div>
        </div>

    </div>
  )
}

export default NoteCard