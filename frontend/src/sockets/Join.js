import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../sockets/Chat.js'

const Join = () => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  const [toggleForm, setToggleForm] = useState(false);


  return (
    <div>
      <div>
        <button className="open-button" onClick={() => setToggleForm(true)}>Chat</button>
        <div className={toggleForm ? "chat-popup form-container" : "chat-popdown"}>
          <h1>Join</h1>
          <div>
            <input
              placeholder="Name"
              type="text"
              onChange={e => setName(e.target.value)} />
          </div>
          <div>
            <input
              placeholder="Room"
              type="text"
              onChange={e => setRoom(e.target.value)} />
          </div>
          <Link
            onClick={e => (!name || !room) ? e.preventDefault() : null}
            to={`/?name=${name}&room=${room}`}>
            <button className="signin-button" type="submit">Sign In</button>
          </Link>
          <button className="btn cancel" onClick={() => setToggleForm(false)}>Close</button>
        </div>
        <button className="btn cancel" onClick={() => setToggleForm(false)}>Close</button>
      </div>
    </div >



  )
}

export default Join
