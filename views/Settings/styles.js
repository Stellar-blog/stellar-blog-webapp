import styled from 'styled-components'

export const AccountContainer = styled.div`
    margin: 1rem 0; 
    width: 100%;
    background: white;
    border-radius: 0.5rem;
    min-height: 500px;

    .sub-container{
        padding: 1rem;
    }

    .title{
        border-bottom: 2px solid #a2a2a2;
    }

    .content{
        padding: 2rem 0;
        border-bottom: 1px solid #c9c9c9;
        display: flex;

        .name{
            width: 150px;
        }

        .value{
            width: 60%;
            display: flex;
            justify-content: space-between;
        }
    }

    .button{
        cursor: pointer;
    }

    .delete-account{
        p {
            color: red;
            cursor: pointer;
            margin: 0;
        }
    }

    .content:last-child{
        border-bottom: none;
    }

    @media only screen and (max-width: 600px) {
        margin: 0; 
        width: 100%;
        border-radius: 0;
        height: 93vh;
    }
`

export const MySettingsContainer = styled.section`
    flex-direction: column;
    align-items: center;
    margin-bottom: 10rem;

    @media only screen and (max-width: 600px) {
        margin: 0; 
    }
`

export const SettingsMenuContainer = styled.section`
    background-color: #f1f1f1;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    flex-direction: column;
    border-radius: 1rem;
    height: fit-content;
    margin-top: 1rem;

    .menu {
        padding: 12px 16px;
        text-align: center;
        cursor: pointer;
        border-top: 1px solid #c9c9c9;
    }

    .menu:first-child {
        border-radius: 1rem 1rem 0 0;
    }

    .menu:last-child {
        border-radius: 0 0 1rem 1rem;
    }

    .selected{
        background-color: #ddd;
    }

    .menu:hover {
        background-color: #ddd;
    }

    .not-available{
        color: #c9c9c9;
    }
`