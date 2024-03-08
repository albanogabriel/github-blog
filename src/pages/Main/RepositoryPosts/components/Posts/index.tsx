import { PostCard, StyledLink } from "./styles";

import { dateFormatter, relativeDateFormatter } from '../../../../../utils/formatter'
import { Issue } from "../../../../../contexts/issuesContext";

interface PostsProps {
  data: Issue
}

export function Post({ data }: PostsProps) {
  const formattedDate = relativeDateFormatter(data.created_at)

  return(
      <StyledLink to={`/post/${data.number}`} >
        <PostCard>
          <header>
            <h2>{data.title}</h2>
            <span>{data && dateFormatter.format(new Date(data.created_at))}</span>
          </header>

          <p>{data.body}</p>
          
          <footer>
            <span>Postado <span>{formattedDate}</span></span>
          </footer>
        </PostCard>
      </StyledLink>
  )
}