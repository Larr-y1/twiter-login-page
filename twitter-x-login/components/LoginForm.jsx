import { useState } from 'react';

const LoginForm = () => {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Login with: ${input}`);
  };

  return (
    <>
      <div className="d-grid gap-2 mb-3">
        <button className="btn btn-outline-light rounded-pill py-2 d-flex align-items-center justify-content-center gap-2">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg"
            alt="Google"
            width="20"
            height="20"
          />
          Sign in with Google
        </button>

        <button className="btn btn-outline-light rounded-pill py-2 d-flex align-items-center justify-content-center gap-2">
          <svg viewBox="0 0 24 24" fill="white" width="18" height="18">
            <path d="M16.365 1.43c0 1.14-.428 2.012-1.28 2.613-.69.51-1.45.796-2.28.855-.06-.1-.12-.186-.17-.27a2.66 2.66 0 01-.29-1.43c0-.9.34-1.67.99-2.3.66-.63 1.44-.96 2.36-.99.01.17.01.34.01.52zM19.44 15.18c-.33.82-.83 1.54-1.5 2.18-.56.54-1.14.98-1.74 1.31-.55.28-1.1.42-1.66.42-.43 0-.96-.14-1.58-.42-.61-.28-1.13-.42-1.57-.42-.49 0-1.04.14-1.64.42-.61.28-1.09.42-1.43.42-.53 0-1.08-.14-1.64-.42-.57-.28-1.11-.7-1.64-1.25C2.75 16.68 2 14.81 2 12.79c0-1.26.26-2.38.78-3.35.52-.97 1.21-1.77 2.08-2.4a5.41 5.41 0 012.89-.97c.55 0 1.22.17 2 .5.77.33 1.3.5 1.56.5.18 0 .77-.19 1.76-.56.94-.34 1.74-.48 2.39-.4 1.77.15 3.1.85 3.99 2.12-1.55.94-2.32 2.24-2.32 3.9 0 1.14.32 2.09.96 2.83.28.35.67.68 1.16.99z" />
          </svg>
          Sign in with Apple
        </button>
      </div>

    
      <div className="d-flex align-items-center text-secondary my-3">
        <hr className="flex-grow-1 border-secondary" />
        <span className="px-2 small">or</span>
        <hr className="flex-grow-1 border-secondary" />
      </div>

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <input
            type="text"
            className="form-control bg-dark text-white border border-secondary rounded p-3"
            placeholder="Phone, email, or username"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            required
          />
        </div>

        <button className="btn btn-light w-100 rounded-pill fw-bold py-2 mb-3" type="submit">
          Next
        </button>

        <button className="btn btn-outline-secondary w-100 rounded-pill py-2 text-white mb-4" type="button">
          Forgot password?
        </button>
      </form>     
    </>
  );
};

export default LoginForm;

