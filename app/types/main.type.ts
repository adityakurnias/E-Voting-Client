export interface Candidate {
  id: number
  name: string
  total_vote: number
}

export interface DashboardResponse {
  success: boolean
  message: string
  data: Candidate[]
}
