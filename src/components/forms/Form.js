import React, { Component } from 'react'

export default class Form extends Component {

  render(){
    const { className } = this.props

    return <form className={ `Form ${ className }` }>
      { this.props.children }
    </form>
  }
}
