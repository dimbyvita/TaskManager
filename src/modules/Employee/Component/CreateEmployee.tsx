import { useState } from "react";
import { ErrorAdd } from "../services/Error";
import { AddProfilServ } from "../services/AddProfilServ";

const AddProfil = () => {
 const [success] = useState(false)

  return (
    <>
      {success ? (
        <ErrorAdd/>
      ) : (
        <AddProfilServ/>
      )}
    </>
  );
};

export default AddProfil;