import React from 'react';
import { withTheme } from 'styled-components';

import { Container, Button, Label, Input, Checkbox } from '../../ui-kit';

class AuthFormComponent extends React.Component {
  render() {
    return (
      <div className="AuthForm">
        <Container>
          <Label>Please enter your credentials and click 'Log in'</Label>

          <div className="TextField">
            <Label>User name</Label>
            <Input placeholder="User name" />
          </div>

          <div className="TextField">
            <Label>Password</Label>
            <Input type="password" placeholder="Password" />
          </div>

          <div className="CheckField">
            <Checkbox />
            <Label>Remember me</Label>
          </div>

          <Button variant="primary">Log in</Button>
        </Container>
        </div>
    )
  }
}

export const AuthForm = withTheme(AuthFormComponent);