import { ReactNode, createContext, useCallback, useEffect, useState } from "react"
import { api } from "../lib/axios"

export interface Issue {
  id: number
  number: number
  title: string
  body: string
  created_at: string
  updated_at: string
  html_url: string
  user: {
    login: string
  }
  comments: number
}

export interface issuesContextType {
  issues: Issue[] | null,
  getIssues: (query?: string) => Promise<void>
  isLoading: boolean
}

export const IssuesContext = createContext({} as issuesContextType)

interface IssuesContextProviderProps {
  children: ReactNode
}

export function IssuesContextProvider({ children }: IssuesContextProviderProps ) {
  const [issues, setIssues] = useState<Issue[]>([])
  const [isLoading, setIsLoading] = useState(true)

  const username = import.meta.env.VITE_GITHUB_USERNAME
  const repoName = import.meta.env.VITE_GITHUB_REPONAME

  const getIssues = useCallback(
    async (query: string = "") => {
      try {
        setIsLoading(true)
        const response = await api.get(`search/issues?q=${query}%20repo:${username}/${repoName}`)
        setIssues(response.data.items) //data.items porque é o objeto da requisição
      } catch (error) {
        console.log('error')
      } finally {
        setIsLoading(false)
      }
  },[repoName, username])

  useEffect(() => {
    getIssues()
  }, [])

  return (
    <IssuesContext.Provider value={{ issues, /* fetchIssue , */ getIssues, isLoading }} >
      {children}
    </IssuesContext.Provider>
  )
}