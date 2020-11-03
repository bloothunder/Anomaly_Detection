import csv
 
dataRows = []
with open('web_data_27FEB.csv', newline='') as csvData:
		datareader = csv.reader(csvData, delimiter=' ', quotechar='|')
		for row in datareader:
			dataRows.append(row)
print(dataRows)
		
 