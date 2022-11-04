import { useNavigate } from 'react-router-dom';

import { queryClient } from '@/lib/react-query';

import { Layout } from '../components/Layout';
import { LoginForm } from '../components/LoginForm';

export const Login = () => {
  const navigate = useNavigate();
  const loggedIn = async () => {
    await queryClient.refetchQueries();
    navigate('/app');
  };
  return (
    <Layout title="Log in to your account">
      <LoginForm onSuccess={loggedIn} />
    </Layout>
  );
};
