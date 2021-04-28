import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>The Dojo Blog</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/create">New Blog</Link>
        {/* Link is used so that the redirect request goes 
to react and not to server and it gets load faster  */}
      </div>
    </nav>
  );
};
export default Navbar;