import React, { Component } from 'react'

export default class NewsDetail extends Component {


  render() {

    let { title, source, desc, imageUrl, newsUrl, author, publishedAt } = this.props;

    return (
      <div>

        <div className="border-info card my-2"  >
          <span class="position-absolute top-0  translate-middle badge rounded-pill bg-danger" style={{ left: "90%", zIndex: "1" }}>
            {source}
          </span>

          <img src={imageUrl} class="card-img-top" alt="..." />

          <div className="card-body">
            <h5 className="card-title"> {title}  </h5>
            <p Name="card-text">{desc}....</p>
            <div className=" my-2 d-flex justify-content-between">
              <span>Author: {!author ? "Author Unavailable" : author}</span>
              <span>{new Date(publishedAt).toGMTString()}</span>
            </div>

            <a href={newsUrl} target="_blank" class="btn btn-sm  btn-info bg-opacity-50"> Get More Details</a>
          </div>
        </div>

        {/*  */}
      </div>
    )
  }
}
