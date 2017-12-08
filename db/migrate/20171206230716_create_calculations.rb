class CreateCalculations < ActiveRecord::Migration[5.1]
  def change
    create_table :calculations do |t|
      t.string :log

      t.timestamps
    end
  end
end
