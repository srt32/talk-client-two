class CreateConversations < ActiveRecord::Migration
  def change
    create_table :conversations do |t|
      t.timestamps null: false

      t.integer :contact_id, null: false
    end

    add_index :conversations, :contact_id
  end
end
