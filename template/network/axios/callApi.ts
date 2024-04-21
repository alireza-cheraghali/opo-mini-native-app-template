import {ApiMethodEnums, CallApiType} from "./axios.types";
import axiosInstance from "./axiosInstance";
import {TResponseHeader} from "../response.types";
import {RoutesEnum} from "../../routes/routes.enum";


async function callApi<TPayload, TResponse>({
                                                method = ApiMethodEnums.GET,
                                                data,
                                                url,
                                                params,
                                                loginRequired,
                                                isFormData = false
                                            }: CallApiType<TPayload>): Promise<any> {
    try {
        let token;
        if (loginRequired) {
            token = JSON.parse(localStorage.getItem("haamiUserInformation") as string).state.jwtToken;
        }
        const response = await axiosInstance.request({
            method: method ? method : ApiMethodEnums.GET,
            data,
            url,
            params,
            headers: {
                "Content-Type": isFormData
                    ? "multipart/form-data"
                    : "application/json",
                Authorization: loginRequired ? `JWT ${token}` : ""
            }
        });
        return response.data as Promise<TResponse & TResponseHeader>;
    } catch (e: any) {

        if (e.response.status === 401) {
            return window.location.href = RoutesEnum.LOGIN
        }
        throw e;
    }
}

export default callApi;
