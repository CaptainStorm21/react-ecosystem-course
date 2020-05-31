import { CREATE_TODO, REMOVE_TODO } from './actions';

export const todos = (state, action) => {
    
    const { type, payload } = action;

    switch (type) {
        case CREATE_TODO: {
            const { text } = payload;
            const newTodo = {
                text,
                isCompleted: false,
            }
        }
        
        case REMOVE_TODO: {

        }
    }

    return state;

}