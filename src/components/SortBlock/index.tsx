import { ChangeEvent, useState } from 'react';

import style from './style.module.scss';

interface SortBlockProps {
    onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
    options: string[];
}

export default function SortBlock({ onChange, options }: SortBlockProps) {
    const [selected, setSelected] = useState(options[0]);

    const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
        onChange(e);
        setSelected(e.target.value);
    };

    return (
        <div className={style.sortBlock}>
            <h1>Sorting</h1>
            <div className={style.selectWrapper}>
                <select value={selected} onChange={handleChange}>
                    {options.map((i, ind) => (
                        <option key={ind} value={i}>
                            {i}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
}
