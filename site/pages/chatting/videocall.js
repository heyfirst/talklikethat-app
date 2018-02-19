import React, { Component } from 'react'
import { Grid, Container, Button, Menu, Dropdown, Icon, Card, Column, Modal, Image, Divider,
    Segment, Dimmer, Loader } from 'semantic-ui-react'

class ChattingVideoCall extends Component {
    state = { open: false }

    show = size => () => this.setState({ size, open: true })
    close = () => this.setState({ open: false })

    render() {
        const { open, size } = this.state

        return (
            <div>
                <Menu borderless>
                    <Container>
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
                    </Container>
                </Menu>

                <Container>
                    <Segment>
                        <Dimmer active>
                            <Loader size='small'>Loading</Loader>
                        </Dimmer>
                        <Image src='https://cdn.gottabemobile.com/wp-content/uploads/2012/05/Google+-Hangout-iPad-Google+.jpg' />
                    </Segment>
                    
                    <Divider hidden />
                    <p>00:00:00</p>
                    <Button basic color='olive' content='Start chat' />
                </Container>
            </div>
        )

    }
}

export default ChattingVideoCall