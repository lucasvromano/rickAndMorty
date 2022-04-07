import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Character {
  episode: Array<string>,
  gender: string,
  id: number,
  image: string,
  name: string,
  species: string,
  status: string,
  url: string
}

interface Episode {
  id: number,
  name: string,
  air_date: string,
  url: string
}

const rickAndMorty = createSlice({
  name: 'rickAndMorty',
  initialState: {
    characters: [
      {
        episode: [""],
        gender: "",
        id: 0,
        image: "",
        name: "",
        species: "",
        status: "",
        url: ""
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

    updateEpisodes(state, action: PayloadAction<any>) {
      // console.log(action.payload);
      // state.episodes = action.payload;
      state.episodes.push(action.payload);
    }
  }
});

export const { updateCharacters, updateEpisodes } = rickAndMorty.actions;
export default rickAndMorty.reducer;
