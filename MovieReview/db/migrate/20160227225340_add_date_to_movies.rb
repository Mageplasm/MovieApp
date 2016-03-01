class AddDateToMovies < ActiveRecord::Migration
  def change
    add_column :movies, :date, :integer
  end
end
