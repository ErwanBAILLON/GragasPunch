import "tailwindcss/tailwind.css";

export interface GridProps {
    children?: React.ReactNode;
    
}

export default function Grid({ children }: GridProps) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-8 max-w-7xl mx-auto">
            {children}
        </div>
    );
}