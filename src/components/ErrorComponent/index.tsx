import { useEffect, useState } from 'react';
import style from './style.module.scss';

interface ErrorComponentProps {
    text: string;
}

export default function ErrorComponent({ text }: ErrorComponentProps) {
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setVisible(false), 5000);
        return () => clearTimeout(timer);
    }, []);

    return visible ? (
        <div className={style.errorComponent}>
            <h3>{text}</h3>
        </div>
    ) : null;
}