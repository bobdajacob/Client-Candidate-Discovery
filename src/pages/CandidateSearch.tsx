import { useState, useEffect } from "react";
import { searchGithub, searchGithubUser } from "../api/API";
import type Candidate from "../interfaces/Candidate.interface.js";


const CandidateSearch = () => {
  const dataFromStorage: string | null = localStorage.getItem("savedCandidates");
  const savedCandidates: Candidate[] = JSON.parse(dataFromStorage || "[]")


  const [currentCandidate, setCandidate] = useState<Candidate>({
    name: '',
    username: '',
    location: '',
    avatar_url: '',
    email: '',
    html_url: '',
    company: '',
    bio: '',
  });

  const [currentIndex, setCurrentIndex] = useState(0);

  const fetchCandidate = async () => {
    try {
      const candidateData = await searchGithub();
      const firstCandidate = candidateData[currentIndex];
      const candidateDetails = await searchGithubUser(firstCandidate.login);
      setCandidate({
        name: candidateDetails.name,
        username: candidateDetails.login,
        avatar_url: candidateDetails.avatar_url,
        location: candidateDetails.location || 'No location provided.',
        email: candidateDetails.email || 'No email provided.',
        html_url: candidateDetails.html_url,
        company: candidateDetails.company || 'No company provided.',
        bio: candidateDetails.bio || 'No biography provided',
      });
    } catch (err) {
      console.error("Error fetching candidate:");
    }
  };

  useEffect(() => {
    fetchCandidate();
  }, [currentIndex]);

  function nextClickHandler() {
    setCurrentIndex(currentIndex + 1);
  }

  function saveClickHandler(){
    savedCandidates.push(currentCandidate)
    localStorage.setItem("savedCandidates", JSON.stringify(savedCandidates));
  }

  return (
    <div>
      <h1>CandidateSearch</h1>
      <div>
        <img src={currentCandidate.avatar_url} />
        <h2>Name: {currentCandidate.name}</h2>
        <p>Username: {currentCandidate.username}</p>
        <p>Location: {currentCandidate.location}</p>
        <p>Email: {currentCandidate.email}</p>
        <p>Company: {currentCandidate.company}</p>
        <p>Bio: {currentCandidate.bio}</p>
      </div>
      <button onClick={nextClickHandler} style={{ backgroundColor: 'red', borderRadius: '50px', fontWeight: 'bold', fontSize: '25px', padding: '10px 20px', margin: '50px'}}>-</button>
      <button onClick={saveClickHandler} style={{ backgroundColor: 'green', borderRadius: '50px', fontWeight: 'bold', fontSize: '25px', padding: '10px 20px', margin: '50px'}}>+</button>
    </div>
  );
};

export default CandidateSearch;
