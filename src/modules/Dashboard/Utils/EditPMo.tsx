import { useState } from "react";

export function EditProfileModal({ onClose }: { onClose: () => void }) {
  const [name, setName] = useState("John Doe");
  const [email, setEmail] = useState("john@example.com");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: envoyer les infos au backend ou localStorage
    console.log("Updated profile:", { name, email });
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <form
        onSubmit={handleSubmit}
        className="bg-white dark:bg-slate-800 p-6 rounded-2xl w-full max-w-md shadow-xl text-black dark:text-white"
      >
        <h2 className="text-xl font-bold mb-4">Edit Profile</h2>
        <input
          className="w-full mb-3 p-2 rounded border dark:bg-slate-700"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className="w-full mb-3 p-2 rounded border dark:bg-slate-700"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <div className="flex justify-end gap-2">
          <button type="button" onClick={onClose} className="text-sm">Cancel</button>
          <button type="submit" className="bg-teal-500 text-white px-4 py-2 rounded">Save</button>
        </div>
      </form>
    </div>
  );
}
