
import React from "react"
import { useState } from "react";

const EventHandling = () => {
  
    let likes = 100;

    const [upvotes, setUpvotes] = useState(0);
  
    const myFunction = () => {
    console.log("Button Clicked")
  }

  return (
    <div className="container">
      <h1>Event Handling</h1>
      <hr />

      <h2>Click Event</h2>
      <button
        className="btn btn-primary"
        onClick={() => {
          alert("Nice, Clicked that button")
        }}>
        Click Event
      </button>

      <button className="btn btn-success" onClick={myFunction}>
        Another Click Event
      </button>

      <input
        className="form-control mt-5"
        type="text"
        onChange={(e) => {
          console.log(e.target.value)
        }}
      />

      <img
        src="logo512.png"
        alt=""
        onMouseMove={() => {
          console.log("🎉")
        }}
      />

      <div className="card mt-5 w-50">
        <div className="card-body">
          <img
            className="img-fluid"
            src="https://play-lh.googleusercontent.com/-Qwa2qxMguL71aOUhqhHar9hfhtJjqTCvNS3aK7BpfYiPqgzCalPthiXnDbKYYIs9pg"
            alt=""
          />

          <div className="mt-4">
            <span
              onClick={() => {
                likes++;
                console.log(likes);
              }}>
              <i class="fas fa-heart text-danger fa-2x"></i>
              &nbsp;&nbsp;&nbsp; <span className="h2">{likes}</span>
            </span>
          </div>
        </div>
      </div>

      <div className="card mt-5 w-50">
        <div className="card-body">
          <img
            className="img-fluid"
            src="https://play-lh.googleusercontent.com/-Qwa2qxMguL71aOUhqhHar9hfhtJjqTCvNS3aK7BpfYiPqgzCalPthiXnDbKYYIs9pg"
            alt=""
          />

          <div className="mt-4">
            <span
              onClick={() => {
                setUpvotes( upvotes + 1 );
                console.log(upvotes);
              }}>
              <i class="fas fa-heart text-danger fa-2x"></i>
              &nbsp;&nbsp;&nbsp; <span className="h2">{upvotes}</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EventHandling