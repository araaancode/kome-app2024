import React from 'react'
import { useParams } from "react-router-dom"

const SingleTicket = () => {
    let { ticketId } = useParams();

    return (
        <div>SingleTicket {ticketId}</div>
    )
}

export default SingleTicket