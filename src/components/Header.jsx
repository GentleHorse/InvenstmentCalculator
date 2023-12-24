import HeaderImage from "../assets/investment-calculator-logo.png";

export default function Header() {
  return (
    <header id="header">
      <img src={HeaderImage} alt="Header image money bag with graph" />
      <h1>Investment Calculator</h1>
    </header>
  );
}
