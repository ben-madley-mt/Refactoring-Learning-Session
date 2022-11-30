// Task: Rename make_bigger to something more specific.
const rename_a_poor_method_name = (number_list) => {
  return number_list.map(make_bigger)
}

const make_bigger = (number) => number * 2

module.exports = { rename_a_poor_method_name }
