import React, { useEffect, useState } from "react";
import Card from "./Card";

function Deals() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("http://localhost:5000/data", {
                    method: "POST",
                });
                const dataItems = await response.json();
                console.log(dataItems);
                setData(dataItems);
                setLoading(false);
            } catch (err) {
                setError(err);
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <section id="deals" className="deals">
            <div className="deals-heading">
                <h1>Deals</h1>
            </div>
            <div className="card-container">
                {data && data.length > 0  && (
                    <div className="">
                        <Card content={data[1].description} heading={data[1].productName} img1={`data:${data[1].images[0].mimetype};base64,${data[1].images[0].buffer}`} />
                    </div>
                )}
            </div>
        </section>
    );
}

export default Deals;
