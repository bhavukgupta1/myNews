import React, { Component } from 'react'
import NewsDetail from './NewsDetail'
import Spin from './Spin';
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';

export default class News extends Component {
  defaultProps = {
    size: 6,
    country: 'in',
    category: "general"

  }
  static propTypes = {
    size: PropTypes.number,
    country: PropTypes.string,
    general: PropTypes.string
  }
  articles = []
  constructor() {
    super();
    console.log("constructor from news component");
    this.state = {
      articles: this.articles,
      page: 1,
      totalResults: 0

    }
  }

  // async handleUpdateNews() {
  //   window.scrollTo(0, 0);
  //   this.setState({ loading: true })
  //   let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=23ed5c08583745348f06aace87b3db7b&page=${this.state.page}&pagesize=${this.props.size}`

  //   let data = await fetch(url)
  //   let parsedData = await data.json()
  //   console.log(parsedData);
  //   this.setState({
  //     articles: parsedData.articles,
  //     totalResults: parsedData.totalResults, author: parsedData.author, publishedAt: parsedData.publishedAt,
  //     loading: false
  //   })
  // }

  async componentDidMount() {
    // console.log("cdm");
    this.fetchMoreData()
  }

  fetchMoreData = async () => {
    this.setState({ page: ++this.state.page })
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=23ed5c08583745348f06aace87b3db7b&page=${this.state.page}&pagesize=${this.props.size}`

    let data = await fetch(url)
    let parsedData = await data.json()
    console.log(parsedData);
    this.setState({
      articles: this.state.articles.concat(parsedData.articles),
      totalResults: parsedData.totalResults, author: parsedData.author, publishedAt: parsedData.publishedAt,
      loading: false
    })

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

  render() {
    console.log("render");
    return (
      <div className='container '>
        <h3 className='text-light '>Today's Headlines</h3>
        {/* {this.state.loading && <Spin />} */}


        <InfiniteScroll style={{overflow:"visible"}}
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Spin />}>




          <div className="container">

            <div className="row my-3 text-dark">
              {this.state.articles.map((element, key) => {
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

          <button type="button" disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.size)} onClick={this.handleNextClick} class="btn btn-dark  m-3  border border-info">Next Page</button>



        </div> */}
      </div>
    )
  }
}
