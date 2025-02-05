import React, { useState } from "react";

export default function ApiPost() {
    const [data, setData] = useState({
        formData: { name: "", height: "", skin_color: "" },
        storedData: []
    });

    const handleOnChange = (e) => {
        const { id, value } = e.target;

        setData((prev) => ({
            ...prev,
            formData: { ...prev.formData, [id]: value } 
        }));
    };

    const handleOnSubmit = (e) => {
        e.preventDefault();

        setData((prev) => ({
            formData: { name: "", height: "", skin_color: "" }, 
            storedData: [...prev.storedData, prev.formData] 
        }));
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-gray-100">
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-96">
                <h2 className="text-lg font-bold text-gray-300 mb-4">Add Details</h2>

                <form onSubmit={handleOnSubmit} className="flex flex-col space-y-3">
                    <label htmlFor="name" className="text-gray-400">Name:</label>
                    <input 
                        type="text" id="name" value={data.formData.name} 
                        onChange={handleOnChange} 
                        className="p-2 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500"
                    />

                    <label htmlFor="height" className="text-gray-400">Height:</label>
                    <input 
                        type="text" id="height" value={data.formData.height} 
                        onChange={handleOnChange} 
                        className="p-2 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500"
                    />

                    <label htmlFor="skin_color" className="text-gray-400">Skin Color:</label>
                    <input 
                        type="text" id="skin_color" value={data.formData.skin_color} 
                        onChange={handleOnChange} 
                        className="p-2 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500"
                    />

                    <button type="submit" className="bg-gray-600 hover:bg-gray-500 text-white p-2 rounded-lg">
                        Add Details
                    </button>
                </form>
            </div>

            {/* Display stored data */}
            <div className="bg-gray-800 p-6 mt-6 rounded-lg shadow-lg w-96">
                <h3 className="text-lg font-bold text-gray-300 mb-4">Stored Data:</h3>
                {data.storedData.length === 0 ? (
                    <p className="text-gray-400">No entries yet.</p>
                ) : (
                    <ul className="space-y-2">
                        {data.storedData.map((entry, index) => (
                            <li key={index} className="p-3 bg-gray-700 rounded">
                                <strong>Name:</strong> {entry.name}, 
                                <strong> Height:</strong> {entry.height}, 
                                <strong> Skin Color:</strong> {entry.skin_color}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
}
