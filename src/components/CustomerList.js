import React, { useEffect, useState } from "react";
import axios from "axios";

const CustomerList = () => {
    const [customers, setCustomers] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:5000/api/customers")
            .then((response) => setCustomers(response.data))
            .catch((error) => console.error(error));
    }, []);

    return (
        <div>
            <h1>Customer List</h1>
            <ul>
                {customers.map((customer) => (
                    <li key={customer._id}>
                        {customer.name} - {customer.email}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CustomerList;
