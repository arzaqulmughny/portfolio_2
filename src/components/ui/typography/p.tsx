import { HTMLAttributes } from 'react';

interface IPProps extends HTMLAttributes<HTMLParagraphElement> {
    children: any;
    className?: string;
}

const P = (props: IPProps) => {
    const { children, className, ...attributes } = props;
    return (
        <p
            className={`leading-7 ${className}`}
            {...attributes}
        >
            {children}
        </p>
    );
};

export default P;
