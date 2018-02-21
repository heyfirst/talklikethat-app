import React from 'react'
import Videocall from '../../components/Conversation/Videocall'

const VideocallPage = props => <Videocall {...props} />

<<<<<<< HEAD
    show = size => () => this.setState({ size, open: true })
    close = () => this.setState({ open: false })
    handleClick = () => this.setState({ active: !this.state.active })

    render() {
        const { open, size } = this.state
        const { active } = this.state

        return (
            <div>
                <Menu borderless inverted>
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

                    <div>
                        <Divider hidden />
                        <p>00:00:00</p>
                        <Button basic color='olive' content='Start chat' />
                        <Button toggle active={active} onClick={this.handleClick} content='Start chat' />
                    </div>

                </Container>
            </div>
        )

    }
}

export default ChattingVideoCall
=======
export default VideocallPage
>>>>>>> f2c16013d8b1368f4f22ce80c24fc8213f809ff1
