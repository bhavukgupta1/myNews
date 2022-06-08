import React from 'react'

export default function NewsDetail(props) {
  // let { title, source, desc, imageUrl, newsUrl, author, publishedAt } = props;

  
    return (
      <div>

        <div className="border-info card my-2"  >
          <span class="position-absolute top-0  translate-middle badge rounded-pill bg-danger" style={{ left: "90%", zIndex: "1" }}>
            {props.source}
          </span>

          <img src={props.imageUrl} class="card-img-top" alt="..." />

          <div className="card-body">
            <h5 className="card-title"> {props.title}  </h5>
            <p Name="card-text">{props.desc}....</p>
            <div className=" my-2 d-flex justify-content-between">
              <span>Author: {!props.author ? "Author Unavailable" :props.author}</span>
              <span>{new Date(props.publishedAt).toGMTString()}</span>
            </div>

            <a href={props.newsUrl} target="_blank" class="btn btn-sm  btn-info bg-opacity-50"> Get More Details</a>
          </div>
        </div>

        {/*  */}
      </div>
    )

}



  

   