import React from 'react'

class TestComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      message: 'heheheh'
    }
  }

  render() {
    return <div>{this.state.message}</div>
  }
}

export default TestComponent