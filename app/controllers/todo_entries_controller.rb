class TodoEntriesController < ApplicationController

  respond_to :json

  def index
    respond_with TodoEntry.all
  end

  def show
    respond_with TodoEntry.find(params[:id])
  end

  def create
    respond_with TodoEntry.create(entry_params)
  end

  def update
    respond_with TodoEntry.find(params[:id]).update_attributes(entry_params)
  end

  def destroy
    respond_with TodoEntry.destroy(params[:id])
  end

  private

  def entry_params
    params.require(:todo_entry).permit(:title, :completed)
  end

end
