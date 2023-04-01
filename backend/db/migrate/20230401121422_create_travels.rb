class CreateTravels < ActiveRecord::Migration[7.0]
  def change
    create_table :travels do |t|
      t.string :nome
      t.text :desc
      t.datetime :data
      t.float :price

      t.timestamps
    end
  end
end
