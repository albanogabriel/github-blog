import styled from "styled-components";

export const PostCardContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 32px;
`

export const PostCard = styled.div`
  padding: 32px;
  background: ${props => props.theme.post};
  border-radius: 8px;
`