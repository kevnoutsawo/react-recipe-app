import React from "react";

export default function ingredient({ amount, measurement, name }) {
    return (
        <li>
            {amount} {measurement} {name}
        </li>
    );
}