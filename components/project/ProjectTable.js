
const ProjectTable = ({projects}) => {
   

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-x-auto">
      <table className="min-w-full">
        <thead>
          <tr className="bg-gray-700 text-white">
            <th className="px-6 py-3">#</th>
            <th className="px-6 py-3">Client Name</th>
            <th className="px-6 py-3">Team</th>
            <th className="px-6 py-3">Project</th>
            <th className="px-6 py-3">Project Cost</th>
            <th className="px-6 py-3">Project Completed</th>
            <th className="px-6 py-3">Payment</th>
            <th className="px-6 py-3">Status</th>
          </tr>
        </thead>
        <tbody>
          {projects.map((project, index) => (
            <tr key={project.id} className={index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}>
              <td className="px-6 py-4 text-center">{project.id}</td>
              <td className="px-6 py-4 text-center">{project.clientName}</td>
              <td className="px-6 py-4 text-center ">
                <div className="flex space-x-1 justify-center">
                  {project.team.map((member) => (
                    <img
                      key={member.id}
                      src={member.avatar}
                      alt={member.name}
                      className="h-8 w-8 rounded-full"
                    />
                  ))}
                </div>
              </td>
              <td className="px-6 py-4 text-center">{project.projectName}</td>
              <td className="px-6 py-4 text-center">{project.projectCost}</td>
              <td className="px-6 py-4  flex justify-center items-start  my-4">
                <div className="h-4 w-32 bg-gray-200 rounded-full">
                  <div
                    className="h-4 bg-gray-500 rounded-full"
                    style={{ width: `${project.projectCompleted}%` }}
                  ></div>
                </div>
              </td>
              <td className="px-6 py-4  text-center">{project.payment}</td>
              <td className="px-6 py-4  text-center">
              <div
                  className={`${project.status === 'Done'? 'bg-orange-500' : 'bg-gray-500'} text-white px-2 py-1 rounded-lg`}
                  style={{ width: '120px !important' }} 
                >
                  {project.status}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProjectTable;
