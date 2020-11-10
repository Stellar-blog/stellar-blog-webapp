import styled from 'styled-components'

export const SearchBarContainer = styled.form`
    width: 100%;
    position: relative;

    .input-container{
        display: flex;
        align-items: center;

        input {
            height: 35px;
            width: 15rem;
            margin-left: 2rem;
            padding: 0.8rem;
            background: #f1f1f1;
        }
    
        input:focus, input:active {
            outline: none;
        }

        img {
            border: none;
            position: relative;
            left: -30px;
            width: 25px;
            height: 25px;
        }
    }

    @media only screen and (max-width: 600px) {
        width: 11rem;

        .input-container{
            input {
                width: 11rem;
                margin: 0;
            }

        }
    }
`

export const SuggestionContainer = styled.section`
    position : absolute;
    display: block;
    margin: 4px 0 0 2rem;
    width: 15rem;

    background-color: #f1f1f1;
    z-index: 1;
    overflow: auto;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);

    @media only screen and (max-width: 600px) {
        margin: 2px 0 0 0;
        width: 11rem;
    }
`

export const Item = styled.div`
    padding: 0.8rem 0.8rem;
    cursor: pointer;

    &:hover {
        background-color: #ddd;
    }

    .bold {
        font-weight: bold;
    }
`