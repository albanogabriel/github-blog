import styled from "styled-components"



export const ProfileCardContainer = styled.div`
  display: flex;
  gap: 2rem;
  background-color: ${props => props.theme.post};
  padding: 2rem 3rem;
  border-radius: 10px;

  div {
    img {
      border: 1px solid ${props => props.theme.text};
      border-radius: 8px;
      height: 148px;
      width: 148px;
    }
  }

  p {
    font-size: 1rem;
    color: ${props => props.theme.text};
  }
`

export const ProfileInfoContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  justify-content: center;
`

export const ProfileTitle = styled.div`
  display: flex;
  justify-content: space-between;
  justify-items: center;
  align-items: center;

  h1 {
    font-size: 1.5rem;
    color: ${props => props.theme.title};
  }

  a {
    color: ${props => props.theme.blueHyperlink};
    font-weight: 600;
    font-size: 0.75rem;
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
