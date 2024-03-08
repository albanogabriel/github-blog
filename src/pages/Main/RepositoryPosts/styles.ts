import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 72px;
  max-width: 864px;
  width: 100%;
  margin: 0rem auto 0rem;
  /* transform: translateY(-50%); */
  transform: translateY(-108px);
  overflow-y: scroll;
`

export const RepositoryPostsContainer = styled.div`
  /* display: flex; */
  /* flex-direction: column; */
`

export const GridPosts = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 32px;
`