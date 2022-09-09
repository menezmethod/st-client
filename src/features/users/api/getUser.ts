import {axios} from '@/lib/axios';
import {useQuery} from 'react-query';

export type GetUserDTO = {
    userId: string;
};

export const getUser = ({userId}: GetUserDTO) => {
    return axios.get(`/user/${userId}`);
};

export const useUser = ({userId}: GetUserDTO) => {
    return useQuery({
        queryKey: ['user', userId],
        queryFn: () => getUser({userId}),
    });
};
