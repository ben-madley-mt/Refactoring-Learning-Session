# frozen_string_literal: true

def run_tests
  value = `bundle exec ruby -Ilib:test ideas_test.rb`
  puts value
  $?.exitstatus
end

result = run_tests
while result === 0
  puts "\e[32mPASSING\e[0m"
  sleep 2
  result = run_tests
end

puts "\e[31mTESTS FAILED!\e[0m"