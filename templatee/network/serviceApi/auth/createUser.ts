import callApi from "../../axios/callApi";
import {UrlsEnum} from "../../urls.enum";
import {ApiMethodEnums} from "../../axios/axios.types";


export const createUser = async (data: TCreateUserRequest) =>
    await callApi<TCreateUserRequest, TCreateUserResponse>({
        url: UrlsEnum.CREATE_USER,
        method: ApiMethodEnums.POST,
        loginRequired: false,
        data: {
            name: data.name,
            job: data.job
        }
    });


interface TCreateUserResponse {
    name: string,
    job: string,
    id: string,
    createdAt: Date
}

interface TCreateUserRequest {
    name: string,
    job: string,
}
