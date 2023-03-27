import os

# 获取pic文件夹下所有文件的路径
files = os.listdir("pic")
newl = []
# 遍历每个文件
for file in files:
  # 分割文件名和扩展名
  filename, ext = os.path.splitext(file)
  # 分割文件名中的“_”并取最后一个元素
  new_name = filename.split("_")[-1]
  newl.append(new_name)

print(newl)