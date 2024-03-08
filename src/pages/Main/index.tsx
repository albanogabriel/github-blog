import { ProfileCard } from "./ProfileCard";
import { RepositoryPosts } from "./RepositoryPosts";
import { SearchBar } from "./RepositoryPosts/components/SearchBar";
import { MainContainer } from "./styles";

export function Main() {
  return (
    <MainContainer>
      <ProfileCard/>
      <SearchBar/>
      <RepositoryPosts/>
    </MainContainer>
  )
}