// import React, { Component } from 'react'
import loading from './loading.gif'
import React from 'react'

export default function Spin() {
  return (
    <div>
      <div className="text-dark text-center">
         <img src={loading} alt="loading"  />
      </div>
    </div>
  )
  
}
