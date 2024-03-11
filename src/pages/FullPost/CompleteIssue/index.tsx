import { faCalendar, faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FullPostContainer, FullPostPage, NavSocialMedia, NavigationLinks } from "./styles";
import { useNavigate } from "react-router-dom";
import { Issue } from "../../../contexts/issuesContext";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { relativeDateFormatter } from "../../../utils/formatter";
import { PostContent } from "../components";


interface CompleteIssueProps {
  data: Issue
}

export function CompleteIssue({ data }: CompleteIssueProps) {
  const navigate = useNavigate()

  function goBack() {
    navigate(-1)
  }

  const formattedDate = relativeDateFormatter(data?.created_at)

  return(
    <FullPostPage>
      <FullPostContainer>
        <header>
          <NavigationLinks>
            <a onClick={goBack}>
              <FontAwesomeIcon icon={faChevronLeft}/>
              Voltar
            </a>
            <a  href={data.html_url}  target="_blank">
              <FontAwesomeIcon icon={faGithub}/>
              Ver no GitHub
            </a>
          </NavigationLinks>

          <h1>{data.title}</h1>

          <NavSocialMedia>
            <a 
              href={data.html_url}
              target='_blank'
              >
              <FontAwesomeIcon icon={faGithub} /> 
              {data.user.login}
            </a>

            <span>
              <FontAwesomeIcon icon={faCalendar} />
              {formattedDate}
            </span>

            <span>
              <FontAwesomeIcon icon={faCalendar} />
              {data.comments} comentários
            </span>
          </NavSocialMedia>
        </header>
      </FullPostContainer>

      <PostContent content={data.body} />

    </FullPostPage>
  )
}