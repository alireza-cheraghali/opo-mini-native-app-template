export enum ApiMethodEnums {
    GET = "GET",
    POST = "POST",
    DELETE = "DELETE",
    PATCH = "PATCH"
}

export interface CallApiType<TPayload> {
    method?: ApiMethodEnums;
    data?: TPayload;
    url: string;
    loginRequired?: boolean;
    params?: { [name: string]: any };
    isFormData?: boolean;
}

export interface TGeneralResponse {
    title: string;
    status: number;
    errors?: { ErrorMessage: string };
}
