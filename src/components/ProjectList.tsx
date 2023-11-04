import projects from '@/data/projects';
import ProjectItem from './ProjectItem';

const ProjectList = () => {
    return (
        <div className='flex flex-col gap-8 sm:block sm:columns-2'>
            {[projects[0], projects[1]].map((project, index) => (
                <ProjectItem
                    data={project}
                    key={`project-${index}`}
                />
            ))}
        </div>
    );
};

export default ProjectList;
