const INITIAL_STATE = {
    id: null,
    username: "",
    name: "",
    email : "",
    phone : "",
}

const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'LOGIN':
            return {
                ...state,
                id: action.payload.id,
                username: action.payload.username,
                name: action.payload.name,
                email : action.payload.email,
                phone : action.payload.phone,
            }
        default:
            return state
    } 
} 

export default userReducer

