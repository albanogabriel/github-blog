import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faBuilding, faUserGroup } from '@fortawesome/free-solid-svg-icons'


import avatar from '../../../assets/avatar.png'
import { ProfileInfoContainer, ProfileTitle, NavSocialMedia, ProfileCardContainer } from './styles'

export function ProfileCard() {
  return (
    <ProfileCardContainer>
        <div>
          <img src={avatar} alt="" />
        </div>
        
        <ProfileInfoContainer>
          <div>
            <ProfileTitle>
              <h1>Gabriel Albano da Silva</h1>
              <a href="">GITHUB</a>
            </ProfileTitle>
            
            <p>Lorem Lorem ipsum ipsum Lorem Lorem ipsum ipsumLorem Lorem ipsum ipsum</p>
          </div>
        
          <NavSocialMedia>
            <span>
              <FontAwesomeIcon icon={faGithub} /> 
              Github
            </span>
            <span>
              <FontAwesomeIcon icon={faBuilding} /> 
              albanogabriel
            </span>
            <span>
              <FontAwesomeIcon icon={faUserGroup} /> 
              Seguidores
            </span>
          </NavSocialMedia>
        </ProfileInfoContainer>
      </ProfileCardContainer>
  )
}