import { watch } from 'vue';

export const useVote = () => {
  const config = useRuntimeConfig();
  const token = typeof window !== 'undefined' ? localStorage.getItem("token") : null;

  const getInitialState = <T>(key: string, defaultValue: T): T => {
    if (typeof window === 'undefined') {
      return defaultValue;
    }
    const storedValue = localStorage.getItem(key);
    if (storedValue) {
      try {
        return JSON.parse(storedValue);
      } catch (e) {
        localStorage.removeItem(key);
        return defaultValue;
      }
    }
    return defaultValue;
  };

  const selectedOsis = useState<number | null>('selectedOsis', () => getInitialState('selectedOsis', null));
  const selectedMpk = useState<number | null>('selectedMpk', () => getInitialState('selectedMpk', null));

  if (typeof window !== 'undefined') {
    watch(selectedOsis, (newValue) => {
      if (newValue === null) {
        localStorage.removeItem('selectedOsis');
      } else {
        localStorage.setItem('selectedOsis', JSON.stringify(newValue));
      }
    });

    watch(selectedMpk, (newValue) => {
      if (newValue === null) {
        localStorage.removeItem('selectedMpk');
      } else {
        localStorage.setItem('selectedMpk', JSON.stringify(newValue));
      }
    });
  }

  /**
   * Fungsi untuk menyimpan pilihan kandidat sementara.
   * @param type - Tipe kandidat, 'osis' atau 'mpk'.
   * @param id - ID kandidat yang dipilih.
   */
  const selectCandidate = (type: 'osis' | 'mpk', id: number) => {
    if (type === 'osis') {
      selectedOsis.value = selectedOsis.value === id ? null : id;
    } else if (type === 'mpk') {
      selectedMpk.value = selectedMpk.value === id ? null : id;
    }
  };

  const submitVote = async () => {
    if (selectedOsis.value === null || selectedMpk.value === null) {
      alert('Anda harus memilih satu kandidat OSIS dan satu kandidat MPK.');
      return;
    }

    try {
      const response = await $fetch(`${config.public.apiUrl}/voting/vote`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: {
          osis_id: selectedOsis.value,
          mpk_id: selectedMpk.value,
        },
      });

      selectedOsis.value = null;
      selectedMpk.value = null;

      alert('Terima kasih, vote Anda telah berhasil dikirim!');
      return response;

    } catch (error: any) {
      console.error("Gagal mengirim vote:", error.data);
      alert(error.data?.message || 'Terjadi kesalahan saat mengirim vote.');
      throw error;
    }
  };

  return {
    selectedOsis,
    selectedMpk,
    selectCandidate,
    submitVote,
  };
};
