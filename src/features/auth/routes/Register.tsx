import { useNavigate } from 'react-router-dom';

import { queryClient } from '@/lib/react-query';

import { Layout } from '../components/Layout';
import { RegisterForm } from '../components/RegisterForm';

export const Register = () => {
  const navigate = useNavigate();
  const loggedIn = async () => {
    await queryClient.refetchQueries();
    navigate('/app');
  };
  return (
    <Layout title="Register your account">
      <RegisterForm onSuccess={loggedIn} />
    </Layout>
  );
};
