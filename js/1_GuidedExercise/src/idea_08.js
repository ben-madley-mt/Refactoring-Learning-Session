// Task: Task: A little harder. Move the lines so you can abstract a single function that you call twice.
const moveAndExtract = (plate1, plate2) => {
    plate1 = plate1.replaceAll(' ', '')
    plate2 = plate2.replaceAll(' ', '')
    plate1 = plate1.replaceAll('A', '4')
    plate2 = plate2.replaceAll('A', '4')
    plate1 = plate1.replaceAll('B', '8')
    plate2 = plate2.replaceAll('B', '8')
    plate1 = plate1.replaceAll('D', '0')
    plate2 = plate2.replaceAll('D', '0')
    plate1 = plate1.replaceAll('G', '6')
    plate2 = plate2.replaceAll('G', '6')
    plate1 = plate1.replaceAll('I', '1')
    plate2 = plate2.replaceAll('I', '1')
    plate1 = plate1.replaceAll('O', '0')
    plate2 = plate2.replaceAll('O', '0')
    plate1 = plate1.replaceAll('T', '7')
    plate2 = plate2.replaceAll('T', '7')
    plate1 = plate1.replaceAll('Y', '7')
    plate2 = plate2.replaceAll('Y', '7')
    plate1 = plate1.replaceAll('Z', '2')
    plate2 = plate2.replaceAll('Z', '2')

    return plate1 === plate2
}

module.exports = {moveAndExtract}
