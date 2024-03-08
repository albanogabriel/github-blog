import { useContext } from "react";
import { Post } from "./components/Posts";
import { GridPosts, RepositoryPostsContainer } from "./styles";
import { IssuesContext } from "../../../contexts/issuesContext";
import { Spinner } from "../../../components/Spinner";

export function RepositoryPosts(){
  const { issues, isLoading } = useContext(IssuesContext)

  return (
    <RepositoryPostsContainer>
      { isLoading ? (
        <Spinner />
        ) : (
          <GridPosts>
            {
              issues?.map(issue => {
                return <Post key={issue.id} data={issue}  />
              })  
            }
          </GridPosts>
        )
      }
    </RepositoryPostsContainer>
  )
}