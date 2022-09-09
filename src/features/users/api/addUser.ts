import {axios} from '@/lib/axios';
import {MutationConfig, queryClient} from '@/lib/react-query';
import {setSnackbar} from '@/redux/models/snackbar';
import createStore from '@/redux/createStore'
import {useMutation} from 'react-query';
import {User} from '../types';

export type AddUserDTO = {
    data: {
        fullName: string;
        email: string;
        password: string;
        role: 'Admin' | 'User' | 'Mod';
        timeRegistered: Date;
    };
};

export const addUser = ({data}: AddUserDTO): Promise<User> => {
    return axios.post(`/auth/register`, data);
};

type UseAddUserOptions = {
    config?: MutationConfig<typeof addUser>;
};

export const useAddUser = ({config}: UseAddUserOptions = {}) => {
    return useMutation({
        onMutate: async (newUser: AddUserDTO) => {
            await queryClient.cancelQueries('users');

            // const previousUsers = queryClient.getQueryData<User[]>('users');

            // queryClient.setQueryData('users', [...(previousUsers || []), newUser.data]);

            // return { previousUsers };
        },
        onError: (_, __, context: any) => {
            if (context?.previousUsers) {
                queryClient.setQueryData('users', context.previousUsers);
            }
        },
        onSuccess: () => {
            queryClient.invalidateQueries('users');
            createStore.dispatch(setSnackbar(true, 'success', 'User Created'));
        },
        mutationFn: addUser,
    });
};
