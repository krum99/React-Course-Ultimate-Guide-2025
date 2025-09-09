export default function UserInput({ onChangeInput, userInputData }) {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Initial investment</label>
          <input
            type="number"
            required
            value={userInputData.initialInvestment}
            onChange={(event) =>
              onChangeInput('initialInvestment', event.target.value)
            }
          />
        </p>
        <p>
          <label>Annual investment</label>
          <input
            type="number"
            required
            value={userInputData.annualInvestment}
            onChange={(event) =>
              onChangeInput('annualInvestment', event.target.value)
            }
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>Expected return</label>
          <input
            type="number"
            required
            value={userInputData.expectedReturn}
            onChange={(event) =>
              onChangeInput('expectedReturn', event.target.value)
            }
          />
        </p>
        <p>
          <label>Duration</label>
          <input
            type="number"
            required
            value={userInputData.duration}
            onChange={(event) => onChangeInput('duration', event.target.value)}
          />
        </p>
      </div>
    </section>
  );
}
