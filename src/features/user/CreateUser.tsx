import { useState, FormEvent } from "react";

const CreateUser = () => {
  const [username, setUsername] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <p>👋 Welcome! Please start by telling us your name:</p>

      <input type="text" placeholder="Your full name" value={username} onChange={(e) => setUsername(e.target.value)} />

      {username !== "" && (
        <div>
          <button>Start ordering</button>
        </div>
      )}
    </form>
  );
};

export default CreateUser;
