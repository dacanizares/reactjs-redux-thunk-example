import React from 'react'
import { Spinner } from 'reactstrap'

function dataFetcher(WrappedComponent) {
  return class extends React.Component {
    componentDidMount() {
      this.props.fetchData()
    }
  
    render(){
      if (this.props.loading) {
        return (
          <center className='mt-5'>
            <Spinner color='primary' />
          </center>
        )
      } else {
        return (
          <WrappedComponent { ...this.props } />
        )
      }
    }
  }
}


export default dataFetcher;