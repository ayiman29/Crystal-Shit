import logo from '../images/The_Doors_Logo.png';

export default function Header() {
  return (
    <header>
      <div className="logo-container">
        <img src={logo} alt="The Doors Logo" />
      </div>
      <h1>CRYSTAL SHIT - THE BEST COVER BAND</h1>
    </header>
  );
}
