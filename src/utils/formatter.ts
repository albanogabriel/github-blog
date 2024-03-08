import moment from "moment"

export const dateFormatter = new Intl.DateTimeFormat('pt-BR')

export const priceFormatter = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
})

export function relativeDateFormatter(date: string) {
  // lib moment - para tempo relativo: há 1 mês, há 1 semana.. in main.tsx --> import moment from 'moment'     &     import 'moment/dist/locale/pt-br'    &    moment.locale('pt-br')
  return moment(date).fromNow()
}