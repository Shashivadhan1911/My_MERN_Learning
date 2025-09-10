import React from 'react'

const Home = () => {
    return (
        <div className="min-h-screen flex items-center justify-center p-4">
            <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-12 shadow-2xl text-center max-w-lg w-full border border-white border-opacity-20">
                <h1 className="text-5xl font-extrabold text-white mb-6 drop-shadow-lg">Welcome Home</h1>
                <p className="text-teal-100 text-lg">This is the default home page of the payment gateway with enhanced security.</p>
            </div>
        </div>
    );
}

export default Home
