import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { confiremM_message, result_confirem, swalWithBootstrapButtons } from "../componants/Sweet Aleart/sweet_aleart";

export const clearCart = createAsyncThunk("clearCart/CartData", async () =>
{
    return await swalWithBootstrapButtons.fire(confiremM_message()).then((result) =>
    {
        result_confirem(result);
        return result.isConfirmed
    });
});
export const delteFromCart = createAsyncThunk("deleteFromCart/CartData", async () =>
{
    return await swalWithBootstrapButtons.fire(confiremM_message()).then((result) =>
    {
        result_confirem(result);
        return result.isConfirmed
    });
})
const chartSlice = createSlice({
    initialState: [],
    name: "chartData",
    reducers: {
        set_card_to_chart: (state, action) =>
        {
            const findCard = state.find(card => Number(card.id) === Number(action.payload.id));
            if (findCard)
            {
                findCard.count += 1;
            } else
            {
                state.push(action.payload);
            }
        }
    },
    extraReducers: (builder) =>
    {
        builder.addCase(clearCart.fulfilled, (state, action) =>
        {
            return action.payload ? [] : state;
        });
        builder.addCase(delteFromCart.fulfilled, (state, action) =>
        {
            return action.payload ? state.filter(card => Number(card.id) !== Number(action.meta.arg.id)) : state;
        })
    }
});

export const { set_card_to_chart, find_card_from_cart } = chartSlice.actions
export default chartSlice.reducer;