const Navbar = ({ routes }) => {
  return (
    <ul>
      {routes.map((route, index) => (
        <li key={index}>{route.label}</li>
      ))}
    </ul>
  );
};

export default Navbar;
