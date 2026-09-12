import csv
import json
import urllib.request

# 1. 填入你剛剛取得的 Google 試算表 CSV 發布連結
CSV_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vTpohfxI1oSpi3k2jyuS7XKBL96f_p7r3qmAFR4SyilIijt6xdZbNwD5kfZi5vGXdPumcfP5lRDNwd1/pub?output=csv"

# 2. 定義輸出 JSON 的路徑 (對應到你的靜態網站讀取位置)
OUTPUT_JSON_PATH = "assets/data.json"

def convert_csv_to_json():
    print("正在下載 Google 試算表資料...")
    response = urllib.request.urlopen(CSV_URL)
    lines = [line.decode('utf-8') for line in response.readlines()]
    
    # 解析 CSV
    reader = csv.DictReader(lines)
    data = [row for row in reader]
    
    # 寫入 JSON 檔案
    with open(OUTPUT_JSON_PATH, 'w', encoding='utf-8') as f:
        json.dump(data, f, ensure_ascii=False, indent=2)
    
    print(f"成功轉換 {len(data)} 筆資料並儲存至 {OUTPUT_JSON_PATH}")

if __name__ == "__main__":
    convert_csv_to_json()