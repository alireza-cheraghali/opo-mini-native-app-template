import callApi from "../../axios/callApi";
import {UrlsEnum} from "../../urls.enum";
import {ApiMethodEnums} from "../../axios/axios.types";


export const users = async (data: TUsersParams) =>
    await callApi<{}, TUserResponse>({
        url: UrlsEnum.USERS,
        method: ApiMethodEnums.GET,
        loginRequired: false,
        params: {
            page: data.page
        }
    });


interface TUserResponse {

}

interface TUsersParams {
    page: number,
}
