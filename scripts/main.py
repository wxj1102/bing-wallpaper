import requests
import datetime
import os
from PIL import Image

# 请求API获取数据
response = requests.get('https://cn.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=zh-CN')
data = response.json()

# 提取图片链接并替换分辨率
url_base = data['images'][0]['url']
link = f"https://bing.com{url_base}".replace('1920x1080', 'UHD')

# 提取图片版权信息
copyright_info = data['images'][0]['copyright']

# 下载图片
image_response = requests.get(link)
today = datetime.datetime.now().strftime('%Y-%m-%d')
image_path = f'./images/{today}.jpg'
thumb_path = f'./images/{today}_thumb.jpg'

# 确保目录存在
os.makedirs('./images', exist_ok=True)

# 将图片保存到指定路径
with open(image_path, 'wb') as file:
    file.write(image_response.content)
    
print(f"Image saved to {image_path}")

# 缩略图
with Image.open(image_path) as img:
    # Convert to RGB if the image is not in that mode (e.g., if it's a CMYK image)
    if img.mode != 'RGB':
        img = img.convert('RGB')        
    # Create thumbnail
    img.thumbnail((512, 512))
    # Save thumbnail
    img.save(thumb_path)
    
# 更新script.js文件
script_path = './script.js'

# 读取现有的script.js文件内容
with open(script_path, 'r', encoding='utf-8') as file:
    lines = file.readlines()

# 找到const images = [这一行，并在后面添加新的图片信息
for i, line in enumerate(lines):
    if 'const images = [' in line:
        insert_index = i + 1
        new_entry = f"        {{ src: '{image_path}', name: '{copyright_info}' }},\n"
        lines.insert(insert_index, new_entry)
        break

# 将更新后的内容写回script.js文件
with open(script_path, 'w', encoding='utf-8') as file:
    file.writelines(lines)

print(f"Updated {script_path} with new image entry.")
