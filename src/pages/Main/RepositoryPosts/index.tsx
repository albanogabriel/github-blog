import { Posts } from "./components/Posts";
import { SearchBar } from "./components/SearchBar";
import { RepositoryPostsContainer } from "./styles";

export function RepositoryPosts(){
  return (
    <RepositoryPostsContainer>
      <SearchBar/>
      <Posts />
    </RepositoryPostsContainer>
  )
}