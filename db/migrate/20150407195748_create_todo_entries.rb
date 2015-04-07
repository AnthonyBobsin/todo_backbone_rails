class CreateTodoEntries < ActiveRecord::Migration
  def change
    create_table :todo_entries do |t|
      t.string :title
      t.boolean :completed

      t.timestamps null: false
    end
  end
end
