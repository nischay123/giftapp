import React from 'react'

export default function Card(props) {
    console.log(props)
    return (
        <div className="card m-4 p-4"  style={{ width: "150px", backgroundColor: '#d6d4d4' ,display: "inline-block" , margin:'1em' , padding:'1em'} }>
        <img classNameName="card-img-top" src="..." alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">{props.n}</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
      </div>

    )
}
