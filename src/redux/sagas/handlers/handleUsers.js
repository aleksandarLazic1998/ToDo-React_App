import { call, put } from "@redux-saga/core/effects";
import { fetchUsersSuccess, fetchUsersFailure } from "../../ducks/user";
import { getUserRequest } from "../requests/requestUsers";

export function* handleUserRequest() {
  try {
    const response = yield call(getUserRequest);
    const { data } = response;
    yield put(fetchUsersSuccess(data));
  } catch (error) {
    yield put(fetchUsersFailure(error.message));
  }
}
