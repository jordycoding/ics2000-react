import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getLoggedIn } from "../utils/icsApiHelpers";

const fetchLoggedIn = createAsyncThunk("loggedIn/fetchLoggedIn", async () => {
    const resp = await getLoggedIn();
    return resp;
});

interface LoggedInState {
    loggedIn: boolean;
    loading: "idle" | "pending" | "succeeded" | "failed";
}

const initialState: LoggedInState = {
    loggedIn: false,
    loading: "idle",
};

const loggedInSlice = createSlice({
    name: "loggedIn",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchLoggedIn.fulfilled, (state, action) => {
            state.loggedIn = action.payload;
        });
    },
});

const { reducer } = loggedInSlice;

export default reducer;
export { fetchLoggedIn };
