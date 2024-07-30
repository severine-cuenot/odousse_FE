// Bootstrap Imports
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

// Components imports
import PageContainer from '../PageContainer';

import './style.scss';

function NewFishCards() {
  return (
    <PageContainer>
      <h1>Ajouts récents</h1>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </PageContainer>
  );
}

export default NewFishCards;
