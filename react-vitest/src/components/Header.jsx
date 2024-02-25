const Header = ({ title }) => {
  return (
    <>
      <h1>{title}</h1>
      <button>first button</button>
      <button>second button</button>ّ <p role="paragraph">paragraph</p>
      <span title="999">999 $</span>
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </ul>
    </>
  );
};

export default Header;
