import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const rickAndMorty = createSlice({
  name: 'rickAndMorty',
  initialState: {
    characters: [
      {
        id: 0,
        name: "",
        gender: "",
        status: "",
        specie: "",
        image: "",
        episode: [""]
      }
    ],
    episodes: [
      {
        id: 0,
        name: "",
        air_date: "",
        url: ""
      }
    ]
  },
  reducers: {
    updateCharacters(state, action: PayloadAction<[Character]>) {
      state.characters = action.payload;
    },

    updateEpisodes(state, action: PayloadAction<Episode>) {
      state.episodes.push(action.payload);
    }
  }
});

export const { updateCharacters, updateEpisodes } = rickAndMorty.actions;
export default rickAndMorty.reducer;
