
class Api::V1::ProjectsController < ApplicationController
  def index
   user_projects = UserProject.where(user_id: params[:user_id])
   render json: serialize_response(user_projects)
  end

def serialize_response(user_projects)
   response = []
   user_projects&.each do |user_project|
      response << project_hash(user_project)
   end
   response
end

   def project_hash(user_project)
      {project_name: user_project.project&.name, progress: user_project.progress, options: user_project.options}
   end
end
