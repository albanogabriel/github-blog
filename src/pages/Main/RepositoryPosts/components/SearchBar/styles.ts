import styled from "styled-components";

export const SearchFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin: 8px;

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;

    h3 {
      font-size: 1.125rem;
      line-height: 1.6;
    }
    
    span {
      font-size: 0.875rem;
      line-height: 1.4;
    }
  }

  input {
    width: 100%;
    background: ${props => props.theme.baseProfile};
    border: 1px solid ${props => props.theme.border};
    padding: 12px 16px;
    border-radius: 8px;
  }
  
`