import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    width: 100%;
    margin-top: 70px;

    footer {
        padding: 0px 5px;
    }
    
    a{
        color: #a3b3c0;
    }
`;

const Footer = () => {
    return (
        <Container>
          <hr />
          <footer>
            <p>©Christos Zafeiropoulos - 2021 - Developed and designed by <a href="https://www.stathopoulosandreas.com" rel="noreferrer" target="_blank">Andreas Stathopoulos</a></p>
          </footer>
        </Container>
    )
}

export default Footer
