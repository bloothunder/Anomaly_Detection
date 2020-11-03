import sys 
import csv 


searchQuery = str('\t      <!--- Historical') ## Attempt search query

testCsv = "C:\\Users\\x55791\\Desktop\\SmartGrid Site\\Capstone Website\\historicalData\\test.csv"
historicalPage = "C:\\Users\\x55791\\Desktop\\SmartGrid Site\\Capstone Website\\historicalData\\historicalData.html"

htmlfile = open(historicalPage, 'r+')

def myCSV(csvFile, historicalData):


    # Open the CSV file for reading 
    reader = csv.reader(open(testCsv, "rU"))  
    # initialize rownum variable 
    rownum = 0 
    # write <table> tag 
    htmlfile.write('<table>') 

        # generate table contents 

    for row in reader: # Read a single row from the CSV file 
    # write header row. assumes first row in csv contains header 
        if rownum == 0: 
            htmlfile.write('<tr>') # write <tr> tag 
            for column in row: 
                htmlfile.write('<th>' + column + '</th>') 
            htmlfile.write('</tr>') 
        #write all other rows    
        else:
            htmlfile.write('<tr>')     
            for column in row: 
                 htmlfile.write('<td>' + column + '</td>') 
            htmlfile.write('</tr>') 
           
        #increment row count
        rownum += 1
        # write </table> tag
        htmlfile.write('</table>') 
        # print results to shell 
        print ("Created " + str(rownum) + " row table.") 

         

myCSV(testCsv, historicalPage)





## ------------- Function to Fine the Cue String Location --------- ## 

trueCount = 0
lineCount = 0


# Sort through to find where to insert table
fileContents = htmlfile.readlines() ## Reads as type: list 
for line in fileContents:
    lineCount += 1
    if ('\t      <!--- Historical Data Test') in line:
        trueCount += 1
        print "I'm at line " + str(lineCount) ## String is at line 45
        
    else:
        print "nah"
    
print trueCount
















