// MyBookings.jsx
import React, { useState, useEffect } from 'react';
import { Link, useLoaderData } from 'react-router';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const MyBookings = () => {
  const [bookings, setBookings] = useState([]);
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    const savedBookings = JSON.parse(localStorage.getItem('bookings')) || [];
    setBookings(savedBookings);

    const savedChartData = JSON.parse(localStorage.getItem('chartData')) || [];
    const doctorCounts = {};

    savedBookings.forEach(booking => {
      const doctorName = booking.doctor.name;
      if (!doctorCounts[doctorName]) {
        doctorCounts[doctorName] = {
          count: 1,
          doctor: booking.doctor
        };
      } else {
        doctorCounts[doctorName].count += 1;
      }
    });

    let updatedChartData = [...savedChartData];

    Object.keys(doctorCounts).forEach(doctorName => {
      const existingIndex = updatedChartData.findIndex(item => item.name === doctorName);

      if (existingIndex >= 0) {
        updatedChartData[existingIndex] = {
          ...updatedChartData[existingIndex],
          value: doctorCounts[doctorName].count * 300 + 200,
          fee: doctorCounts[doctorName].doctor.consultationFee
        };
      } else {
        updatedChartData.push({
          name: doctorName,
          value: doctorCounts[doctorName].count * 300 + 200,
          fee: doctorCounts[doctorName].doctor.consultationFee
        });
      }
    });

    updatedChartData = updatedChartData.filter(item =>
      Object.keys(doctorCounts).includes(item.name)
    );

    localStorage.setItem('chartData', JSON.stringify(updatedChartData));
    setChartData(updatedChartData);
  }, []);

  const handleCancelBooking = (bookingId) => {
    const updatedBookings = bookings.filter(booking => booking.id !== bookingId);
    setBookings(updatedBookings);
    localStorage.setItem('bookings', JSON.stringify(updatedBookings));

    const doctorCounts = {};
    updatedBookings.forEach(booking => {
      const doctorName = booking.doctor.name;
      if (!doctorCounts[doctorName]) {
        doctorCounts[doctorName] = {
          count: 1,
          doctor: booking.doctor
        };
      } else {
        doctorCounts[doctorName].count += 1;
      }
    });

    let updatedChartData = [...chartData];
    updatedChartData = updatedChartData.map(item => {
      if (doctorCounts[item.name]) {
        return {
          ...item,
          value: doctorCounts[item.name].count * 300 + 200,
          fee: doctorCounts[item.name].doctor.consultationFee
        };
      }
      return item;
    }).filter(item =>
      Object.keys(doctorCounts).includes(item.name)
    );

    localStorage.setItem('chartData', JSON.stringify(updatedChartData));
    setChartData(updatedChartData);

    toast.success("Appointment Cancelled", {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const colors = ['#1E88E5', '#FFC107', '#1E88E5', '#00BFA5', '#FFC107', '#FF7043'];

  return (
    <div className="bg-[#EFEFEF] pb-20">
      <div className="flex flex-col items-center">
        <h2 className="text-[40px] font-extrabold text-center">
          My Today Appointments
        </h2>
        <p className="my-6 text-[#0F0F0F]">
          Our platform connects you with verified, experienced doctors across
          various specialties — all at your convenience.
        </p>
      </div>

      {chartData.length > 0 && (
        <div className="bg-white mx-8 md:mx-[160px] rounded-2xl p-6 mb-8">
          <h3 className="text-xl font-bold mb-4">Doctor Booking Statistics</h3>
          <div className="w-full h-80">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                data={chartData}
                margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
              >
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip
                  formatter={(value, name, props) => {
                    return [`Fee: ${props.payload.fee} Taka`];
                  }}
                />
                {chartData.map((entry, index) => (
                  <Area
                    key={`area-${index}`}
                    type="monotone"
                    dataKey="value"
                    name={entry.name}
                    stroke={colors[index % colors.length]}
                    fill={colors[index % colors.length]}
                    fillOpacity={0.8}
                    data={[{ name: entry.name, value: 0 }, { name: entry.name, value: entry.value, fee: entry.fee }]}
                  />
                ))}
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      )}

      {bookings.length === 0 ? (
        <div className="text-center py-10">
          <p className="text-xl font-medium">No appointments booked yet.</p>
          <Link className='' to="/"><button className='btn btn-primary'>Book an appointments</button></Link>
        </div>
      ) : (
        bookings.map((booking) => (
          <div
            key={booking.id}
            className="bg-white mx-8 md:mx-[160px] rounded-2xl p-8 appoint-com mb-6"
          >
            <div className="flex flex-col md:flex-row md:justify-between border-b border-dashed border-[#CFCFCF] p-4">
              <div>
                <p className="text-[20px] font-bold">{booking.doctor.name}</p>
                <p className="text-[18px] font-medium text-[#6F6F6F]">
                  {booking.doctor.education}
                </p>
              </div>
              <div className="text-[#6F6F6F] mt-2 md:mt-0">
                Appointment Fee : {booking.doctor.consultationFee} Taka + Vat
              </div>
            </div>
            <button
              onClick={() => handleCancelBooking(booking.id)}
              className="w-full text-[#09982F] rounded-3xl border py-1 px-2 mt-4"
            >
              Cancel Appointment
            </button>
          </div>
        ))
      )}
      <ToastContainer />
    </div>
  );
};
