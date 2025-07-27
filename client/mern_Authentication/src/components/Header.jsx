import React, { useContext } from "react";
import { assets } from "../assets/assets";
import { AppContext } from "../context/AppContext";

const Header = () => {

    const {userData} = useContext(AppContext);

    return (
        <div className="flex flex-col items-center mt-20 px-4 test-center text-gray-800" >
            <img src={assets.header_img} alt="" className="w-36 h-36 rounded-full mb-6 border border-black-200" />
            <h1 className="flex items-center gap-2 text-xl sm:text-3xl font-medium mb-2" >
                Hey {userData ? userData.name : 'Developer'}! 
                <img src={assets.hand_wave} alt="" className="w-8 aspect-square" />
            </h1>
            <h2 className="text-3xl sm:text-5xl font-semibold mb-4" >
                Welcome to my World !!
            </h2>
            <p className="mb-8 max-w-md" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt quis tenetur perspiciatis rem ipsum blanditiis obcaecati, ut vel alias tempora rerum eligendi doloremque quia aspernatur error at. Autem, consectetur similique!</p>
            <button className="font-medium font-bold text-xl border border-black-500 rounded-full px-8 py-2.5 bg-red-200 shadow-xl hover:bg-gray-400 hover:shadow-lg transition-all duration-200 ease-in-out">
                Get Started
                </button>

        </div>
    )
}

export default Header;