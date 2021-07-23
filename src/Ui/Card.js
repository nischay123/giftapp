import React from 'react'

export default function Card(props) {
    console.log(props)
    return (
        <div className="col-3">
        <div className="card m-4 p-4"  style={{  backgroundColor: '#d6d4d4'  } }>
        {/* <img classNameName="card-img-top" src="..." alt="Card image cap" /> */}
        <div className="card-body">
          <h5 className="card-title text-center">{props.n}</h5>
          <p className="card-text">{props.des}</p>
          <small>Price</small>: {props.p}$

        </div>
        <button type="button" class="btn mb-2 btn-success " onClick={ ()=>props.handleEdit(props.id)}>Edit</button>
        <button type="button" class="btn btn-outline-danger " onClick={ ()=>props.handleDelete(props.id)}>delete</button>

      </div>
      </div>

    )
}
