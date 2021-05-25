import React from "react"
import {Navbar, Container} from 'react-bootstrap'
import styled from "styled-components"

const Styles = styled.div`
  a, .navbar-brand, .navbar-nav, nav-link {
    color: #adb1b8;
    padding: 20px;
    &:hover {
      color: white;
    }
  }
`

export function Header(props) {
    return <div>
        <Styles>
            <Navbar collaseOnSelect extend="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand>Fuck</Navbar.Brand>
                    <Navbar.Brand>Fucking</Navbar.Brand>
                    <Navbar.Brand>Fuck off</Navbar.Brand>
                </Container>
            </Navbar>
        </Styles>
    </div>
}