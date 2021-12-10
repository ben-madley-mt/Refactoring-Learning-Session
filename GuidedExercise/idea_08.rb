class Idea08
  # A little harder. Move the lines so you can abstract a single function called twice
  def move_and_abstract(plate1, plate2)
    plate1 = plate1.gsub(' ', '')
    plate2 = plate2.gsub(' ', '')
    plate1 = plate1.gsub('A', '4')
    plate2 = plate2.gsub('A', '4')
    plate1 = plate1.gsub('B', '8')
    plate2 = plate2.gsub('B', '8')
    plate1 = plate1.gsub('D', '0')
    plate2 = plate2.gsub('D', '0')
    plate1 = plate1.gsub('G', '6')
    plate2 = plate2.gsub('G', '6')
    plate1 = plate1.gsub('I', '1')
    plate2 = plate2.gsub('I', '1')
    plate1 = plate1.gsub('O', '0')
    plate2 = plate2.gsub('O', '0')
    plate1 = plate1.gsub('T', '7')
    plate2 = plate2.gsub('T', '7')
    plate1 = plate1.gsub('Y', '7')
    plate2 = plate2.gsub('Y', '7')
    plate1 = plate1.gsub('Z', '2')
    plate2 = plate2.gsub('Z', '2')

    plate1 == plate2
  end
end
