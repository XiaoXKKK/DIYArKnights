# url = 'https://prts.wiki/index.php?title=%E7%89%B9%E6%AE%8A:%E6%90%9C%E7%B4%A2&limit=100&offset=0&ns6=1&search=%E8%81%8C%E4%B8%9A%E5%88%86%E6%94%AF'
import requests
from bs4 import BeautifulSoup
import os
import urllib.parse

url = 'https://prts.wiki/index.php?title=%E7%89%B9%E6%AE%8A:%E6%90%9C%E7%B4%A2&limit=100&offset=0&ns6=1&search=%E8%81%8C%E4%B8%9A%E5%88%86%E6%94%AF'

response = requests.get(url)

if response.status_code == 200:
    print("Success!")
else:
    print("Error:", response.status_code)

soup = BeautifulSoup(response.text, 'html.parser')
img_tags = soup.find_all('img')

print(img_tags)

if not os.path.exists('pic'):
    os.makedirs('pic')


for img in img_tags:
    img_url = img['data-src']
    # if img_url.startswith('//'):
    #     img_url = 'https:' + img_url
    # elif not img_url.startswith('http'):
    img_url = 'https://prts.wiki' + img_url
    # img_url = urllib.parse.quote(img_url, safe='/:?=&')
    # print(img_url)
    response = requests.get(img_url)
    with open('pic/' + urllib.parse.unquote(img_url.split('/')[-1]), 'wb') as f:
        f.write(response.content)
