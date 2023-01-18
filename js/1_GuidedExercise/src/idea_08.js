// Task: A little harder. Move the lines so you can abstract a single function that you call twice.
// Helpful hint: Look at the difference between extracting a global method and a extracting a method
//               within the function
const moveAndExtract = (plate1, plate2) => {
    plate1 = plate1.replace(/ /g, '')
    plate2 = plate2.replace(/ /g, '')
    plate1 = plate1.replace(/A/g, '4')
    plate2 = plate2.replace(/A/g, '4')
    plate1 = plate1.replace(/B/g, '8')
    plate2 = plate2.replace(/B/g, '8')
    plate1 = plate1.replace(/D/g, '0')
    plate2 = plate2.replace(/D/g, '0')
    plate1 = plate1.replace(/G/g, '6')
    plate2 = plate2.replace(/G/g, '6')
    plate1 = plate1.replace(/I/g, '1')
    plate2 = plate2.replace(/I/g, '1')
    plate1 = plate1.replace(/O/g, '0')
    plate2 = plate2.replace(/O/g, '0')
    plate1 = plate1.replace(/T/g, '7')
    plate2 = plate2.replace(/T/g, '7')
    plate1 = plate1.replace(/Y/g, '7')
    plate2 = plate2.replace(/Y/g, '7')
    plate1 = plate1.replace(/Z/g, '2')
    plate2 = plate2.replace(/Z/g, '2')

    return plate1 === plate2
}

module.exports = {moveAndExtract}
