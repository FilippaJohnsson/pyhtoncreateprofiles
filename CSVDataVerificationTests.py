import csv
import unittest

class CSVDataVerificationTests(unittest.TestCase):
    def test_csv_columns_count_should_be_12(self):
        with open('profiles1.csv', 'r', newline='') as csvfile:
            reader = csv.reader(csvfile)
            for row in reader:
                self.assertEqual(len(row), 12, "CSV file does not contain 12 columns")

    def test_csv_rows_count_should_be_at_least_900(self):
        row_count = 0
        with open('profiles1.csv', 'r', newline='') as csvfile:
            reader = csv.reader(csvfile)
            for row in reader:
                row_count += 1
        self.assertGreaterEqual(row_count, 900, "CSV file does not contain 900+ rows")

if __name__ == '__main__':
    unittest.main()