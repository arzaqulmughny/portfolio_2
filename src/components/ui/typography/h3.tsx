import { HTMLAttributes } from 'react';

interface IH3Props extends HTMLAttributes<HTMLHeadingElement> {
    children: any;
    className?: string;
}

const H3 = (props: IH3Props) => {
    const { children, className, ...attributes } = props;

    return (
        <h3
            className={`scroll-m-20 text-2xl font-semibold tracking-tight ${className}`}
            {...attributes}
        >
            {children}
        </h3>
    );
};

export default H3;
