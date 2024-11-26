import React, { useState } from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';

interface PriorityProps {
    onChange: (priority: string) => void;
}

const Priority: React.FC<PriorityProps> = ({ onChange }) => {
    const [selectedPriority, setSelectedPriority] = useState<string>('');

    const handlePriorityChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const newPriority = (event.currentTarget as HTMLSelectElement).value;
        setSelectedPriority(newPriority);
        onChange(newPriority);
    };

    return (
        <div>
            <h1></h1>

            <Container>
                <h1>Asignación de prioridades</h1>
            </Container>

            <Row>
                <Col xs={12} md={6}>
                    <Form.Group controlId="pieceName">
                        <Form.Label>Pieza 1</Form.Label>
                    </Form.Group>
                </Col>
                <Col xs={6} md={3} >
                    <Form.Group controlId="prioritySelect">
                        <Form.Control as="select" value={selectedPriority} onChange={handlePriorityChange}>
                            <option value="">Seleccione una prioridad</option>
                            <option value="alta">Alta</option>
                            <option value="media">Media</option>
                            <option value="baja">Baja</option>
                        </Form.Control>
                    </Form.Group>
                </Col>
                <Col xs={6} md={3} >
                    <Button variant="primary" onClick={() => alert('Prioridad aceptada')}>Aceptar</Button>
                </Col>
            </Row>
        </div>
    );
};

export default Priority;