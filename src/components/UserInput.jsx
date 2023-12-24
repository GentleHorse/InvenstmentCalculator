export default function UserInput({ onInput }) {
  const initialInvestmentHandler = (event) => {
    onInput((prevInput) => {
      return {
        ...prevInput,
        initialInvestment: parseInt(event.target.value),
      };
    });
  };

  const annualInvestmentHandler = (event) => {
    onInput((prevInput) => {
      return {
        ...prevInput,
        annualInvestment: parseInt(event.target.value),
      };
    });
  };

  const expectedReturnHandler = (event) => {
    onInput((prevInput) => {
      return {
        ...prevInput,
        expectedReturn: parseInt(event.target.value),
      };
    });
  };

  const durationHandler = (event) => {
    onInput((prevInput) => {
      return {
        ...prevInput,
        duration: parseInt(event.target.value),
      };
    });
  };

  return (
    <div id="user-input">
      <div className="input-group">
        <div>
          <label>intial investment</label>
          <input type="number" onChange={initialInvestmentHandler} />
        </div>
        <div>
          <label>annual investment</label>
          <input type="number" onChange={annualInvestmentHandler} />
        </div>
      </div>
      <div className="input-group">
        <div>
          <label>expected return</label>
          <input type="number" onChange={expectedReturnHandler} />
        </div>
        <div>
          <label>duration</label>
          <input type="number" onChange={durationHandler} />
        </div>
      </div>
    </div>
  );
}
