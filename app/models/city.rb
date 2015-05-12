class City < ActiveRecord::Base
  attr_accessible :name, :abbreviation, :moniker, :resident_image_credit,
    :contact_email, :agency_site, :affiliates_attributes,
    :possessive, :brought_by, :agency_url, :color_cd, :statement

  mount_uploader :image, CityImageUploader
  mount_uploader :resident_image, ResidentImageUploader

  as_enum :color, [:gold, :green, :blue], prefix: true

  has_many :affiliates
  accepts_nested_attributes_for :affiliates, allow_destroy: true

  has_one :plan

  validates :name, :abbreviation, :possessive, :brought_by, :agency_url, :contact_email,
    :color_cd, presence: true

<<<<<<< HEAD
  validates :abbreviation, length: { :maximum => 7 }
=======
  validates :abbreviation, length: { :maximum => 4 }
>>>>>>> 0ac6b25d341246735da47a54bf17e0852f58c6ae

end
