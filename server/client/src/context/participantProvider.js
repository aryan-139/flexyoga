import React, { useState } from "react";
import participantContext from "./participantContext";

const ParticipantProvider = ({ children }) => {
  const [participant, setParticipant] = useState(null);

  const updateParticipant = (newParticipant) => {
    setParticipant(newParticipant);
  };

  return (
    <participantContext.Provider
      value={{
        participant,
        updateParticipant,
      }}
    >
      {children}
    </participantContext.Provider>
  );
};

export default ParticipantProvider;
