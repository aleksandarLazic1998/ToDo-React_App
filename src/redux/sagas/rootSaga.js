import { takeLatest } from "@redux-saga/core/effects";
import { FETCH_USERS_ } from "../ducks/user";
import { handleUserRequest } from "./handlers/handleUsers";

export function* getUsersData() {
yield takeLatest(FETCH_USERS_,handleUserRequest);
}
