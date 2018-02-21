import React from 'react'
import { Container, Button, Menu, Dropdown, Icon } from 'semantic-ui-react'
import axios from '../../lib/axios'

export default class Navbar extends React.Component {
    state = {
        id: '',
        name: ''
    }

    setID = async (id) => {
        const talker = await axios.get(`/user/id?id=${id}`).then(data => data.data)
        this.props.setUser(talker)
    }

    render() {
        return (
            <Menu fixed={`top`}>
                <Menu.Item header as='h3'>TalkLikeThat</Menu.Item>
                <Menu.Menu position='right'>
                    <Menu.Item as='a'><Icon name='search' />FIND TALKER</Menu.Item>
                    <Menu.Item as='a'><Icon name='alarm' /></Menu.Item>
                    <Dropdown text='Kate' pointing className='link item'>
                        <Dropdown.Menu>
                            <Dropdown.Item onClick={() => this.setID(1)}>Set mock ID:1</Dropdown.Item>
                            <Dropdown.Item onClick={() => this.setID(2)}>Set mock ID:2</Dropdown.Item>
                            <Dropdown.Item>Logout</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Menu.Menu>
            </Menu>
        )
    }
}