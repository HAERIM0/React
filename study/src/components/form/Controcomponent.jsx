import React from 'react';
import { useState } from 'react';

export default function Controcomponent() {
    const [name, setName] = useState("");
    const [essay, setEssay] = useState('Please write an essay about your favorite DOM element.');
    const [flavor, setFlavor] = useState('coconut');

    // function handEssayChange(event) {
    //     setEssay(event.target.value);
    // }

    // function handleFlavorChange(event) {
    //     setFlavor(event.target.value);
    // }

    function handleChange(event) {
        const type = event.target.type;
        if (type === 'text') {
            setName(event.target.value);
        }
        if (name === "essay") {
            setEssay(event.target.value);
        }
        if (name === "flavor") {
            setFlavor(event.target.value);
        }
    }


    function handleSubmit(event) {
        alert(`name : ${name}, essay: ${essay}, flavor: ${flavor}`);
        event.preventDefault();
    }


    return (
        <form onSubmit={handleSubmit}>
            <label>
                Name:
                <input type="text" name='name' value={name} onChange={handleChange} />
            </label>



            <label>
                Essay:
                <textarea name="essay" value={essay} onChange={handleChange} />
            </label>

            <label>
                Pick your favorite flavor:
                <select flavor={flavor} onChange={handleChange}>
                    <option value="grapefruit">Grapefruit</option>
                    <option value="lime">Lime</option>
                    <option value="coconut">Coconut</option>
                    <option value="mango">Mango</option>
                </select>
            </label>
            <input type="submit" value="Submit" />
        </form>
    )
}
