import { useDispatch, useSelector } from 'react-redux';
import { Layout } from '../layouts/Layout';
import { Button } from '../components/ui';
import { GoogleLogin } from '../components/auth/GoogleLogin';

export const Home = () => {
  const dispatch = useDispatch();
  const authenticated = useSelector(({ auth }) => {
    return auth.authenticated;
  });
  return (
    <Layout>
      <div className="container mx-auto px-4 text-center pt-40">
        {authenticated ? (
          <Button
            skin="danger"
            onClick={() => {
              dispatch({
                type: 'auth/unsetUser',
              });
            }}
          >
            Logout
          </Button>
        ) : (
          <div className="flex justify-center">
            <GoogleLogin></GoogleLogin>
          </div>
        )}
      </div>
    </Layout>
  );
};