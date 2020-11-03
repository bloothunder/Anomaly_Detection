import sys 
import csv 

testCsv = "C:\\Users\\x55791\\Desktop\\SmartGrid Site\\Capstone Website\\historicalData\\test.csv"
historicalPage = "C:\\Users\\x55791\\Desktop\\SmartGrid Site\\Capstone Website\\historicalData\\historicalData.html"

htmlfile = open(historicalPage, 'r+')

def myCSV(csvFile, historicalData):

    # Local Variable Declearation
    trueCount = 0
    lineCount = 0
    
    # Open the CSV file for reading 
    reader = csv.reader(open(testCsv, "rU"))
    
    # Read through file, file type is 'list'
    global fileContents
    fileContents = htmlfile.readlines()
    htmlfile.close()
    # Initialize rownum variable 
    rownum = 0 
    # Open tag and write <table> tag 


    # Commenting out write to use insert function.
    
    # htmlfile.write('<table>') 
    fileContents.insert(145, '<table>')
    
    # Generate table contents 
    for row in reader: # Read a single row from the CSV file 
    # Write header row. Assumes first row in csv contains header 
        if rownum == 0: 
            # htmlfile.write('<tr>') # write <tr> tag
            fileContents.insert(146, '<tr>')
            for column in row: 
                # htmlfile.write('<th>' + column + '</th>')
                tableContents = '<th>' + column + '</th>'
                fileContents.insert(147, tableContents)
            # htmlfile.write('</tr>')
            fileContents.insert(148, '</tr>')
        #write all other rows
            
        else:
            # htmlfile.write('<tr>')     
            fileContents.insert(149, '</tr>')
            for column in row: 
                 # htmlfile.write('<td>' + column + '</td>')
                 fileContents.insert(150, tableContents)
            # htmlfile.write('</tr>')
            fileContents.insert(151, '</tr>')
           
        #increment row count
        rownum += 1
        # write </table> tag
        fileContents.insert(152,'</table>') 
        # print results to shell 
        print ("Created " + str(rownum) + " row table.")
        
        

         

myCSV(testCsv, historicalPage)
print fileContents




## ------------- Function to Fine the Cue String Location --------- ## 

# Test to find what number cue string is



##for line in fileContents:
##    lineCount += 1
##    if ('\t      <!--- Historical Data Test') in line:
##        trueCount += 1
##        print "I'm at line " + str(lineCount) ## String is at line 145
##        
##    else:
##        print "nah"
##    
##print trueCount













