class Idea05
  # Shift lines is sort of a matter of preference unless you're trying to do something specific.
  # Here, can you use shift lines (with Alt + Shift + up and Alt + Shift + down) so that email is completely normalised
  # followed by phone number?
  def shift_lines(email_address, phone_number)
    email_address = email_address.downcase
    phone_number_parts = phone_number.split
    email_address_parts = email_address.split('+')
    phone_number = phone_number_parts.join('')
    if email_address_parts.length > 1
      email_address = email_address_parts[0] + '@' + email_address_parts[1].split('@')[1]
    end

    phone_number = '+44' + phone_number[1..-1]

    [email_address, phone_number]
  end
end
