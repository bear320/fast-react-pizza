import { useState, FormEvent } from "react";

const CreateUser = () => {
  const [username, setUsername] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <p className="mb-4 text-sm text-stone-600 md:text-base">
        👋 Welcome! Please start by telling us your name:
      </p>

      <input
        type="text"
        placeholder="Your full name"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="w-72"
      />

      {username !== "" && (
        <div>
          <button>Start ordering</button>
        </div>
      )}
    </form>
  );
};

export default CreateUser;
