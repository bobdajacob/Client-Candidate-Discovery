import Candidate from "../interfaces/Candidate.interface";
// import CandidateSearch from "./CandidateSearch";
import { useState, useEffect } from "react";

const SavedCandidates = () => {
  const [candidateList, setCandidateList] = useState<Candidate[]>([]);

  useEffect(() => {
    const dataFromStorage: string | null =
      localStorage.getItem("savedCandidates");
    const savedCandidates: Candidate[] = JSON.parse(dataFromStorage || "[]");
    setCandidateList(savedCandidates);
  }, []);

  const handleReject = (candidateToReject: Candidate) => {
    const updatedCandidates = candidateList.filter(
      (candidate) => candidate !== candidateToReject
    );
    setCandidateList(updatedCandidates);
    localStorage.setItem("savedCandidates", JSON.stringify(updatedCandidates));
  };

  return (
    <>
      <h1>Potential Candidates</h1>
      <table>
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Location</th>
            <th>Email</th>
            <th>Company</th>
            <th>Bio</th>
            <th>Reject</th>
          </tr>
        </thead>
        <tbody>
          {candidateList.map((candidate) => (
            <tr key={candidate.email}>
              <td className="table">
                <img src={candidate.avatar_url} />
              </td>
              <td className="table">{candidate.name}</td>
              <td className="table">{candidate.location}</td>
              <td className="table">{candidate.email}</td>
              <td className="table">{candidate.company}</td>
              <td className="table">{candidate.bio}</td>
              <td className="table">
                <button
                  onClick={() => handleReject(candidate)}
                  style={{
                    backgroundColor: "red",
                    borderRadius: "50px",
                    fontWeight: "bold",
                    fontSize: "25px",
                    padding: "10px 20px",
                    margin: "50px",
                  }}
                >
                  -
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default SavedCandidates;
