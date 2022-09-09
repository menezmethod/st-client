import {default as dayjs} from 'dayjs';

export const formatDate = (date: number) => dayjs(date).format('YYYY-MM-DDTHH:mm');

export const formatDateGrid = (date: Date | undefined) => dayjs(date).format('MMMM D, YYYY');

export const formatDateReports = (date: number) => dayjs(date).format('MMMM D, YYYY');

// Looks up role and if it finds it, returns the formatted name of the role for forms.
export const formatRoleForm = (role: any[]) => {
    if (role.some((newRole) => newRole.name === 'ROLE_ADMIN')) {
        return 'admin';
    } else if (role.some((newRole) => newRole.name === 'ROLE_MANAGER')) {
        return 'manager';
    } else if (role.some((newRole) => newRole.name === 'ROLE_LEAD')) {
        return 'lead';
    } else {
        return 'user';
    }
};