import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 72px;
  max-width: 1024px;
  width: 100%;
  margin: 0rem auto 0rem;
  /* transform: translateY(-50%); */
  transform: translateY(-108px); /* em pixels porque precisa ser uma largura fixa */
  overflow-y: scroll;
`

