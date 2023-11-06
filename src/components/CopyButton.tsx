'use client';
import copyToClipboard from '@/lib/copy-to-clipboard';
import { Button, ButtonProps } from '@/components/ui/button';
import { useState } from 'react';

interface ICopyButtonProps extends React.RefAttributes<HTMLButtonElement> {
    text: string;
}

const CopyButton = (props: ICopyButtonProps) => {
    const { text, ...attributes } = props;
    const [isCopied, setIsCopied] = useState<boolean>(false);

    const copy = (text: string) => {
        copyToClipboard(text);
        setIsCopied(true);

        setTimeout(() => {
            setIsCopied(false);
        }, 5000);
    };

    return (
        <Button
            {...attributes}
            className='relative invisible group-hover:visible'
            onClick={() => copy(text)}
        >
            {isCopied ? 'Copied!' : 'Copy'}
        </Button>
    );
};

export default CopyButton;
