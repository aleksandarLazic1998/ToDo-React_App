import { call,put } from "@redux-saga/core/effects";
import { setUsers } from "../../ducks/user";
import { getUserRequest } from "../requests/requestUsers";


export function* handleUserRequest(){
    try{
        const response = yield call(getUserRequest);
        const {data} = response;
        yield put(setUsers(data));
    }
    catch(error){
        console.log(error)
    }
}