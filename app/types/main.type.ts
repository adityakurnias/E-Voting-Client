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


export interface NotVoteItem {
  kelas: string
  total: number
  sudah_vote: number
  belum_vote: number
}

export interface NotVoteListResponse {
  success: boolean;
  message: string;
  data: NotVoteItem[];
}

export interface Student {
  id: number;
  name: string;
  class: string;
}

export interface StudentListResponse {
  success: boolean;
  kelas: string;
  data: Student[];
}

export interface VotingLogUser {
  id: number;
  name: string;
  class: string;
  nis: string;
  osis_vote: number;
  mpk_vote: number;
  total_vote: number;
  role: string;
  remember_token: null;
  created_at: string;
  updated_at: string;
}

export interface VotingLogItem {
  id: number;
  user_id: number;
  voted_osis: number;
  voted_mpk: number;
  created_at: string;
  updated_at: string;
  user: VotingLogUser;
}

export interface VotingLogsData {
  current_page: number;
  data: VotingLogItem[];
  first_page_url: string;
  from: number;
  last_page: number;
  last_page_url: string;
  links: Array<{
    url: string | null;
    label: string;
    active: boolean;
    page: number | null;
  }>;
  next_page_url: string | null;
  path: string;
  per_page: number;
  prev_page_url: string | null;
  to: number;
  total: number;
}

export interface VotingLogsResponse {
  success: boolean;
  message: string;
  data: VotingLogsData;
}




