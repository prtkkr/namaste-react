import { useRouteError } from 'react-router-dom';

const ErrorPage = () => {
  const err = useRouteError();
  return (
    <div>
      <h1 style={{ color: 'red' }}>{`${err.status} - ${err.statusText}`}</h1>
      <h3>{err?.error?.message}</h3>
      <p>
        <i>{err?.error?.stack}</i>
      </p>
    </div>
  );
};

export default ErrorPage;
