import {useMutation} from "@tanstack/react-query";
import {createUser} from "../../../serviceApi/auth/createUser";
import {MutationsEnum} from "../../../mutations.enum";


const useCreateUser = () => {
    return useMutation({
        mutationKey: [MutationsEnum.CREATE_USER],
        mutationFn: createUser,
        onSuccess: (data) => {

        }
    });
};

export default useCreateUser;
