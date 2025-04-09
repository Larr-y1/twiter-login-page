import Logo from './Logo';
import LoginForm from './LoginForm';

const AuthCard = () => {
  return (
    <div className="card p-4 shadow" style={{ width: '100%', maxWidth: '380px', backgroundColor: '#000', border: '1px solid #333', borderRadius: '16px' }}>
      <Logo />
      <h2 className="fw-bold mb-3 text-white">Sign in to X</h2>
      <LoginForm />
      <div className="text-muted mt-4">
        Don’t have an account?{' '}
        <a href="#" className="text-primary text-decoration-none">Sign up</a>
      </div>
    </div>
  );
};

export default AuthCard;
