import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';

function Home() {
  return (
    <div>
      <h1 className="colortest">
        Hello world!
      </h1>

      <h2>
        Example heading
        <Badge bg="secondary" as={Button}>
          New
        </Badge>
      </h2>

    </div>
  );
}

export default Home;
