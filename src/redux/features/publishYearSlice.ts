import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  allYears: [],
};

const publicationYearSlice = createSlice({
  name: 'publicationYear',
  initialState,
  reducers: {
    handlePublicationYear: (state, action) => {
      const uniqueValues: any[] = [];
      const allData = action.payload;
      allData.filter((data) => {
        if (!uniqueValues.includes(data?.publicationYear)) {
          uniqueValues.push(data?.publicationYear);
        }
      });

      state.allYears = [...uniqueValues];
    },
  },
});

export const { handlePublicationYear } = publicationYearSlice.actions;

export default publicationYearSlice.reducer;
