import { HTMLAttributes } from 'react';

interface IH1Props extends HTMLAttributes<HTMLHeadingElement> {
    children: any;
    className?: string;
}

const H1 = (props: IH1Props) => {
    const { children, className, ...attributes } = props;

    return (
        <h1
            className={`scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl ${className}`}
            {...attributes}
        >
            {children}
        </h1>
    );
};

export default H1;
