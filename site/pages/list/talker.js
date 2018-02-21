import React from 'react'
import FindTalker from '../../components/Find/Talker'

const TalkerPage = props => <FindTalker {...props} />

<<<<<<< HEAD
    show = size => () => this.setState({ size, open: true })
    close = () => this.setState({ open: false })

    render() {
        const { open, size } = this.state

        return (
            <div>

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

                <Container>
                    <Grid.Column>
                        <Button.Group color='black' attached='top' buttons={['Filter', 'Random', 'Friend']} />
                    </Grid.Column>
                </Container>

                <Container>
                    <Grid>
                        <Grid.Row>
                            <Grid.Column>
                                {
                                    [...Array(10)].map((e, index) => (
                                        <Card fluid key={index}>
                                            <Card.Content>
                                                <Card.Header as='a'>
                                                    <Image as='img' src='https://image.flaticon.com/icons/svg/371/371669.svg' size='mini' circular />
                                                    Name
                                                </Card.Header>
                                                <Card.Description>Level</Card.Description>
                                                <div>
                                                    <Button.Group floated='right' vertical>
                                                        <Button basic color='blue' content='Add Friend' />
                                                        <Divider fitted hidden />
                                                        <Button basic color='olive' onClick={this.show('tiny')} content='Request' />
                                                    </Button.Group>

                                                    <Modal size={size} open={open} onClose={this.close}>
                                                        <Modal.Header>Waiting for request</Modal.Header>
                                                        <Modal.Content>
                                                            <Image.Group size='tiny' circular>
                                                                <Image as='img' src='https://image.flaticon.com/icons/svg/371/371706.svg' />
                                                                <Image as='img' src='https://image.flaticon.com/icons/svg/371/371651.svg' />
                                                            </Image.Group>
                                                            <p>Kate calling Martin...</p>
                                                        </Modal.Content>
                                                        <Modal.Actions>
                                                            <Button basic color='red' onClick={this.close} content='Cancle' />
                                                        </Modal.Actions>
                                                    </Modal>
                                                </div>
                                            </Card.Content>
                                        </Card>
                                    ))
                                }
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Container>
            </div>
        )

    }
}

export default ListFriendTalker
=======
export default TalkerPage
>>>>>>> f2c16013d8b1368f4f22ce80c24fc8213f809ff1
