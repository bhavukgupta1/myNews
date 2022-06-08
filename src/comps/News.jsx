
import NewsDetail from './NewsDetail'
import Spin from './Spin';
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';

import React, { useEffect, useState } from 'react'

export default function News(props) {

  const [articles, setArticles] = useState([])

  const [loading, setLoading] = useState(true)

  const [page, setpage] = useState(1)

  const [totalResults, setTotalResults] = useState(0)


  // async handleUpdateNews() {
  //   window.scrollTo(0, 0);
  //   this.setState({ loading: true })
  //   let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=23ed5c08583745348f06aace87b3db7b&page=${this.state.page}&pagesize=${props.size}`

  //   let data = await fetch(url)
  //   let parsedData = await data.json()
  //   console.log(parsedData);
  //   this.setState({
  //     articles: parsedData.articles,
  //     totalResults: parsedData.totalResults, author: parsedData.author, publishedAt: parsedData.publishedAt,
  //     loading: false
  //   })
  // }

  // async componentDidMount() {
  //   // console.log("cdm");
  //   fetchMoreData()
  // }
  useEffect(() => {
    fetchMoreData()
  }, [])
  const fetchMoreData = async () => {

    // const apiKey = "23ed5c08583745348f06aace87b3db7b"
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=23ed5c08583745348f06aace87b3db7b&page=${page}&pagesize=${props.size}`

    let data = await fetch(url)
    let parsedData = await data.json()
    console.log(parsedData);
    // this.setState({
    //   articles: this.statearticles.concat(parsedData.articles),
    //   totalResults: parsedData.totalResults, author: parsedData.author, publishedAt: parsedData.publishedAt,
    //   loading: false
    // })

    setpage(page + 1)
    setArticles(articles.concat(parsedData.articles))
    setLoading(false)
    setTotalResults(parsedData.totalResults)

  };
  // handlePreClick = async () => {

  //   this.setState({

  //     page: this.state.page - 1


  //   })
  //   this.handleUpdateNews()

  // }
  // handleNextClick = async () => {
  //   console.log("nxt")

  //   this.setState({

  //     page: this.state.page + 1

  //   })

  //   this.handleUpdateNews()

  // }



  return (
    <div className='container '>
      <h3 className='text-light '>Today's Headlines</h3>
      {/* {this.state.loading && <Spin />} */}


      <InfiniteScroll style={{ overflow: "visible" }}
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={<Spin />}>




        <div className="container">

          <div className="row my-3 text-dark">
            {articles.map((element, key) => {
              console.log(element);

              return (

                <div className=" col-md-4">

                  <NewsDetail key={element.url} title={element.title} source={element.source.name} desc={element.description} newsUrl={element.url} imageUrl={element.urlToImage} author={element.author} publishedAt={element.publishedAt} />
                </div>
              )
            })
            }


          </div>
        </div>
      </InfiniteScroll>

      {/* <div className="container d-flex justify-content-between">

        <button type="button" disabled={this.state.page <= 1} onClick={this.handlePreClick} class="btn btn-dark  m-3  border border-info">Previous Page</button>

        <button type="button" disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / props.size)} onClick={this.handleNextClick} class="btn btn-dark  m-3  border border-info">Next Page</button>



      </div> */}
    </div>
  )





}

News.defaultProps = {
  size: 6,
  country: 'in',
  category: "general"

}
News.propTypes = {
  size: PropTypes.number,
  country: PropTypes.string,
  general: PropTypes.string
}