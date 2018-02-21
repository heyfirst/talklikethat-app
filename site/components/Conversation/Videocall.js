import React, { Component } from 'react'
import {
    Grid, Container, Button, Menu, Dropdown, Icon, Card, Column, Modal, Image, Divider,
    Segment, Dimmer, Loader
} from 'semantic-ui-react'

class VideoCall extends Component {

    render() {
        return (
            <div>
              <Navbar setUser={this.setUser} user={this.state.user}/>
              <Container style={{marginTop: '5em'}}>
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
                  </div>

              </Container>
            </div>
        )

    }
}

export default VideoCall
