import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getDataFromAPI = createAsyncThunk("cardData/fetchData", async () =>
{
    const response = await fetch("https://raw.githubusercontent.com/ProNabowy/e-commerce-json/main/data.json");
    const data = await response.json();
    return data;
});

const cardSlice = createSlice({
    initialState: [],
    name: "cardData",
    reducers: {},
    extraReducers: (builder) =>
    {
        builder.addCase(getDataFromAPI.fulfilled, (state, action) =>
        {
            return action.payload;
        })
    }
});

export default cardSlice.reducer