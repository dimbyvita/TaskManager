
export const RoleInputWithDatalist = ({ Role, setRole }: { Role: string; setRole: (value: string) => void }) => {

  return (
    <div>
      <label htmlFor="Role" className="text-sm font-medium text-teal-950">
        Role
      </label>
      <input
        id="Role"
        list='RoleOption'
        value={Role}
        onChange={(e) => setRole(e.target.value)}
        className="w-full px-4 py-3 border rounded-md border-transparent bg-transparent text-teal-800 hover:text-teal-900 hover:outline-none hover:ring-2 hover:ring-teal-400 transition-all duration-300"
        required
      />
      <datalist id='RoleOption'>
        <option value="admin"/>
        <option value="manager"/>
        <option value="supervisor"/>
      </datalist>
    </div>
  );
};
