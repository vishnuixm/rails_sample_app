

namespace :db do
  
  desc "Fill database with sample data"
  task :populate => :environment do
    require 'faker'
    Rake::Task['db:reset'].invoke
    admin = User.create!(:name => "Example User", :email => "example@railstutorial.org", :password => "foobar", :password_confirmation => "foobar")
    admin.toggle!(:admin)
    99.times do |n|
      name = Faker::Name.name
      email = Faker::Internet.email
      password = "password"
      User.create!(:name => name, :email => email, :password => password, :password_confirmation => password)	
    end
    users = User.all.limit(6)
    users.each do |user|
	  50.times do
	    user.microposts.create!(:content => Faker::Lorem.sentence(5))
	  end
	end
  end
end
