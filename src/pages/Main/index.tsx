import { ProfileCard } from "./ProfileCard";
import { RepositoryPosts } from "./RepositoryPosts";
import { MainContainer } from "./styles";



export function Main() {
  return (
    <MainContainer>
      <ProfileCard/>
      <RepositoryPosts/>
    </MainContainer>
  )
}