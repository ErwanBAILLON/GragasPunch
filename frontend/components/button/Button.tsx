interface ButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    colorText?: string;
}

export default function Button({ children, onClick, colorText }: ButtonProps) {
    // return (
    //     <button
    //         onClick={onClick}
    //         className="bg-white text-teal-500 font-bold py-2 px-6 rounded-full hover:bg-gray-100 transition"
    //     >
    //         {children}
    //     </button>
    // );

    switch (colorText) {
        case 'teal':
            return (
                <button
                    onClick={onClick}
                    className="bg-white text-teal-500 font-bold py-2 px-6 rounded-full hover:bg-gray-100 transition"
                >
                    {children}
                </button>
            );
        case 'red':
            return (
                <button
                    onClick={onClick}
                    className="bg-white text-red-500 font-bold py-2 px-6 rounded-full hover:bg-gray-100 transition"
                >
                    {children}
                </button>
            );
        case 'emerald':
            return (
                <button
                    onClick={onClick}
                    className="bg-white text-emerald-500 font-bold py-2 px-6 rounded-full hover:bg-gray-100 transition"
                >
                    {children}
                </button>
            );
        default:
            return (
                <button
                    onClick={onClick}
                    className="bg-white text-black font-bold py-2 px-6 rounded-full hover:bg-gray-100 transition"
                >
                    {children}
                </button>
            );
    }
}