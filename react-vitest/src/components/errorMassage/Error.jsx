const ErrorMassage = ({ count }) => {
  return (
    <>
      <h1>hi i am heading one</h1>
      <p style={{ opacity: "1" }}>
        count {count === 1 ? "error" : "errors"} find
      </p>

      <div role="parentDiv">
        <span>hi</span>
        <p>i am paragraph</p>
      </div>
    </>
  );
};

export default ErrorMassage;
