import {useNavigate} from 'react-router-dom';
import {RegisterForm} from "@/features/auth/components/RegisterForm";

export const Register = () => {
    const navigate = useNavigate();

    return (
        <div>
            <RegisterForm onSuccess={() => navigate('/dashboard')}/>
        </div>
    );
};
