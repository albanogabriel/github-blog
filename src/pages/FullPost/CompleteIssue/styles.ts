import { styled } from "styled-components";

export const FullPostPage = styled.div`

`

export const FullPostContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0rem auto 0rem;
  padding: 2rem 3rem;
  max-width: 864px;
  width: 100%;
  background-color: ${props => props.theme.post};
  overflow-y: scroll;
  border-radius: 10px;
  transform: translateY(-108px);
  /* transform: translateY(-50%); */
`

export const NavigationLinks = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  margin-bottom: 16px;

  a {
    display: flex;
    gap: 8px;
    align-items: center;
    text-decoration: none;
    color: ${({theme }) => theme.blueHyperlink};
    cursor: pointer;

    &:hover {
      filter: brightness(80%);
      /* opacity: 0.80; */
    }

  }

`

export const NavSocialMedia = styled.div`
  display: flex;
  gap: 1.5rem;

  span {
    display: flex;
    gap: 0.5rem;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    &:hover {
      opacity: 0.8;
    }

  }

  a {
    display: flex;
    gap: 0.5rem;
    align-items: center;
    text-decoration: none;
    color: ${props => props.theme.blueHyperlink};

    &:hover {
    opacity: 0.8;
  }

  }
`

export const TextContainer = styled.div`
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
