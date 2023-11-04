import { SVGAttributes } from 'react';

interface ILogoProps extends SVGAttributes<SVGSVGElement> {}

const Logo = (props: ILogoProps) => {
    const { ...attributes } = props;

    return (
        <svg
            xmlns='http://www.w3.org/2000/svg'
            width='23'
            height='19'
            viewBox='0 0 23 19'
            fill='none'
            {...attributes}
        >
            <path d='M20.0805 18.1875L15.393 0.772736H17.6445L22.332 18.1875H20.0805Z' />
            <path d='M14.7367 0.772736L10.0491 18.1875H7.79773L12.4852 0.772736H14.7367Z' />
            <path d='M7.25852 0.772736L2.57102 18.1875H0.319603L5.0071 0.772736H7.25852Z' />
        </svg>
    );
};

export default Logo;
