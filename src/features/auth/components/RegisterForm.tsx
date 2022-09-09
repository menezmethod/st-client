import React from 'react';

type RegisterValues = {
    fullName: string;
    email: string;
    password: string;
    timeRegistered: Date;
};

type RegisterFormProps = {
    onSuccess: () => void;
};

export const RegisterForm = ({onSuccess}: RegisterFormProps) => {
    return (
        <div>

        </div>
    );
};