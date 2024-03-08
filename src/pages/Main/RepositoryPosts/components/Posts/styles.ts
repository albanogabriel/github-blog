import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
  outline: none; // Remove the default focus outline

  &:focus {
    outline: none;
    border-radius: 8px;
    box-shadow: 0 0 0 2px transparent ; // 0 eixo x , 0 eixo y , 0 blur , 2px de Spread
  }

  &:active {
    scale: 1.025;
  }
`

export const PostCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 16px;
  padding: 32px;
  height: 100%;
  background: ${({ theme }) => theme.post};
  border-radius: 8px;
  border: 2px solid transparent;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    span {
      color: ${({ theme }) => theme.span};
      font-size: 14px;
    }
  }

  p {
    font-size: 16px;
  }

  footer {
    color: ${({ theme }) => theme.span};
    font-size: 14px;
  }

  &:hover {
    border: 2px solid ${({ theme }) => theme.border};
  }

  &:focus { // Apply the style on hover and focus
    border: 2px solid ${({ theme }) => theme.border};
    border-radius: 8px;
  }

`