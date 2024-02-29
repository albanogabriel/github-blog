import gitHubBlog from '../../assets/GITHUB BLOG.svg'
import { HeaderContainer } from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <img src={gitHubBlog} alt="" />
    </HeaderContainer>
  )
}