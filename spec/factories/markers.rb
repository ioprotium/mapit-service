FactoryBot.define do
  factory :marker do
    name { Faker::Company.name }
    latitude { Faker::Number.decimal(2) }
    longitude { Faker::Number.decimal(2) }
  end
end