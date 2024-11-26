import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';

const Register: React.FC = () => {
    const [formData, setFormData] = useState({
        nombre: '',
        modelo: '',
        tipo: 'AH',
        fecha: '',
        hora: '',
        selector: 'liberación',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log(formData);
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
                <Form.Label htmlFor="nombre" className="form-label">Pieza</Form.Label>
                <Form.Select aria-label='Pieza' id='nombre' name='nombre' value={formData.nombre} onChange={handleChange}
                >
                    <option value=''>Selecciona una pieza</option>
                    <option value='pieza1'>Pieza 1</option>
                    <option value='pieza2'>Pieza 2</option>
                    <option value='pieza3'>Pieza 3</option>
                    <option value='pieza4'>Pieza 4</option>

                </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label htmlFor="modelo" className="form-label">Modelo:</Form.Label>
                <Form.Select aria-label='Modelo' id='modelo' name='modelo' value={formData.modelo} onChange={handleChange}
                >
                    <option value=''>Selecciona un modelo</option>
                    <option value='modelo1'>Modelo 1</option>
                    <option value='modelo2'>Modelo 2</option>
                    <option value='modelo3'>Modelo 3</option>
                    <option value='modelo4'>Modelo 4</option>
                </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3">
                <label htmlFor="tipo" className="form-label">Tipo:</label>
                <div className="form-check form-check-inline">
                    <input
                        className="form-check-input"
                        type="checkbox"
                        id="tipoAH"
                        name="tipo"
                        value="AH"
                        checked={formData.tipo === 'AH'}
                        onChange={handleChange}
                    />
                    <label className="form-check-label" htmlFor="tipoAH">
                        AH
                    </label>
                </div>
                <div className="form-check form-check-inline">
                    <input
                        className="form-check-input"
                        type="checkbox"
                        id="tipoDH"
                        name="tipo"
                        value="DH"
                        checked={formData.tipo === 'DH'}
                        onChange={handleChange}
                    />
                    <label className="form-check-label" htmlFor="tipoDH">
                        DH
                    </label>
                </div>
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label htmlFor="fecha" className="form-label">Fecha:</Form.Label>
                <Form.Control
                    type="date"
                    className="form-control"
                    id="fecha"
                    name="fecha"
                    value={formData.fecha}
                    onChange={handleChange}
                >
                </Form.Control>
            </Form.Group>

            <div className="mb-3">
                <label htmlFor="hora" className="form-label">Hora:</label>
                <input
                    type="time"
                    className="form-control"
                    id="hora"
                    name="hora"
                    value={formData.hora}
                    onChange={handleChange}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="selector" className="form-label">Selector:</label>
                <select
                    className="form-select"
                    id="selector"
                    name="selector"
                    value={formData.selector}
                    onChange={handleChange}
                >
                    <option value="liberación">Liberación</option>
                    <option value="primera pieza">Primera pieza</option>
                    <option value="prioridad">Prioridad</option>
                </select>
            </div>
            <button type="submit" className="btn btn-primary">Registrar</button>
        </Form>
    );
};

export default Register;