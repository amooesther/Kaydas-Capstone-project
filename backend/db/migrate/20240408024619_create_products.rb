class CreateProducts < ActiveRecord::Migration[7.0]
  def change
    create_table :products do |t|
      t.string :name
      t.string :description
      t.string :category
      t.string :image_url
      t.string :price
      t.string :stock
      t.string :temperature_requirement
      t.string :weight
     

      t.timestamps
    end
  end
end
