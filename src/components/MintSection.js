import React from "react";
import Home from "../Home";

export default function MintSection({ title, subtitle, id, candyMachineId, config, connection, startDate, treasury, txTimeout }) {
    return (
        <div className={"section"}>
            <div className="section-content" id={id}>
                <h1>{title}</h1>
                <p>{subtitle}</p>
                <Home
                    candyMachineId={candyMachineId}
                    config={config}
                    connection={connection}
                    startDate={startDate}
                    treasury={treasury}
                    txTimeout={txTimeout}
                />
            </div>
        </div>
    );
}