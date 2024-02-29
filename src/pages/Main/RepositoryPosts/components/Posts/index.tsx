import { PostCard, PostCardContainer } from "./styles";

export function Posts() {
  return(
    <PostCardContainer>
      <PostCard>
        <div>
          <h2>JavaScript Datatypes</h2>
          <time>Há 1 dia</time>
        </div>
        <p>Lorem ipsum Lorem Ipsum Lorem IpsumLorem Ipsum</p>
      </PostCard>
      <PostCard>
        <div>
          <h2>JavaScript Datatypes</h2>
          <time>Há 1 dia</time>
        </div>
        <p>Lorem ipsum Lorem Ipsum Lorem IpsumLorem Ipsum</p>
      </PostCard>
    </PostCardContainer>
  )
}