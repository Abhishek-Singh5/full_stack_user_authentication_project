import React from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";

const Home = () => {
    return (
        // <div className="flex flex-col items-center justify-center min-h-screen bg-[url('/bg_img.png')] bg-cover bg-center" >
        //     <Navbar />
        //     <Header />
        // </div>
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-red-200 via-green-200 to-black">
            <Navbar />
            <Header />
        </div>

    )
}

export default Home;