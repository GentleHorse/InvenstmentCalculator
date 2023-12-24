import HeaderImage from "../assets/investment-calculator-logo.png";

export default function Header() {
  return (
    <header id="header">
      <img src={HeaderImage} alt="Header image money bag with graph" />
      <h1>This is Header component.</h1>
    </header>
  );
}
