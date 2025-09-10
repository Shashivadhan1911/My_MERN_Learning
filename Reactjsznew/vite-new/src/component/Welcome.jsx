import React from 'react'
import { Link } from 'react-router-dom'

const Welcome = () => {
    return (
        <div className="min-h-screen flex items-center justify-center p-4">
            <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-12 shadow-2xl text-center max-w-lg w-full border border-white border-opacity-20">
                <nav className="mb-10">
                    <Link to="/" className="inline-block mx-3 px-6 py-3 text-indigo-200 font-semibold rounded-full bg-white bg-opacity-20 hover:bg-indigo-300 hover:text-indigo-900 transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 shadow-lg hover:shadow-2xl">Welcome</Link>
                    <Link to="/Home" className="inline-block mx-3 px-6 py-3 text-indigo-200 font-semibold rounded-full bg-white bg-opacity-20 hover:bg-indigo-300 hover:text-indigo-900 transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 shadow-lg hover:shadow-2xl">Go to Home</Link>
                    <Link to="/Payment" className="inline-block mx-3 px-6 py-3 text-indigo-200 font-semibold rounded-full bg-white bg-opacity-20 hover:bg-indigo-300 hover:text-indigo-900 transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 shadow-lg hover:shadow-2xl">Go to Payment</Link>
                </nav>
                <h1 className="text-5xl font-extrabold text-white mb-6 drop-shadow-lg">Welcome to the Payment Gateway</h1>
                <p className="text-indigo-100 text-lg">Secure and easy payment processing with modern technology</p>
            </div>
        </div>
    );
}

export default Welcome
