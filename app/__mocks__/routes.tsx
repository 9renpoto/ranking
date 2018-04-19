// tslint:disable-next-line:no-var-requires
import React, { Component } from 'react'

class Link extends Component<any> {
  public render () {
    return <div />
  }
}

// tslint:disable-next-line:no-var-requires
module.exports = require('next-routes')({
  Link,
  Router: {}
})
