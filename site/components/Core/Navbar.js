import React from 'react'
import { Container, Button, Menu, Dropdown, Icon } from 'semantic-ui-react'
import axios from '../../lib/axios'
import Link from 'next/link'

export default class Navbar extends React.Component {
<<<<<<< HEAD
  render() {
    return (
      <Menu borderless inverted>
          <Container>
              <Menu.Item header as='h3'>TalkLikeThat</Menu.Item>
              <Menu.Menu position='right'>
                  <Menu.Item as='a'>RANKING</Menu.Item>
                  <Menu.Item as='a'><Icon name='search' />FIND TALKER</Menu.Item>
                  <Menu.Item as='a'><Icon name='bell' /></Menu.Item>
                  <Dropdown text='Kate' pointing className='link item'>
                      <Dropdown.Menu>
                          <Dropdown.Item>My Profile</Dropdown.Item>
                          <Dropdown.Item>Logout</Dropdown.Item>
                      </Dropdown.Menu>
                  </Dropdown>
              </Menu.Menu>
          </Container>
      </Menu>
    )
  }
=======
    state = {
        id: '',
        name: ''
    }

    async componentWillMount() {
        this.setID(9);    
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
                    <Link href="/list/talker">
                        <Menu.Item as='a'><Icon name='search' />FIND TALKER</Menu.Item>
                    </Link>
                    <Menu.Item as='a'><Icon name='alarm' /></Menu.Item>
                    <Dropdown text={this.props.user.name} pointing className='link item'>
                        <Dropdown.Menu>
                            {
                                [...Array(4)].map((e,index) => (
                                    <Dropdown.Item 
                                        key={index}
                                        onClick={() => this.setID(index)}
                                    >
                                        {`Set mock ID: ${index}`}
                                    </Dropdown.Item>
                                ))
                            }
                            <Dropdown.Item>Logout</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Menu.Menu>
            </Menu>
        )
    }
>>>>>>> f2c16013d8b1368f4f22ce80c24fc8213f809ff1
}