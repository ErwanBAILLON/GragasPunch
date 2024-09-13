import 'tailwindcss/tailwind.css';

export interface BasicBoxContainerProps {
    children?: React.ReactNode;
    color?: string;
}

export default function BasicBoxContainer({ children, color }: BasicBoxContainerProps) {
    return (
        <div className={`bg-${color} border border-gray-200 rounded-lg p-4`}>
            {children}
        </div>
    );
}