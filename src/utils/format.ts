import { default as dayjs } from 'dayjs';

export const formatDate = (date: number) => dayjs(date).format('MMMM D, YYYY h:mm A');
export const formatDateForm = (date: string | undefined) => dayjs(date).format('YYYY-MM-DDThh:mm');
export const formatDateFormShort = (date: string | undefined) => dayjs(date).format('YYYY-MM-DD');
export const formatDateShort = (date: number) => dayjs(date).format('MMMM D, YYYY');
