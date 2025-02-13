import { create } from 'zustand';

export const useAskStore = create((set) => ({
   inputValue: '',
   isLoading: false,
   response: null,
   error: null,
   setInputValue: (value) => set({ inputValue: value }),
   sendQuestion: async (question) => {
      if (!question.trim()) return;
      set({ isLoading: true, error: null });
      try {
         const res = await fetch('https://your-api-url.com/ideas', {
            method: 'POST',
            headers: {
               'Content-Type': 'application/json',
               Authorization: `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`,
            },
            body: JSON.stringify({ question }),
         });
         const data = await res.json();
         set({ response: data, isLoading: false });
      } catch (error) {
         console.error('Ошибка при запросе:', error);
         set({ error: 'Не удалось отправить запрос', isLoading: false });
      }
   },
   clearResponse: () => set({ response: null }),
}));
