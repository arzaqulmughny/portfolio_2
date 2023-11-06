'use client';
import useSWR from 'swr';
import { ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import H2 from '@/components/ui/typography/h2';
import P from '@/components/ui/typography/p';
import { Skeleton } from '@/components/ui/skeleton';

type tRepository = {
    html_url: string;
    name: string;
};

const useRepositories = (sortBy: string, perPage: number) => {
    const fetcher = () =>
        fetch(`https://api.github.com/users/zaarza/repos?sort=${sortBy}&per_page=${perPage}`).then((result) =>
            result.json()
        );

    const { data, isLoading, error, mutate } = useSWR('repository', fetcher, {
        fallbackData: [],
        loadingTimeout: 2000,
        revalidateOnFocus: false,
        shouldRetryOnError: false,
    });

    return {
        data,
        isLoading,
        error,
        mutate,
    };
};

const Repositories = () => {
    const { data, isLoading, mutate } = useRepositories('created', 3);

    return (
        <div className='flex flex-col gap-y-10'>
            <div className='flex flex-col gap-y-4'>
                <H2>Repository</H2>
                <P className='text-primary/80'>Latest Github Repository</P>
            </div>

            <ul className='flex flex-col gap-y-4'>
                {isLoading && (
                    <>
                        <li className='flex items-center gap-x-4 group'>
                            <Skeleton className='w-2 h-2 rounded-full bg-primary/10' />
                            <Skeleton className='h-3 rounded w-52 bg-primary/10' />
                        </li>
                        <li className='flex items-center gap-x-4 group'>
                            <Skeleton className='w-2 h-2 rounded-full bg-primary/10' />
                            <Skeleton className='h-3 rounded w-52 bg-primary/10' />
                        </li>
                        <li className='flex items-center gap-x-4 group'>
                            <Skeleton className='w-2 h-2 rounded-full bg-primary/10' />
                            <Skeleton className='h-3 rounded w-52 bg-primary/10' />
                        </li>
                    </>
                )}

                {!isLoading &&
                    data.length > 1 &&
                    data.map((repository: tRepository, index: number) => (
                        <li
                            className='flex items-center gap-x-4 group'
                            key={`repository-${index}`}
                        >
                            <div className='w-2 h-2 rounded-full dark:bg-neutral-800 bg-primary/80' />
                            <a
                                href={repository.html_url}
                                target='_blank'
                                className='hover:underline underline-offset-4'
                            >
                                {repository.name}
                            </a>
                        </li>
                    ))}

                {!isLoading && data.length === 0 && (
                    <P className='text-center text-muted-foreground'>
                        Couldn{"'"}t get data from server,{' '}
                        <button
                            className='underline underline-offset-4'
                            onClick={() => mutate()}
                        >
                            retry
                        </button>
                    </P>
                )}
            </ul>

            <Button
                variant={'secondary'}
                className='w-full'
            >
                <a
                    className='flex items-center self-center w-fit'
                    href='https://github.com/zaarza'
                    target='_blank'
                >
                    Visit Github repository <ArrowUpRight className='w-4 ml-1' />
                </a>
            </Button>
        </div>
    );
};

export default Repositories;
