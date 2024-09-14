import { ReactNode } from 'react';

export interface BodyProps {
    children?: ReactNode;
}

export default function Body({ children }: BodyProps) {
    return (
        <div className="bg-white min-h-screen">
            {children}
        </div>
    );
}
