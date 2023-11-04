import { HTMLAttributes } from 'react';

interface IH2Props extends HTMLAttributes<HTMLHeadingElement> {
    children: any;
    className?: string;
}

const H2 = (props: IH2Props) => {
    const { children, className, ...attributes } = props;

    return (
        <h2
            className={`scroll-m-20 text-3xl font-semibold tracking-tight first:mt-0 ${className}`}
            {...attributes}
        >
            {children}
        </h2>
    );
};

export default H2;
