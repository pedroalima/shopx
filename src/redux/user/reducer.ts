const initialState = {
	currentUser: null,
};

type UserActionType = {
    type: "user/login";
    payload?: number;
};

export const userReducer = (state = initialState, action: UserActionType) => {
	switch(action.type) {
	case "user/login":
		return {...state, currentUser: 1};
	default: 
		return state;
	}
};