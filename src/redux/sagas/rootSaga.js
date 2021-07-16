import { takeLatest } from "@redux-saga/core/effects";
import { GET_USERS } from "../ducks/user";
import { handleUserRequest } from "./handlers/handleUsers";

export function* getUsersData() {
yield takeLatest(GET_USERS,handleUserRequest);
}
