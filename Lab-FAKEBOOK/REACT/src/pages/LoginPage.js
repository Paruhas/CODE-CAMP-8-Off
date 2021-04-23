import Header from '../components/layout/Header';
import Login from '../components/auth/Login';
import Register from '../components/auth/Register';

function LoginPage() {
  return (
    <>
      <Header />
      <main className="container">
        <h1 className="text-center">
          Welcome to Fakebuck CC8 <br />
          <small>Mini simple clone.</small>
        </h1>
        <div className="row">
          <Login />
          <Register />
        </div>
      </main>
    </>
  );
}

export default LoginPage;
