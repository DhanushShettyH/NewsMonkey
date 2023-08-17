import React from 'react'

function NewsItem(props) {
    let mystyle = props.stylemode;
    let dformate = new Date(props.date).toGMTString();
    return (
        <div>
            <div className={`card-${props.mode} p-3 position-relative `} style={{boxShadow:"5px 5px 10px gray",mystyle}}>
            <span className="position-absolute top-0 end-0 badge rounded-pill bg-danger" >{props.source}</span>
                <img src={props.imgurl? props.imgurl : "https://thumbs.dreamstime.com/z/news-newspapers-folded-stacked-word-wooden-block-puzzle-dice-concept-newspaper-media-press-release-42301371.jpg?w=992"}
                 className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title" style={mystyle}>{props.title}</h5>
                    <p className="card-text"style={mystyle}>{props.description}</p>
                    <p className="card-text"><small className="text-muted">By {props.author?props.author:"UnKnown"} on {dformate}</small></p>
                     <a rel="noreferrer" href={props.newurl} target='_blank' className="btn btn-dark" style={props.mode==="dark"?{filter:"invert(1)"}:{filter:"invert(0)"}}>Read more</a> {/* _blank it open in new tab */}
                </div>
            </div>

        </div>
    )
}

export default NewsItem
