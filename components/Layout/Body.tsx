import styles from './Layout.module.css';

export interface BodyProps {
    children?: React.ReactNode;
}

export default function Body({ children }: BodyProps) {
    return (
        <div className={styles.body}>
            {children}
        </div>
    );
}