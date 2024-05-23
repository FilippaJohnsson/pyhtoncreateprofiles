import json
import unittest

class CSVDataVerificationTests(unittest.TestCase):
    def test_json_properties_existence_all_should_exist(self):
        with open('data.json', 'r') as jsonfile:
            data = json.load(jsonfile)
            # Add more checks for other properties as needed
            expected_properties = [
                'Givenname', 'Surname', 'Streetaddress', 'City', 'Zipcode',
                'Country', 'CountryCode', 'NationalId', 'TelephoneCountryCode',
                'Telephone', 'Birthday', 'ConsentToContact'
            ]
            for property_name in expected_properties:
                self.assertTrue(any(property_name in item for item in data), f"Missing {property_name} in JSON file")
            
    def test_json_rows_count_should_be_at_least_900(self):
        with open('data.json', 'r') as jsonfile:
            data = json.load(jsonfile)
            self.assertGreaterEqual(len(data), 900, "JSON file does not contain 900+ rows")

if __name__ == '__main__':
    unittest.main()