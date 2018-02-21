import React, { Component } from 'react'
import { Grid, Container, Button, Menu, Dropdown, Icon, Card, Column, Modal, Image, Divider ,Blink} from 'semantic-ui-react'
import Link from 'next/link'
class Test extends Component {
    state = { open: false }

    show = size => () => this.setState({ size, open: true })
    close = () => this.setState({ open: false })

    render() {
        const { open, size } = this.state

        return (
            <div>
                <Container>
                    <Menu>
                        <Menu.Item header as='h3'>TalkLikeThat</Menu.Item>
                        <Menu.Menu position='right'>
                            <Menu.Item as='a'>RANKING</Menu.Item>
                            <Menu.Item as='a'><Icon name='search' />FIND TALKER</Menu.Item>
                            <Menu.Item as='a'><Icon name='alarm' /></Menu.Item>
                            <Dropdown text='Kate' pointing className='link item'>
                                <Dropdown.Menu>
                                    <Dropdown.Item>My Profile</Dropdown.Item>
                                    <Dropdown.Item>Logout</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Menu.Menu>
                    </Menu>
                </Container>


            </div>
            )
            }
}

export default Test

    