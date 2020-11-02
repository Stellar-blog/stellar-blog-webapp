import styled from 'styled-components'

export const FlexBasicContainer = styled.div`
    display:flex;
    margin: 40px auto 0;
    width: 100%;
    max-width: 950px;

    section:nth-child(1) {
        display: flex;
        max-width: 300px;
        width: 100%;
    }

    section:nth-child(2) {
        display: flex;
        max-width: 600px;
        width: 100%;
        margin-left:50px;
    }

    @media screen and (max-width: 1000px) {
        justify-content: center;
        
        section:nth-child(1) {
            display: none;
        }

        section:nth-child(2) {
            justify-content: center;
            margin-left:unset;
        }
    }
`