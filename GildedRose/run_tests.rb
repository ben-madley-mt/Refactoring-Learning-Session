# frozen_string_literal: true

def run_tests
  value = `bundle exec rspec`
  puts value
  $?.exitstatus
end

result = run_tests
while result === 0
  sleep 2
  result = run_tests
end

puts "TESTS FAILED"