require 'rails_helper'

RSpec.describe Marker, type: :model do
  it { should validate_presence_of(:name) }
  it { should validate_presence_of(:latitude) }
  it { should validate_presence_of(:longitude) }
end
