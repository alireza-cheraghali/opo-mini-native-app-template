import {useQuery} from "@tanstack/react-query";
import {MutationsEnum} from "../../../mutations.enum";
import {users} from "../../../serviceApi/auth/users";


const useUsers = (page: number) => {
    return useQuery({
        queryKey: [MutationsEnum.USERS],
        queryFn: () => users({page}),
    });
};

export default useUsers;
