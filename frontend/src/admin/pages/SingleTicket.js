import React, { useState } from 'react'
import { useParams } from "react-router-dom"
import TitleCard from "../components/Cards/TitleCard"

const TopSideButtons = () => {
    return (
        <>
            <div className="inline-block">
                <h1>تیکت های پشتیبانی</h1>
            </div>

        </>

    )
}


const SingleTicket = () => {
    let { ticketId } = useParams();

    const [tickets, setTickets] = useState([
        { id: 1, content: 'Ticket 1: Issue with login.' },
        { id: 2, content: 'Ticket 2: Feature request for dark mode.' },
    ]);
    const [newTicket, setNewTicket] = useState('');

    const handleAddTicket = () => {
        if (newTicket.trim() === '') return;
        setTickets([...tickets, { id: tickets.length + 1, content: newTicket }]);
        setNewTicket('');
    };

    return (
        <TitleCard title="" topMargin="mt-2" TopSideButtons={<TopSideButtons />}>
            <div className="container mx-auto p-4 rtl">
                <div className="mb-4">
                    {tickets.map((ticket) => (
                        <div
                            key={ticket.id}
                            className="bg-blue-100 shadow-md rounded-lg p-4 mb-4 text-right border"
                        >
                            <h2 className="text-lg font-semibold mb-2">Ticket #{ticket.id}</h2>
                            <p>{ticket.content}</p>
                        </div>
                    ))}
                </div>
                <textarea
                    className="w-full p-2 border border-blue-400 rounded-md mt-8 mb-2 text-right"
                    placeholder="أدخل التذكرة الجديدة"
                    value={newTicket}
                    onChange={(e) => setNewTicket(e.target.value)}
                />
                <button
                    className="bg-blue-800 hover:bg-blue-900 text-white px-4 py-2 rounded-md"
                    onClick={handleAddTicket}
                >
                    پاسخ گویی به تیکت 
                </button>
            </div>
        </TitleCard>
    );
}

export default SingleTicket