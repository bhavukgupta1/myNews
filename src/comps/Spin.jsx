import React, { Component } from 'react'
import loading from './loading.gif'
export default class Spin extends Component {
  render() {
    return (
      <div>
        <div className="text-dark text-center">
           <img src={loading} alt="loading"  />
        </div>
      </div>
    )
  }
}
