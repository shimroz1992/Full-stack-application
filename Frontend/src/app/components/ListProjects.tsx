'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';

interface Project {
  id: number;
  name: string;
  image: string;
  progress: number;
}

const ListProjects = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/v1/users/2/user_projects');
        setProjects(response.data);
        console.log(response);
      } catch (error) {
        console.error('Error fetching projects:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Projects</h1>
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Name</th>
            <th className="py-2 px-4 border-b">Image</th>
            <th className="py-2 px-4 border-b">Progress</th>
          </tr>
        </thead>
        <tbody className='text-center'>
          {projects.map((project) => (
            <tr key={project.id}>
              <td className="py-2 px-4 border-b">{project.project_name}</td>
              <td className="py-2 px-4 border-b items-center flex justify-center">
              <img src={project.image ? project.image : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaWwQik2eprmTQP0G1A_jb3brzeNs2UflOuw&s'} alt="Project" className='w-16 h-16 object-cover rounded-full' />
              </td>
              <td className="py-2 px-4 border-b">{project.progress}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListProjects;
