import React from 'react';

export default function SurpriseButton(props){    
    const text = 'image';
    return <button onClick={() => props.onClick(text)}>Surprise!</button>;
}