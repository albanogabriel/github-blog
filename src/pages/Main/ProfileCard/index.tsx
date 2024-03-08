import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faBuilding, faUserGroup } from '@fortawesome/free-solid-svg-icons'

import { ProfileInfoContainer, ProfileTitle, NavSocialMedia, ProfileCardContainer } from './styles'
import { useCallback, useEffect, useState } from 'react'
import { api } from '../../../lib/axios'
import { Spinner } from '../../../components/Spinner'

const username = import.meta.env.VITE_GITHUB_USERNAME

interface ProfileData {
  id: number
  login: string
  name: string
  bio: string
  html_url: string
  avatar_url: string
  company?: string
  followers: number
}

export function ProfileCard() {
  const [user, setUser] = useState<ProfileData>({} as ProfileData)
  const [isLoading, setIsLoading] = useState(true)

  const getUserData = useCallback(async () => {
    try {
      const response = await api.get(`/users/${username}`)
      setIsLoading(true)
      setUser(response.data)
    } finally {
      setIsLoading(false)
    }
  }, [])

  useEffect(() => {
    getUserData()
  }, [getUserData])

  return (
      <div>
        <ProfileCardContainer>
          { isLoading ? <Spinner/> : (
              <>
                <div>
                  <img src={user.avatar_url} alt="" />
                </div>
          
                <ProfileInfoContainer>
                  <div>
                    <ProfileTitle>
                      <h1>{user.name}</h1>
                      <a 
                        href="https://github.com/albanogabriel"
                        target="_blank"
                        >
                          GITHUB
                      </a>
                    </ProfileTitle>
                    
                    <p>{user.bio ? (user.bio) : (<p>This user doesn't have a bio but should have </p>)}</p>
                  </div>
                  
                  <NavSocialMedia>
                    <a 
                      href={user.html_url}
                      target='_blank'
                      >
                      <FontAwesomeIcon icon={faGithub} /> 
                      {user.login}
                    </a>

                    {user.company && 
                      <span>
                        <FontAwesomeIcon icon={faBuilding} /> 
                        {user.company}
                      </span>
                    }

                    <span>
                      <FontAwesomeIcon icon={faUserGroup} /> 
                      {user.followers}
                    </span>
                  </NavSocialMedia>
                </ProfileInfoContainer>
              </>
            )  
          }
        </ProfileCardContainer>
      </div>
    )
}
