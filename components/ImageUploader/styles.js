import styled from 'styled-components'

export const CardContainer = styled.div`

  position : relative;

  img {
    width: 100%;
    margin: 1rem 0;
    display: block;
  }

  .card-overlay {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    opacity: 0;
    transition: .5s ease;
    padding: 1rem 0;
    background-color: #7f5281;
  }

  .card-delete-btn{
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

  &:hover .card-overlay {
    opacity: 1;
  }

`

export const PreviewContainer = styled.div`
  margin-bottom: 2rem;
  background: white;
`

export const DropZoneContainer = styled.div`
  width: 532px;
  height: 300px;
  border: 4px dashed white;
  border-radius: 1rem;
  margin-bottom: 2rem;
  padding: 1rem 0;

  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;
  cursor: pointer;

  @media only screen and (max-width: 600px) {
    width: 98%;
  }
`

export const Clickable = styled.input`
  width: 0.1px;
  height: 0.1px;
  opacity: 0;
  overflow: hidden;
  position: absolute;
  z-index: -1;

  & + label {
    width: 100%;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    font-weight: bolder;
    cursor: pointer;
    // border: 1px solid #ff0505; 
  }
`