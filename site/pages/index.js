import React from 'react'
import axios from 'axios'

import config from '../config'

class Index extends React.Component {
    state = {
        hello: []
    }

    componentWillMount() {
        axios.get(`${config.apiPath}/hello/`)
            .then(res => {
                this.setState({
                    hello: res.data
                })
            })
    }

    render() {
        if (this.state.hello.length === 0) return <div />

        return (
            <div>
                <h1>{this.state.hello[0].content}</h1>
            </div>
        )
    }
}


export default Index