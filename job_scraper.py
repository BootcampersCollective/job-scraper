from bs4 import BeautifulSoup as bs
import pandas as pd
import requests

page = requests.get("https://www.builtincolorado.com/jobs")

soup = bs(page.content, 'html.parser')
jobs = soup.select('div.view-jobs')
# print(jobs[0].get_text())

job_title = soup.find_all('h2', class_= 'title')
print(job_title[0].get_text())
print(len(job_title))
job_location = soup.find_all(class_ = 'job-location')
# print(job_location[0].get_text())
print(len(job_location))
job_company = soup.find_all(class_ = 'company-title')
# print(job_company[0].get_text())
print(len(job_company))
job_description = soup.find_all(class_ = 'description')
# print(job_description[0].get_text())
print(len(job_description))
job_perks = soup.find_all(class_ = 'perks')
# print(job_perks[0].get_text())
print(len(job_perks))

jobs_df = pd.DataFrame({
    'Job Title': job_title,
    'Job Location': job_location,
    'Company': job_company,
    'Job Description': job_description,
    'Perks': job_perks
})
jobs_df