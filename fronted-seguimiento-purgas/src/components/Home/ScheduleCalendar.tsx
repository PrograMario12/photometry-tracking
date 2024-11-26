import React, { useState } from 'react';
import { Calendar, Event as BaseEvent, dayjsLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment';
import dayjs from 'dayjs';
import 'moment-timezone';
import { Modal, Button } from 'react-bootstrap';
import 'dayjs/locale/es';

moment.tz.setDefault('America/Mexico_City');

dayjs.locale('es');

const localizer = dayjsLocalizer(dayjs);

interface Event extends BaseEvent {
  color?: string;
  description?: string;
}

const events: Event[] = [
  {
    title: 'Pieza 1',
    start: new Date(2024, 10, 25, 10, 0), // Año, Mes (0-indexed), Día, Hora, Minuto
    end: new Date(2024, 10, 25, 11, 0),
    color: 'red',
    description: 'Descripción de la pieza 1',
  },
  {
    title: 'Pieza 2',
    start: new Date(2024, 10, 26, 14, 0),
    end: new Date(2024, 10, 26, 15, 0),
    color: 'green',
    description: 'Descripción de la pieza 2',
  },
];

const messages = {
  allDay: 'Todo el día',
  previous: 'Anterior',
  next: 'Siguiente',
  today: 'Hoy',
  month: 'Mes',
  week: 'Semana',
  day: 'Día',
  agenda: 'Agenda',
  date: 'Fecha',
  time: 'Hora',
  event: 'Evento',
  noEventsInRange: 'No hay eventos en este rango',
  showMore: (total: number) => `+ Ver más (${total})`,
};

const ScheduleCalendar: React.FC = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => setShowModal(false);

  const onSelectEvent = (event: Event) => {
    setSelectedEvent(event);
    setShowModal(true);
  };

  const eventPropGetter = (event: Event) => {
    const backgroundColor = event.color || '#3174ad'; // Color predeterminado si no se especifica
    return {
      style: { backgroundColor },
    };
  };

  return (
    <div style={{ height: 'calc(100vh - 140px)' }}>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        defaultView="week"
        views={['day', 'week', 'month']}
        onNavigate={(date: Date) => setCurrentDate(date)}
        eventPropGetter={eventPropGetter}
        onSelectEvent={onSelectEvent}
        messages={messages} // Pasa los mensajes localizados al componente Calendar
      />
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Detalles de la pieza</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedEvent && (
            <>
              <p><strong>Título:</strong> {selectedEvent.title}</p>
              <p><strong>Descripción:</strong> {selectedEvent.description}</p>
              <p><strong>Inicio:</strong> {selectedEvent?.start?.toString()}</p>
              <p><strong>Fin:</strong> {selectedEvent?.end?.toString()}</p>
            </>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ScheduleCalendar;