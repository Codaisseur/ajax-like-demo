class Like < ActiveRecord::Base
  belongs_to :post
  belongs_to :user

  validates_uniqueness_of :post, scope: :user, message: "You already liked this post!"
end
