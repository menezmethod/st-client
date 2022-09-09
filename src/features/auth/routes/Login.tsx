import {useNavigate} from 'react-router-dom';

import {Head} from '@/components/Head';
import {LoginForm} from "@/features/auth/components/LoginForm";

export const Login = () => {
    const navigate = useNavigate();

    return (
        <>
            <Head title="Sign in"/>
            <LoginForm onSuccess={() => navigate('/')}/>
        </>
    );
};
