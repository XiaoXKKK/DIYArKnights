import requests
import json
from bs4 import BeautifulSoup

url = "https://prts.wiki/w/%E5%88%86%E6%94%AF%E4%B8%80%E8%A7%88"
response = requests.get(url)
soup = BeautifulSoup(response.content, "html.parser")
th_tags = soup.find_all("th", {"width": "80px"})
th_text_list = [th.text.strip() for th in th_tags]

td_tags = soup.find_all("td", {"width": "400px"})
td_text_list = [td.text.strip() for td in td_tags]

print(th_text_list)
print(td_text_list)


import urllib

data = []
for i in range(len(th_text_list)):
    data.append({"id": i, "th": urllib.parse.unquote(th_text_list[i]), "td": urllib.parse.unquote(td_text_list[i])})
with open("json/data.json", "w", encoding="utf-8") as f:
    json.dump(data, f, ensure_ascii=False)
