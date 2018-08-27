import React  from 'react'

import app from './base'
import { Input, Menu, Segment } from 'semantic-ui-react'




export default Wrap => props => {
    
    this.state = { activeItem: 'home' }
    function connect(){
        app.auth().onAuthStateChanged(user => {
            console.log('====================================');
            console.log(user);
            console.log('====================================');
            if (user) {
              this.setState({
                
              });
            } else {
              
            }
          })
    }

    connect()
    const { activeItem } = this.state
    return (
        
        <div>
        <Menu pointing>
          <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick} />
          <Menu.Item
            name='messages'
            active={activeItem === 'messages'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name='friends'
            active={activeItem === 'friends'}
            onClick={this.handleItemClick}
          />
          <Menu.Menu position='right'>
            <Menu.Item>
              <Input icon='search' placeholder='Search...' />
            </Menu.Item>
          </Menu.Menu>
        </Menu>

        <Segment>
        <Wrap {...props} />
        </Segment>
      </div>
    )

}

   






