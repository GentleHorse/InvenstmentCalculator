import { useState } from "react";

import Header from "./components/Header.jsx";
import UserInput from "./components/UserInput.jsx";
import ResultTable from "./components/ResultTable.jsx";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const inputIsValid = userInput.duration >= 1;

  const changeHandler = (inputIdentifier, newValue) => {
    setUserInput((prevUseInput) => {
      return {
        ...prevUseInput,
        [inputIdentifier]: +newValue,
      };
    });
  };

  return (
    <>
      <Header />
      <UserInput userInput={userInput} onChange={changeHandler} />
      {!inputIsValid && <p className="center">Please enter a duration greater than zero</p>}
      {inputIsValid && <ResultTable input={userInput} />}
    </>
  );
}

export default App;
