import { useState } from 'react';

const LoginForm = () => {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Logging in as: ${input}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <input
          type="text"
          placeholder="Phone, email, or username"
          className="form-control bg-dark text-white border border-secondary"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          required
        />
      </div>

      <button type="submit" className="btn btn-primary w-100 mb-3 rounded-pill">
        Next
      </button>

      <button type="button" className="btn btn-outline-secondary w-100 mb-3 rounded-pill text-white">
        Forgot password?
      </button>
    </form>
  );
};

export default LoginForm;
