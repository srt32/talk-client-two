class CreateContacts < ActiveRecord::Migration
  def change
    create_table :contacts do |t|
      t.timestamps null: false

      t.string :name, null: false
      t.integer :frequency, null: false
    end
  end
end
