import { useState } from "react";
import Header from "./Components/Header.jsx";
import UserInput from "./Components/UserInput.jsx";
import Results from "./Components/Results.jsx";
function App() {
  const [userInput, setInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const handleChange = (inputIdentifier, newValue) => {
    setInput((prevUserInput) => ({
      ...prevUserInput,
      [inputIdentifier]: +newValue,
    }));
  };
  const isValidInput = userInput.duration>=1;
  return (
    <>
      <Header />
      <UserInput onChange={handleChange} userInput={userInput} />
      {!isValidInput && (<p>Please enter duration greater than 0 value.</p>)}
      {isValidInput && <Results input={userInput} />}
    </>
  );
}

export default App;
