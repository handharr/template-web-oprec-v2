import * as actions from "./action";

//initial state for context
const initialState = {
  nim: "175150400111045",
  nama: "Puras Handharmahua",
  prodi: "Sistem Informasi",
  isLogged: false,
  status: 0,
};

//context reducer
export default function reducer(state = initialState, { type, payload }) {
  // console.log(type, payload)
  switch (type) {
    case actions.SET_LOGIN:
      return {
        ...state,
        nim: payload.nim,
        nama: payload.nama,
        isLogged: true,
      };
    case actions.SET_LOGOUT:
      return initialState;
    default:
      return state;
  }
}
