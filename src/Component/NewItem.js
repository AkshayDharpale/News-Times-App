import React from 'react'

export default function NewItem(props) {
  return (
    <div>
        <div className="card my-3" >
            <img src={props.imageUrl? props.imageUrl: "https://storage.googleapis.com/afs-prod/media/a3e96ca5737f4a66942fd507bd06b0de/3000.jpeg"} 
            className="card-img-top" alt="..."/>
        <div className="card-body">
        
            <span className="position-absolute top-0 start-50 translate-middle badge rounded-pill bg-danger"
            /* style={{zIndex:1, left : "90%"}} */>{props.source}</span>

            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">{props.description}</p>
            <p className="class-text fw-bold"><small className="text-muted">By {props.author} , On {props.date}</small></p>
            <a rel="noreferrer" href= {props.newsUrl} target="_blank" className="btn btn-sm btn-primary">Read More</a>
        
        </div>
       </div>
       
      
    </div>
  )
}


