import React from 'react'
import axios from 'axios'
import Navbar from '../components/Core/Navbar'
import config from '../config'

class Index extends React.Component {
    state = {
        hello: []
    }

    componentWillMount() {
    }

    render() {
        return (
            <div>
                <Navbar user={{}}/>
                <h1 style={{marginTop: "3em"}}>{'Hello World'}</h1>
            </div>
        )
    }
}


export default Index