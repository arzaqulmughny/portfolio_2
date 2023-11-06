'use client';
import H2 from '@/components/ui/typography/h2';
import P from '@/components/ui/typography/p';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useMemo, useState } from 'react';
import ProjectList from '@/shared/components/ProjectList';
import projects from '@/data/projects';
import tProject from '@/types/tProject';

const useFilteredProjects = (projects: tProject[], category: string) => {
    const filteredProjects = useMemo(() => {
        const result = projects.filter((project) => {
            if (category === 'All') {
                return true;
            } else {
                const categories = project.categories.map((category) => category.toLowerCase());
                return categories.includes(category.toLowerCase());
            }
        });

        return result;
    }, [projects, category]);

    return { filteredProjects };
};

const categories = ['All', 'Web Application', 'Final Project', 'UI Slicing'];

const Projects = () => {
    const [activeCategory, setActiveCategory] = useState<string>('All');
    const { filteredProjects } = useFilteredProjects(projects, activeCategory);

    return (
        <div className='flex flex-col max-w-3xl p-8 mx-auto gap-y-16'>
            <div className='flex flex-col gap-y-4'>
                <H2>Projects</H2>
                <P className='text-primary/80'>All of my finished/unfinished projects.</P>

                <Select onValueChange={(choice) => setActiveCategory(choice)}>
                    <SelectTrigger className='w-[180px]'>
                        <SelectValue placeholder='Select category' />
                    </SelectTrigger>
                    <SelectContent>
                        {categories.map((category, index) => (
                            <SelectItem
                                key={category}
                                value={category}
                            >
                                {category}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>
            </div>

            <ProjectList data={filteredProjects} />
        </div>
    );
};

export default Projects;
