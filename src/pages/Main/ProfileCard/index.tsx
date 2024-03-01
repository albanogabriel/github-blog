import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faBuilding, faUserGroup } from '@fortawesome/free-solid-svg-icons'

import { ProfileInfoContainer, ProfileTitle, NavSocialMedia, ProfileCardContainer } from './styles'
import { useEffect, useState } from 'react'

interface userDataType {
  id: number
  login: string
  avatar_url: string
  company: string
  followers: number
}

export function ProfileCard() {
  const [user, setUser] = useState<userDataType | null >(null)

  const loadUser = async() => {
    const response = await fetch('https://api.github.com/users/albanogabriel')
    const data = await response.json()

    const { id, login, avatar_url, company, followers } = data

    setUser({
      id,
      login,
      avatar_url,
      company,
      followers
    })

    console.log(data)
    console.log
  }

  useEffect(() => {
    loadUser()
  }, [])

  return (
      <div>
        {user && 
            <ProfileCardContainer>
              <div>
                <img src={user.avatar_url} alt="" />
              </div>
          
              <ProfileInfoContainer>
                <div>
                  <ProfileTitle>
                    <h1>Gabriel Albano da Silva</h1>
                    <a href="">GITHUB</a>
                  </ProfileTitle>
                  
                  <p>Write a bio in near future</p>
                </div>
                
                <NavSocialMedia>
                  <span>
                    <FontAwesomeIcon icon={faGithub} /> 
                    {user.login}
                  </span>

                  {user.company && 
                    <span>
                      <FontAwesomeIcon icon={faBuilding} /> 
                      albanogabriel
                    </span>
                  }

                  <span>
                    <FontAwesomeIcon icon={faUserGroup} /> 
                    {user.followers}
                  </span>
                </NavSocialMedia>
              </ProfileInfoContainer>
            </ProfileCardContainer>
        }
      </div>
    )
}

{/* <div key={userData.id}>
          <ProfileCardContainer>
            <div>
              <img src={userData.avatar_url} alt="" />
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
        
          </div> */}