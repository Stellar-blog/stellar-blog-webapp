import styled from 'styled-components'

const theme = {
    primaryFont: "'Open Sans', sans-serif",
    secondaryFont: "'Roboto', sans-serif",
    primaryColor: "#4f2361",
    secondaryColor: "",
    whiteColor: "",
    textColor: "",
}

export const Typography = styled.p`
  color: white;
  margin: 1rem;

  ${({ size }) => size === "big" && "font-size:2.8rem; font-family: 'Open Sans', sans-serif;"};
  ${({ size }) => size === "medium" && "font-size:1.5rem;"};
`

export const Button = styled.a`
  padding: 0.4rem 1rem;
  margin: 0 1rem;

  color: white;
  font-size: medium;
  font-family: 'Roboto', sans-serif;
  font-weight: bolder;

  cursor: pointer;
  border: 3px solid #4f2361;
  border-radius: 0.2rem;
  background: #4f2361;

  ${({ type }) => type === "no-box" && "background:none; border: none;"};

  text-decoration: none;
  ;
`

export const Main = styled.div`
  background: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.5)), url(/stellar-blog-bg1.webp);
  background-position: center;
  background-size: cover;
  height: 100vh;
`

export const DashboardMain = styled.div`
  background: #0f1729;
  background-position: center;
  background-size: cover;
  min-height: 100vh;
`

export const Center = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  height: 90vh;
  max-width: 450px;
  margin: auto;

  ${({ type }) => type === "post" && "height: unset;margin-top: 2rem;"}
  ${({ type }) => type === "dashboard" && "height: unset; text-align:unset;margin-top: 2rem;"}
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  min-width: 50%;

  ${({ type }) => type === "post" && "width: 540px;"}

  input, textarea {
    padding: 0.8rem;
    border: transparent;
    margin: 0.1rem 0;
  }

  input:active, textarea:active {
    outline: none;
  }

  input:focus, textarea:focus {
    outline: none;
  }

  textarea {
    height: 10rem;
  }

  .imageContainer {
    position: relative;

    img {
      margin: 1rem 0;
      display: block;
      width: 100%;
      height: auto;
    }

    .imageOverlay {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      opacity: 0;
      transition: .5s ease;
      margin: 1rem 0;
      background-color: #7f5281;
    }

    .imageDeleteButton{
      color: white;
      font-size: 20px;
      text-align: center;

      position: absolute;
      top: 50%;
      left: 50%;
      -webkit-transform: translate(-50%, -50%);
      -ms-transform: translate(-50%, -50%);
      transform: translate(-50%, -50%);

      cursor:pointer;
    }

    &:hover .imageOverlay {
      opacity: 1;
    }

  }

  button {
    padding: 0.4rem 1rem;
    margin: 1rem 0;
  
    color: white;
    font-size: medium;
    font-family: 'Roboto', sans-serif;
    font-weight: bolder;
  
    cursor: pointer;
    border: 3px solid #4f2361;
    border-radius: 0.2rem;
    background: #4f2361;
  
    text-decoration: none;
  }

  button:active, button:hover, button:focus {
    outline: 2px solid #7f5281;
  }
`

export const ImageUploader = styled.input`
  width: 0.1px;
  height: 0.1px;
  opacity: 0;
  overflow: hidden;
  position: absolute;
  z-index: -1;

  & + label {
    padding: 0.4rem 1rem;
    margin: 1rem 0;
  
    color: white;
    font-size: medium;
    font-family: 'Roboto', sans-serif;
    font-weight: bolder;
  
    cursor: pointer;
    border: 3px solid #4f2361;
    border-radius: 0.2rem;
    background: #4f2361;
  }

  input:active, textarea:active {
    outline: none;
  }

  input:focus, textarea:focus {
    outline: none;
  }

  &:focus + label,
  & + label:hover {
      outline: 2px solid #7f5281;
  }
`

export const InfoMessage = styled.p`
  margin: 0.2rem;
  color: white;
`

export const ErrorMessage = styled.p`
  margin: 0.2rem;
  color: tomato;
`

export const ImageLoader = styled.img`
  width: 540px;
`

export const CardContainer = styled.div`
  margin: 1rem;
  background: white;
  font-family: 'Open Sans', sans-serif;
  width: 540px;
  border-radius: 0.5rem;

  div {
    padding: 0 1rem;
  }

  .username{
    padding: 0.5rem 1rem;
    display: flex;
    align-items: center;

    .followButton{
      font-family: 'Roboto',sans-serif;
      font-weight: bold;
      color: #b74ae3;
      font-size: 0.8rem;
      cursor: pointer;
    }

    .followButton:hover {
      color: #32497e;
    }
  }

  .name {
    font-weight: bold;
  }

  .content {
    padding: 0.5rem 1rem;
  }

  .buttonbox{
    display: flex;
    margin: 0.5rem 0;

    .like{
      background: url(/heart-empty.svg);
      width:21px;
      height:21px;
      background-position: center;
      background-repeat: no-repeat;
      cursor: pointer;
    }

    .like:hover {
      background: url(/heart-red.svg);
      width:21px;
      height:21px;
      background-position: center;
      background-repeat: no-repeat;
      cursor: pointer;
    }

    .comment{
      background: url(/comment.svg);
      width:21px;
      height:21px;
      background-position: center;
      background-repeat: no-repeat;
      cursor: pointer;
    }
  }
`

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