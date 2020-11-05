import styled from 'styled-components'

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