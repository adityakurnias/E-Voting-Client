import type {
  DashboardResponse,
  NotVoteItem,
  NotVoteResponse,
  VotingLog,
  VotingLogsResponse,
} from "~/types/main.type";

export const useDashboard = () => {
  const config = useRuntimeConfig();
  const token =
    typeof window !== "undefined" ? localStorage.getItem("token") : null;

  const mpkData = ref<{ labels: string[]; values: number[] }>({
    labels: [],
    values: [],
  });

  const osisData = ref<{ labels: string[]; values: number[] }>({
    labels: [],
    values: [],
  });

  const totalVotes = ref(0);
  const mpkVotes = ref(0);
  const osisVotes = ref(0);

  const logs = ref<VotingLog[]>([]);
  const loading = ref(false);
  const error = ref<string | null>(null);

  const notVoteData = ref<NotVoteItem[]>([]);
  // const loadingNotVote = ref(false);
  const errorNotVote = ref<string | null>(null);

  const fetchOsis = async () => {
    try {
      const res = await $fetch<DashboardResponse>(
        `${config.public.apiUrl}/admin/dashboard-osis`,
        {
          method: "GET",
          headers: {
            authorization: `Bearer ${token}`,
          },
        }
      );

      if (res.success) {
        osisData.value.labels = res.data.map((c) => c.name);
        osisData.value.values = res.data.map((c) => c.total_vote);
        osisVotes.value = res.data.reduce((acc, c) => acc + c.total_vote, 0);

        console.log(osisData.value);
      }
    } catch (err) {
      console.error("Error fetch OSIS:", err);
    }
  };

  const fetchMpk = async () => {
    try {
      const res = await $fetch<DashboardResponse>(
        `${config.public.apiUrl}/admin/dashboard-mpk`,
        {
          method: "GET",
          headers: {
            authorization: `Bearer ${token}`,
          },
        }
      );

      if (res.success) {
        mpkData.value.labels = res.data.map((c) => c.name);
        mpkData.value.values = res.data.map((c) => c.total_vote);
        mpkVotes.value = res.data.reduce((acc, c) => acc + c.total_vote, 0);

        console.log(mpkData.value);
      }
    } catch (err) {
      console.error("Error fetch MPK:", err);
    }
  };

  const fetchAll = async () => {
    await Promise.all([fetchOsis(), fetchMpk()]);
    totalVotes.value = osisVotes.value + mpkVotes.value;
  };

  const votingLogs = async () => {
    try {
      const res = await $fetch<VotingLogsResponse>(
        `${config.public.apiUrl}/voting/voting-logs`,
        {
          method: "GET",
          headers: {
            authorization: `Bearer ${token}`,
            accept: "application/json",
          },
        }
      );

      if (res.success) {
        logs.value = res.data;
        console.log(logs.value)
      } else {
        error.value = res.message;
      }
    } catch (err: any) {
      error.value = err.message || "Gagal mengambil data voting logs";
    } finally {
      loading.value = false;
    }
  };

  const fetchNotVote = async () => {
     try {
    const res = await $fetch<NotVoteResponse>(`${config.public.apiUrl}/admin/kelas-belum-vote-osis`, {
      method: "GET",
      headers: {
        "authorization": `Bearer ${token}`,
        "accept": "application/json"
      }
    })

    notVoteData.value = res.data || []
  } catch (err: any) {
    errorNotVote.value = err.message || "Gagal ambil data Not Vote"
  } finally {
    loading.value = false
  }
  };

  return {
    
    mpkData,
    osisData,
    totalVotes,
    mpkVotes,
    osisVotes,
    fetchMpk,
    fetchOsis,
    fetchAll,
    logs,
    loading,
    error,
    votingLogs,
    fetchNotVote,
    notVoteData
  };
};
