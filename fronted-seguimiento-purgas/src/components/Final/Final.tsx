import React from 'react';
import { Form, Button } from 'react-bootstrap';

const Final: React.FC = () => {
    return (
        <Form>
            <Form.Group controlId="formQrScan" className='mb-3'>
                <Form.Label>Escanear QR</Form.Label>
                <Form.Control 
                    type="text" 
                    placeholder="Escanea el código QR" 
                    autoFocus 
                />
            </Form.Group>

            <Form.Group controlId="formComments" className='mb-3'>
                <Form.Label>Comentarios</Form.Label>
                <Form.Control as="textarea" rows={3} placeholder="Escribe tus comentarios" />
            </Form.Group>

            <Form.Group controlId="formFileUpload" className='mb-3'>
                <Form.Label>Cargar archivo PDF</Form.Label>
                <Form.Control type="file" accept="application/pdf" />
            </Form.Group>

            <Button variant="primary" type="submit">
                Aceptar
            </Button>
        </Form>
    );
};

export default Final;