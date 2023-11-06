import ProjectItem from '@/shared/components/ProjectItem';
import tProject from '@/types/tProject';

type TProjectListProps = {
    data: tProject[];
    limit?: number;
};

const ProjectList = (props: TProjectListProps) => {
    const { data, limit } = props;

    return (
        <div className='grid grid-cols-1 gap-8 sm:grid-cols-2'>
            {data.slice(0, limit).map((project, index) => (
                <ProjectItem
                    data={project}
                    key={`project-${index}`}
                />
            ))}
        </div>
    );
};

export default ProjectList;
