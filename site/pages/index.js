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
        old: 20,
        hello: []
    }

    componentWillMount() {
        axios.get('http://localhost:8080/hello/')
            .then(response => {
                this.setState({
                    hello: response.data
                })
            })
    }

    render() {
        if (this.state.hello.length === 0) return <div />

        return (
            <div>
                <h1>Hi</h1>
                <p>{ this.state.old }, BKK</p>
                <button
                    onClick={() => this.setState({ old: this.state.old+1 })}
                >
                    {`ADD`}
                </button>
                {
                    this.state.hello.map(data => (
                        <h1>{data.content}</h1>
                    ))
                }
            </div>
        )
    }
}


export default Index