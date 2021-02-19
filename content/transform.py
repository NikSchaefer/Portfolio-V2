import json
import os


dirr = os.listdir('content/projects/')
projects = []
for x in dirr:
    if ".md" in x:
        projects.append(x)


out = []

for file_name in projects:
    with open(os.path.join(os.curdir, "content/projects/", file_name), 'r') as file:
        objects = file.read().split("---")
        current_object = {
            "text": objects[2].replace("\n", "").replace("\\", "").strip().replace('"', "")
        }
        for line in objects[1].splitlines():
            arr = line.split(':')
            if len(arr) > 2:
                arr[1] = arr[1] + arr[2]
            if len(arr) < 2:
                continue
            name = arr[0].strip().replace(
                "\n", "").replace("\\", "").replace('"', "")
            current_object[(name)] = arr[1].replace(
                "\n", "").replace("\\", "").strip().replace('"', "")
        out.append(current_object)

print(out)
with open(os.path.join(os.curdir, "content/projects/file.json"), 'w') as file:
    json.dump(out, file)
