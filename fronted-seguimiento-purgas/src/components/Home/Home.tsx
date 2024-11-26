import React from 'react';
import CardTimeWaiting from './CardTimeWaiting';
import ScheduleCalendar from './ScheduleCalendar';

const Home: React.FC = () => {
    return (
        <div>
            <CardTimeWaiting />
            <ScheduleCalendar />
        </div>
    );
};

export default Home;