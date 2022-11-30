// Task: Shift lines is sort of a matter of preference unless you're trying to do something specific.
// Use shift lines (with Alt + Shift + up and Alt + Shift + down) so that email is completely normalised
// first, then the phone number is normalised.
const shift_lines = (email_address, phone_number) => {
  email_address = email_address.toLowerCase()
  const phone_number_parts = phone_number.split(' ')
  const email_address_parts = email_address.split('+')
  phone_number = phone_number_parts.join('')

  if (email_address_parts.length > 1) {
    email_address = email_address_parts[0] + '@' + email_address_parts[1].split('@')[1]
  }

  phone_number = '+44' + phone_number.substring(1)

  return [email_address, phone_number]
}

module.exports = { shift_lines }
