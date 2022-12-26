import React, {useState} from 'react';

export default function Accordion({ text, children, customWidth }) {
    const [open, setOpen] = useState();

    function changeOpen() {
        setOpen(!open);
    }

    return (
        <>
            <div width={customWidth}>
                <div onClick={changeOpen}  style={{
                    backgroundColor: "#e1e5eb",
                    borderRadius: 5,
                    color: "black",
                    cursor: "pointer",
                    padding: 20
                }}>
                    <h1 style={{margin: 0, padding: 0}}>{text}</h1>
                </div>
                <div style={{
                    color: "black",
                    padding: 20
                }}>{open && (children)}</div>
            </div>
        </>
    )
}