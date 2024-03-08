import { useContext } from "react";
import { SearchFormContainer } from "./styles";
import { z } from 'zod'
import { IssuesContext } from "../../../../../contexts/issuesContext";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const searchFormSchema = z.object({
  query: z.string()
})

type SearchFormSchema = z.infer<typeof searchFormSchema>

export function SearchBar() {
  const { issues, getIssues } = useContext(IssuesContext)

  const { register, handleSubmit, reset } = useForm<SearchFormSchema>({
    resolver: zodResolver(searchFormSchema),
    defaultValues: {
      query: ''
    }
  })

  async function handleSearchIssues(data: SearchFormSchema) {
    await getIssues(data.query)
    reset()
  }

  return (
    <SearchFormContainer >
      <div>
        <h3>Publicações</h3>
        <span>{issues?.length} publicações</span>
      </div>

      <form onSubmit={handleSubmit(handleSearchIssues)}>
        <input 
          type="text"
          placeholder="Buscar conteúdo"
          {...register('query')} 
        />
      </form>

    </SearchFormContainer>
  )
}