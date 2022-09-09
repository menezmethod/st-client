import {axios} from '@/lib/axios';
import {MutationConfig, queryClient} from '@/lib/react-query';
import {setSnackbar} from '@/redux/models/snackbar';
import createStore from '@/redux/createStore'
import {useMutation} from 'react-query';
import {User} from '../types';

export type EditUserDTO = {
    data: {
        userName: string;
        password: string
        fullName: string;
        timeRegistered: Date;
    };
    Id: string;
};

export const editUser = ({data, Id}: EditUserDTO): Promise<User> => {
    return axios.patch(`/user/${Id}`, data);
};

type UseEditUserOptions = {
    config?: MutationConfig<typeof editUser>;
};

export const useEditUser = ({config}: UseEditUserOptions = {}) => {
    return useMutation({
        onMutate: async (editingUser: any) => {
            await queryClient.cancelQueries(['user', editingUser?.userId]);

            const previousUser = queryClient.getQueryData<User>(['user', editingUser?.userId]);

            queryClient.setQueryData(['user', editingUser?.userId], {
                ...previousUser,
                ...editingUser.data,
                id: editingUser.userId,
            });

            return {previousUser};
        },
        onError: (_, __, context: any) => {
            if (context?.previousUser) {
                queryClient.setQueryData(['user', context.previousUser.id], context.previousUser);
            }
        },
        onSuccess: (data) => {
            queryClient.refetchQueries(['users', data.id]);
            queryClient.invalidateQueries(['user', data.id]);
            createStore.dispatch(setSnackbar(true, 'success', 'User Updated'));
        },
        ...config,
        mutationFn: editUser,
    });
};
