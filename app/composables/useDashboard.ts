import type {
  DashboardResponse,
  NotVoteItem,
  NotVoteListResponse,
  Student,
  VotingLog,
  VotingLogsResponse,
  StudentListResponse,
  VotingLogItem,
} from "~/types/main.type";

export const useDashboard = () => {
  const config = useRuntimeConfig();
  const token = typeof window !== "undefined" ? localStorage.getItem("token") : null;

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

  const logs = ref<VotingLogItem[]>([]);
  const loading = ref(false);
  const error = ref<string | null>(null);

  const notVoteData = ref<NotVoteItem[]>([]);
  const students = ref<Student[]>([]);
  const errorNotVote = ref<string | null>(null);

  const selectedKelas = ref("");
  const daftarKelas = ref<string[]>([]);
  const showNotVoteModal = ref(false);

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

  // Logging
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
        console.log(res.data.data)
        logs.value = res.data.data;
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
      const res = await $fetch<NotVoteListResponse>(`${config.public.apiUrl}/admin/kelas-belum-vote-osis`, {
        method: "GET",
        headers: {
          "authorization": `Bearer ${token}`,
          "accept": "application/json"
        }
      })

      if (res.success) {
        notVoteData.value = res.data;
      }

    } catch (err: any) {
      errorNotVote.value = "Gagal ambil data siswa per kelas";
    } finally {
      loading.value = false
    }
  };

  const fetchDaftarKelas = async () => {
    daftarKelas.value = [
      "X.RPL-1",
      "X.RPL-2",
      "X.TOI-1",
      "X.TKJ-1",
      "X.TKJ-2",
      "X.DKV-1",
      "X.DKV-2",
      "X.DKV-3",
      "X.LPB-1",
      "X.LPB-2",
      "XI.RPL-1",
      "XI.RPL-2",
      "XI.TKJ-1",
      "XI.TKJ-2",
      "XI.TKJ-3",
      "XI.DKV-1",
      "XI.DKV-2",
      "XI.DKV-3",
      "XI.DKV-4",
      "XI.LPB-1",
      "XI.LPB-2",
      "XII.RPL-1",
      "XII.RPL-2",
      "XII.RPL-3",
      "XII.TKJ-1",
      "XII.TKJ-2",
      "XII.MM-1",
      "XII.MM-2",
      "XII.MM-3",
      "XII.MM-4",
      "XII.PKM-1",
      "XII.PKM-2",
    ];
  };

  const fetchSiswaByKelas = async (kelas: string) => {
    if (!kelas) return;
    loading.value = true;
    try {
      const res = await $fetch<StudentListResponse>(
        `${config.public.apiUrl}/admin/kelas/${kelas}/osis-belum-vote`,
        {
          method: "GET",
          headers: {
            authorization: `Bearer ${token}`,
          },
        }
      );
      students.value = res.data;
      console.log(res);
    } catch (err) {
      console.error(err);
    } finally {
      loading.value = false;
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
    notVoteData,
    students,
    selectedKelas,
    daftarKelas,
    showNotVoteModal,
    fetchDaftarKelas,
    fetchSiswaByKelas
  };
};
