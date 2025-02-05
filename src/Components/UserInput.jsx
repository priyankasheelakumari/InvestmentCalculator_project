import React from "react";

const UserInput = ({onChange, userInput}) => {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label htmlFor="initial-investment">INITIAL INVESTMENT</label>
          <input
            type="number"
            required
            value={userInput.initialInvestment}
            onChange={(e) => onChange("initialInvestment", e.target.value)}
          />
        </p>
        <p>
          <label htmlFor="annual-investment">ANNUAL INVESTMENT</label>
          <input
            type="number"
            required
            value={userInput.annualInvestment}
            onChange={(e) => onChange("annualInvestment", e.target.value)}
          />
        </p>
      </div>
      <div className="input-group">
        <label htmlFor="expected-return">EXPECTED RETURN</label>
        <input
          type="number"
          required
          value={userInput.expectedReturn}
          onChange={(e) => onChange("expectedReturn", e.target.value)}
         
        />

        <label htmlFor="duration">DURATION</label>
        <input
          type="number"
          required
          value={userInput.duration}
          onChange={(e) => onChange("duration", e.target.value)}
          
        />
      </div>
    </section>
  );
};

export default UserInput;
