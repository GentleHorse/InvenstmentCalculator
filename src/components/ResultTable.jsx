import { calculateInvestmentResults } from "../util/investment.js";
import { formatter } from "../util/investment.js";

export default function ResultTable({ inputData }) {
  const { initialInvestment } = inputData;

  const annualData = calculateInvestmentResults(inputData);

  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {annualData.map((data) => (
          <tr key={data.year}>
            <td>{data.year}</td>
            <td>{formatter.format(data.valueEndOfYear)}</td>
            <td>{formatter.format(data.interest)}</td>
            <td>
              {formatter.format(
                data.valueEndOfYear -
                  (initialInvestment + data.annualInvestment * data.year)
              )}
            </td>
            <td>
              {formatter.format(
                initialInvestment + data.annualInvestment * data.year
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
