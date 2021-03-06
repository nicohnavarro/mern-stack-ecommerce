import { createContext, useContext, useReducer } from "react";
import { profile, register } from "../../api/authApi";
import { AuthActions } from "../actions/authActions";
import { authReducer, initialState } from "../reducers/authReducer";

export const AuthContext = createContext(initialState);

export const useAuth = () => {
  const context = useContext(AuthContext);
  return context;
};

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  const signup = async ({ email, password }) => {
    dispatch({ type: AuthActions.AUTH_SIGNUP });

    try {
      const res = await register({ email, password });
      const { token } = res.data;
      console.log(token);
      const resUser = await profile(token);

      dispatch({
        type: AuthActions.AUTH_SIGNUP_SUCCESS,
        payload: {
          token,
          user: resUser.data,
        },
      });
    } catch (err) {
      if (err.response.data) {
        console.log(err);
        dispatch({
          type: AuthActions.AUTH_SIGNUP_ERROR,
          payload: err.response.statusText,
        });
      }
    }
  };

  return (
    <AuthContext.Provider value={{ ...state, signup }}>
      {children}
    </AuthContext.Provider>
  );
};
