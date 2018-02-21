import React, { Component } from 'react'
import { Grid, Container, Button, Menu, Dropdown, Icon, Card, Column, Modal, Image, Divider ,Blink} from 'semantic-ui-react'

class ListFriendTalker extends Component {
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

                <Container>
                    <Grid.Column>
                        <Button.Group color='blue' attached='top' buttons={['Filter', 'Random', 'Friend']} />
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
                                                <Image as='img' src='https://image.flaticon.com/icons/svg/371/371669.svg' size='mini' circular />
                                                <Card.Header as='a'>Name</Card.Header>
                                                <Card.Description>Level</Card.Description>
                                                <div>
                                                    <Button.Group floated='right' vertical>
                                                        <Button basic color='blue' content='Add Friend' />
                                                        <Divider hidden />
                                                        <Button basic color='olive' onClick={this.show('tiny')} content='Request' />
                                                    </Button.Group>

                                                    <Modal size={size} open={open} onClose={this.close}>
                                                        <Modal.Header>Waiting for request</Modal.Header>
                                                        <Modal.Content>
                                                            <Image.Group size='tiny' circular>
                                                                <Image as='img' src='https://image.flaticon.com/icons/svg/371/371706.svg' />
                                                                <Image style={{width: 50, height: 50}} as='img' src='https://image.flaticon.com/icons/svg/126/126341.svg' />
                                                                <Image style={{width: 30, height: 30}} as='img' src='https://image.flaticon.com/icons/svg/159/159111.svg' />
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
