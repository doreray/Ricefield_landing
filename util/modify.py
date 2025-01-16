import re
in_file = "C:/Users/udbha/Documents/MSU/Burgess/ricefield/Ricefield_landing/src/components/header/Header.module.css.backup"
out_file = "C:/Users/udbha/Documents/MSU/Burgess/ricefield/Ricefield_landing/src/components/header/Header.module.css"

f = open(in_file)
lines = f.readlines()
newlines = []

in_media_block = False
block_braces = 0
for line in lines:
    # we want to ignore responsive styles for mobile
    if "@media" in line and "max-width" in line:
        in_media_block = True
        block_braces = 0

    if in_media_block and "{" in line:
        block_braces += 1
    if in_media_block and "}" in line:
        block_braces -= 1
    # end of media block
    if block_braces == 0:
        in_media_block = False

    # add line without modifying if inside media block
    if in_media_block:
        newlines.append(line)
        continue

    m = re.search("([\d|\.]*)px", line)

    if m is not None:
        num = float(m.groups()[0])
        newNum = int(num * 0.67)

        (start, end) = m.span()
        changedLine = line[:start] + f"{newNum}px" + line[end:]
        newlines.append(changedLine)
    else:
        newlines.append(line)

newfile = open(
    out_file,
    "w"
)

newfile.writelines(newlines)
