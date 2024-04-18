import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    task: []
}

export const TodoSlice = createSlice({
    name: 'Todo',
    initialState,
    reducers: {
        addTask: (state, action) => {
            state.task.push({
                id: crypto.randomUUID(),
                title: action.payload,
                completed: false
            });
        },
        ToggleTask: (state, index) =>{
            const taskk = state.task.find((item) => item.id === index.payload)
            if(taskk)
            {
                taskk.completed = !taskk.completed
            }
        },
        EditTask: (state, index) =>{
            const taskk = state.task.find((item)=> item.id === index.payload.check_edit)
            if(taskk)
            {
                taskk.title = index.payload.trimmedInput;
            }
        },
        MurderTask: (state, index) =>{
            state.task = state.task.filter((item) => item.id !== index.payload );
        }
    }
});

export const {addTask, EditTask, MurderTask, ToggleTask} = TodoSlice.actions

export default TodoSlice.reducer