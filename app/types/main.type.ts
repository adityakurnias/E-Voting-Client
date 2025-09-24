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

export interface UserLog {
  id: number
  name: string
  class: string | null
  nis: string
  osis_vote: number
  mpk_vote: number
  total_vote: number
  role: string
  created_at: string
  updated_at: string
}

export interface VotingLog {
  id: number
  user_id: number
  voted_osis: number
  voted_mpk: number
  created_at: string
  updated_at: string
  user: UserLog
}

export interface VotingLogsResponse {
  success: boolean
  message: string
  data: VotingLog[]
}

export interface NotVoteItem {
  kelas: string
  total: number
  sudah_vote: number
  belum_vote: number
}

// export interface NotVoteResponse {
//   success: boolean
//   message: string
//   data: NotVoteItem[]
// }

export interface Student {
  id: number;
  name: string;
  class: string;
}

export interface NotVoteResponse {
  success: boolean;
  kelas: string;
  data: Student[];
}




