import Card from "react-bootstrap/Card";

const weddle = () => {
  const primary = "dark";
  return (
    <>
      <div className="card-container">
        <Card
          border="primary"
          bg={primary}
          key={primary}
          text={primary === "light" ? "dark" : "white"}
          style={{ width: "18rem", height: "100" }}
          className="mb-2"
        >
          <Card.Header>Header</Card.Header>
          <Card.Body>
            <Card.Title>{primary} Card Title </Card.Title>This is going to be
            the main card for the weddle.
          </Card.Body>
        </Card>
      </div>
    </>
  );
};
export default weddle;
