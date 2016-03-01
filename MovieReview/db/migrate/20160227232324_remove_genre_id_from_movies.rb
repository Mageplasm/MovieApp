class RemoveGenreIdFromMovies < ActiveRecord::Migration
  def change
    remove_column :movies, :genre_id, :integer
  end
end
