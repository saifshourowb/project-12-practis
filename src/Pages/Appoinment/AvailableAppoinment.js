import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import BookingModul from './BookingModul';
import Service from './Service';

const AvailableAppoinment = ({ date }) => {
    const [services, setServices] = useState([]);
    const [treatment, setTreatment] = useState(null);

    useEffect(() => {
        fetch('service.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);

    return (
        <div>
            <h4 className='text-xl text-secondary text-center'>Available Appoinment On: {format(date, 'pp')}</h4>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}
                        setTreatment={setTreatment}
                    ></Service>)
                }
            </div> 
            {treatment && <BookingModul treatment={treatment}></BookingModul>}
        </div>
    );
};

export default AvailableAppoinment;