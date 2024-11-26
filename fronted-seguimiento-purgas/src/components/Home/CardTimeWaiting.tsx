import React from 'react';
import { Card, Carousel } from 'react-bootstrap';


const times = [
    {
        title: 'Pieza 1',
        time: '1 hora',
    },
    {
        title: 'Pieza 2',
        time: '30 minutos',
    },
    {
        title: 'Pieza 3',
        time: '45 minutos',
    },
    {
        title: 'Pieza 4',
        time: '1 hora',
    },
    {
        title: 'Pieza 5',
        time: '30 minutos',
    }
];

const CardTimeWaiting: React.FC = () => (
    <Card className="my-4">
        <Card.Body>
        <Card.Title>Tiempo de espera por pieza</Card.Title>
        <Carousel>
        {times.map((item, index) => (
          <Carousel.Item key={index}>
            <div>
              <strong>{item.title}:</strong> {item.time}
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
        </Card.Body>
    </Card>
    );

export default CardTimeWaiting;