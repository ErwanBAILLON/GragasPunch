import 'tailwindcss/tailwind.css';

export interface BasicBoxContainerProps {
    children?: React.ReactNode;
    color?: string;
}

export default function BasicBoxContainer({ children, color }: BasicBoxContainerProps) {
    switch (color) {
        case 'sky':
            return (
                <div className="bg-sky-500 border border-blue-200 rounded-lg p-4">
                    {children}
                </div>
            );
        case 'red':
            return (
                <div className="bg-red-500 border border-red-200 rounded-lg p-4">
                    {children}
                </div>
            );
        case 'emerald':
            return (
                <div className="bg-emerald-500 border border-green-200 rounded-lg p-4">
                    {children}
                </div>
            );
        case 'beige':
            return (
                <div className="bg-stone-300 border border-stone-300 rounded-lg p-4">
                    {children}
                </div>
            );
        default:
            return (
                <div className="bg-gray-100 border border-gray-200 rounded-lg p-4">
                    {children}
                </div>
            );
    }
}