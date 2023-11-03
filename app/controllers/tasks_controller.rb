class TasksController < ApplicationController
  def index
    tasks = Task.all
    render json: tasks, status: :ok
  end

  # def create
  #   task = Task.create(permit_params)
  #   render json: task, status: :ok
  # end
  def create
    task = Task.new(permit_params)
    if task.save
      render json: {message: "Task created successfully"}, status: :ok
    else
      render json: {error: task.errors}, status: :bad_request
    end
  end

  def show
    task = Task.find_by(id: params[:id])
    if task
      render json: task, status: :ok
    else
      render json: {error: "Task not found"}, status: :not_found
    end
  end

  def update
    task = Task.find_by(id: params[:id])
    if task
      task.update(permit_params)
      render json: task, status: :ok
    else
      render json: {error: "Task not found"}, status: :not_found
    end
  end

  def destroy
    task = Task.find_by(id: params[:id])
    if task
      task.destroy
    else
      render json: {error: "Task not found"}, status: :not_found
    end
  end

  def permit_params
    params.permit(:title, :description, :status, :creation_date, :user_id)
  end
end
