import React, { useState } from "react";
import { ErrorAdd } from "../services/Error";
import { AddProfilServ } from "../services/AddProfilServ";

const AddProfil = () => {
 const [success, setSuccess] = useState(false)

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