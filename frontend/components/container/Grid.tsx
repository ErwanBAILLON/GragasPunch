import "tailwindcss/tailwind.css";

export interface GridProps {
    children?: React.ReactNode;
    size?: number;
}

export default function Grid({ children, size}: GridProps) {
    /* return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-8 max-w-7xl mx-auto">
            {children}
        </div>
    ); */

    switch (size) {
        case 1:
            return (
                <div className="grid grid-cols-1 gap-4 p-8 max-w-7xl mx-auto">
                    {children}
                </div>
            );
        case 2:
            return (
                <div className="grid grid-cols-2 gap-4 p-8 max-w-7xl mx-auto">
                    {children}
                </div>
            );
        case 3:
            return (
                <div className="grid grid-cols-3 gap-4 p-8 max-w-7xl mx-auto">
                    {children}
                </div>
            );
        case 4:
            return (
                <div className="grid grid-cols-4 gap-4 p-8 max-w-7xl mx-auto">
                    {children}
                </div>
            );
        default:
            return (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-8 max-w-7xl mx-auto">
                    {children}
                </div>
            );
    }
}
