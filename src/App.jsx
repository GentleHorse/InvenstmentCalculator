import { useState } from "react";

import Header from "./components/Header.jsx";
import UserInput from "./components/UserInput.jsx";
import ResultTable from "./components/ResultTable.jsx";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 0,
    annualInvestment: 0,
    expectedReturn: 0,
    duration: 0,
  });

  return (
    <>
      <Header />
      <UserInput onInput={setUserInput}/>
      <ResultTable inputData={userInput}/>
    </>
  );
}

export default App;
