import React, { useState } from "react"
import Collapsible from "react-collapsible"

const ToggleOpen = () => {
    const [ toggle, setToggle ] = useState(false);
    const trigger = () => {
        setToggle(!toggle);
    }
    return (
        <div onChange={trigger} className="grades">
            <p>View test scores:</p>
            <svg className="grades" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-lg" viewBox="0 0 16 16">
                <path d="M8 0a1 1 0 0 1 1 1v6h6a1 1 0 1 1 0 2H9v6a1 1 0 1 1-2 0V9H1a1 1 0 0 1 0-2h6V1a1 1 0 0 1 1-1z"/>
            </svg>
        </div>
    )
}

const ToggleClosed = () => {
    const [ toggle, setToggle ] = useState(false);
    const trigger = () => {
        setToggle(!toggle);
    }
    return (
        <div onChange={trigger} className="grades">
            <p>Collapse:</p>
            <svg className="grades" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-dash-lg" viewBox="0 0 16 16">
                <path d="M0 8a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H1a1 1 0 0 1-1-1z"/>
            </svg>
        </div>
    )
}

export default function GradesMenu({ grades }) {
    return (
        <Collapsible className="grades" trigger={<ToggleOpen />} triggerWhenOpen={<ToggleClosed className="toggle"/>}>
            {grades.map((item, idx) => (
                <p className="grades"><strong>Test {idx + 1}:</strong> {item}%</p>
            ))}
        </Collapsible>
    )
}