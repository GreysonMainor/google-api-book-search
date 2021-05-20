import React from 'react';

function ResultListItem(props) {
    const {title, authors, image, link, description, saveGoogleBook} = props
    return (
        <div>
            <div className="card">
                <h5 className="card-header">Featured</h5>
                <div className="card-body">
                <img src={image} style={{maxWidth: "100px"}}/>
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text" >{description}</p>
                    <p>{authors}</p>
                    <a href={link} target="_blank" className="btn btn-primary" style={{marginRight: "6px"}}>View Book</a>
                    <button onClick={saveGoogleBook.bind(this, props)} className="btn">Save</button>
                </div>
            </div>
        </div>
    )
}
export default ResultListItem;