import { AppThunk, AppDispatch } from './../../utils/store';
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
      state.episodes.push(action.payload);
    }
  }
});

export const sleep = (ms: number) => {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export const addEpisodes = async (episodes: any, dispatch: AppDispatch) => {
  await sleep(3000);
  dispatch(updateCharacters(episodes))
}

export const { updateCharacters, updateEpisodes } = rickAndMorty.actions;
export default rickAndMorty.reducer;
