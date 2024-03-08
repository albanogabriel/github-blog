import { useCallback, useEffect, useState } from "react";
import { Issue } from "../../contexts/issuesContext";
import { api } from "../../lib/axios";
import { useParams } from "react-router-dom";

import { Spinner } from "../../components/Spinner";
import { CompleteIssue } from "./CompleteIssue";

const username = import.meta.env.VITE_GITHUB_USERNAME
const repoName = import.meta.env.VITE_GITHUB_REPONAME

export function FullPost() {
  const [issueData, setIssueData] = useState<Issue>({} as Issue)
  const [isLoading, setIsLoading] = useState(true)

  const { id } = useParams()

  const getIssueDetails = useCallback(async () => {
    try {
      setIsLoading(true)
      const response = await api.get(`/repos/${username}/${repoName}/issues/${id}`)
      setIssueData(response.data)
    } finally {
      setIsLoading(false)
    }
  }, [issueData])

  useEffect(() => {
    getIssueDetails()
  }, [])

  return (
    <>
      {isLoading ? <Spinner/> : (
        <CompleteIssue data={issueData}/>
      )}
    </>
  )
} 