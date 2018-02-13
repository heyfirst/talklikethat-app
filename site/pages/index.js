import React from 'react'
import axios from 'axios'

const ListNumber = () => (
    <ul>
        <li>123</li>
        <li>123</li>
        <li>123</li>
        <li>123</li>
        <li>123</li>
        <li>123</li>
        <li>123</li>    
    </ul>
)

const Footer = () => (
    <div>Footer</div>
)

class Index extends React.Component {
    state = {
        hello: []
    }

    componentWillMount() {
        axios.get('http://localhost:8080/hello/')
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
                {
                    // this.state.hello.map(data => (
                    //     <h1>{data.content}</h1>
                    // ))
                    
                }
                <h1>{this.state.hello[0].content}</h1>
            </div>
        )
    }
}


export default Index