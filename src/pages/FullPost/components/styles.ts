import styled from "styled-components";


export const PostContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 900px;
  width: 100%;
  margin: 0rem auto 0rem;
  padding: 32px;
  transform: translateY(-108px);
  margin-bottom: 32px;

  h1, h2, h3 {
    color: ${props => props.theme.blueHyperlink};
  }

  p {
    
  }
`