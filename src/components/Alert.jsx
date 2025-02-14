import React from "react";
import { AiOutlineCheckCircle, AiOutlineCloseCircle } from "react-icons/ai";
import withAlert from "./withAlert";


const Alert = ({ alert, removeAlert }) => {
    if (!alert) {
        return;
    }

    const themeMap = {
        success: {
            color: "br-green-400",
            Icon: AiOutlineCheckCircle
        },
        error: {
            color: "bg-red-500",
            Icon: AiOutlineCloseCircle
        }
    }

    const { type, message } = alert;
    const { Icon, color } = themeMap[type];

    return (
        <div>
            {/* Code block starts */}
            <div className="flex items-center justify-center bg-white px-4 lg:px-0 py-4">
                <div className="transition duration-150 ease-in-out w-full lg:w-11/12 mx-auto py-3 px-4 bg-gray-400 flex items-center justify-between shadow rounded" >
                    < div className="flex items-center">
                        <div className="flex items-end h-full ">
                            <div className={"mr-2 bg-green-400 text-white text-xl " + color}>
                                <Icon />
                            </div>
                            <p className="mr-2 text-base font-bold text-gray-800">{type}</p>
                        </div>
                        <div className="border border-gray-800 h-1 bg-gray-800 w-1 rounded-md mr-2 mt-1" />
                        <p className="text-sm sm:text-base text-white pt-2 sm:pt-0 pb-2 sm:pb-0">{message}</p>
                    </div>
                    <div className="flex items-center md:pr-4">
                        <button className="focus:outline-none text-sm cursor-pointer text-gray-800"
                            onClick={removeAlert}
                        >
                            Dismiss
                        </button>
                    </div>
                </div>
            </div>
        </div >
    );
};
export default withAlert(Alert);

