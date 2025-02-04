---
title: Tutorial 3
lastUpdated: 2025-02-04
---

# Python3 Tutorial (3)


## ข้อมูลแบบอ้างอิง (Non-Primitive Data Type หรือ Reference Date Types)

- List
- Tuple
- Set
- Dictionary

## List

### แบบ 1


```python
# List แบบ 1

a = [] # สร้าง List เปล่า
a = [1,2,3,4]

```

### แบบ 2


```python
a = list() # สร้าง List เปล่่า
a= list((1,2,3,4))
```

### จำนวนสมาชิกใน List


```python
a = [1,2,3,4]
print(len(a)) # 4

b = list((1,2,3))
print(len(b))
```

### การรวม List


```python
# ตัวอย่าง 1
a = [1,2,3]
b = [4,5,6]
c = a + b

print(c) # [1,2,3,4,5,6]

```


```python
# ตัวอย่าง 2
d = list((7,8,9))
e = d + c
print(e) # [7,8,9,1,2,3,4,5,6]
```

### การอ้างอิงตำแหน่งใน List

|list|7|8|9|1|2|3|4|5|6|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|ลำดับ|0|1|2|3|4|5|6|7|8|
|ลำดับ|-9|-8|-7|-6|-5|-4|-3|-2|-1|


```python
e = [7,8,9,1,2,3,4,5,6]
print(e[0]) # 7
print(e[-9]) # 7


print(e[0:]) # [7,8,9,1,2,3,4,5,6]
print(e[:1]) # [7]
print(e[1:2]) # [8]
print(e[1:3]) # [8,9]

print(e[:-3]) # [7,8,9,1,2,3]
```

### ฟังก์ชั่นของ List

|ชื่อฟังก์ชั่น|คำอธิบาย|
|:-:|:-:|
|append(element)|เพิ่มสมาชิกต่อท้ายทีละอัน|
|extend([element])|เพิ่มสมาชิกต่อท้ายทีละหลายๆอัน|
|insert(index, element)|แทรกสมาชิกลงไปใน List ตาม Index ที่กำหนด|
|clear()|ลบสมาชิกทั้งหมดออกจาก List|


```python
name = ['K']
name.append('R')
print(name) # ['K','R']

name.extend([' ','C','H'])
print(name) # ['K', 'R', ' ', 'C', 'H']

name.insert(2,'I')
print(name) # ['K', 'R', 'I', ' ', 'C', 'H']

name.insert(3, 'T')
print(name) # ['K', 'R', 'I', 'T', ' ', 'C', 'H']

name.insert(-1, 'O')
print(name) # ['K', 'R', 'I', 'T', ' ', 'C', 'O', 'H']

name.clear()
print(name) # []

```

### ฟังก์ชั่นของ List (2)

|ชื่อฟังก์ชั่น|คำอธิบาย|
|:-:|:-:|
|remove(element)|ลบสมาชิกที่ระบุออกจาก List|
|count(element)|นับจำนวนสมาชิกที่ซ้ำกัน|
|sort()|เรียงลำดับสมาชิก|
|reverse()|เรียงลำดับสมาชิกย้อนกลับ|


```python
a = [1,2,1]

print(a.count(1)) # 2

a = [5,3,3,4,2,1]
a.remove(3)

print(a) # [5,3,4,2,1]

a.sort()
print(a) # [1,2,3,4,5]

a.reverse()
print(a) # [5,4,3,2,1]
```

## Tuple

- ใน Tuple มีค่า Value และจะมีค่า Index เป็นตัวบอกลำดับ
- Tuple เมื่อถูกสร้างแล้วจะเปลี่ยนแปลงค่าไม่ได้



```python
a = (1,2,3)
print(a[0]) # 1

a[0] = 0 # จะ Error เมื่อมีการแก้ไขค่า
print(a) 
```

### Tuple แบบ 1


```python
# แบบ 1
a = ()
print(a) # ()

a = (1,2,3)
print(a) # (1,2,3)
```

### Tuple แบบ 2


```python
a = tuple((1,2))

print(a) # (1,2)
```

### นับจำนวนใน Tuple


```python
a = tuple((1,2))
print(len(a)) # 2
```

### การรวม Tuple


```python
a = tuple((1,2))
b = tuple((3,4))

c = a + b
print(c) # (1,2,3,4)
```

### การคูณ Tuple (การทำซ้ำ)


```python
a = tuple((1,2))

b = a * 2

print(b) # (1,2,1,2)

a = [1,2]
b = a * 2 

print(b) # [1,2,1,2]
```

### การกระจายตัวแปร


```python
red,green,blue = ("red","green","blue")

print(red, green, blue) # red, green, blue
```

### การเข้าถึง Tuple


|tuple|1|2|3|4
|:-:|:-:|:-:|:-:|:-:|
|index|0|1|2|3
|index|-4|-3|-2|-1|


```python
a = (1,2,3)

print(a[0:]) # (1,2,3)

print(a[:1]) # (1,)

print(a[1:2]) # (2,)

print(a[1:2][0]) # 2

for i in a:
    print(i) 

# 1
# 2
# 3
```

### ฟังก์ชั่นใน Tuple

|คำสั่ง|คำอธิบาย|
|:-:|:-:|
|count(element)|นับจำนวนสมาชิกที่มีซ้ำกัน|
|index(element)|ตรวจสอบลำดับสมาชิกใน Tuple|



```python
a = (1,2,1,3)

print(a.count(1)) # 2

print(a.index(1)) # 0

print(a.index(0)) # Error
```

## Set

- Set จะอยู่ในรูปของปีกกา {}
- Set จะไม่ซ้ำกัน
- Set จะไม่สามารถเปลี่ยนแปลงค่าได้

### แบบที่ 1


```python
a = {}
print(a) # {}

a = {1,1}
print(a) # {1}

a[0] = 0 # Error
```

### แบบที่ 2


```python
a = set({1,2,3})
print(a) # {1,2,3}

a = set((1,2,3))
print(a) # {1,2,3}

a = set((1,1,2,2,3))
print(a) # {1,2,3}
```

### การนับจำนวนของ Set


```python
a = set({1,2,3})
print(len(a)) # 3
```

### การวนค่าใน Set


```python
a = set((1,2,3))

for i in a:
    print(i)

# 1
# 2
# 3
```

### การค้นหาค่าใน Set


```python
a = set((1,2,3))

if 1 in a:
    print("1 in a") # 1 in a
else:
    print("1 not in a")
```

### ฟังก์ชั่นจัดการ Set

|ฟังก์ชั่น|คำอธิบาย|
|:-:|:-:|
|add(element)|เพิ่มสมาชิก 1 รายการ|
|update((element))|เพิ่มสมาชิกหลายรายการ|
|discard(element)|ลบสมาชิกที่มีอยู่ออกจาก set|


```python
a = {1,2,3}
a.add(4)
print(a) # {1,2,3,4}
a.update((5,6)) 
print(a) # {1,2,3,4,5,6}
a.discard(1)
print(a) # {2,3,4,5,6}
```

### ฟังก์ชั่นจัดการ Set (2)

|ฟังก์ชั่น|คำอธิบาย|
|:-:|:-:|
|union(set(element))|รวมสมาชิกใน Set A และ B เข้าด้วยกัน|
|intersection(set(element))|สมาชิกใน Set A และ B ที่มีร่วมกัน|
|difference(set(element))|สมาชิกที่มีอยู่ใน Set A แต่ไม่อยู่ใน B|


```python
a = {1,2}
b = {1,2,3}
c = a.union(b)
print(c) # {1,2,3}

b = {1,2,3}
c = a.intersection(b)
print(c) # {1,2}

c = a.difference(b)
print(c) # set()

c = b.difference(a) 
print(c) # {3}
```

## Dictionary

- มีลักษณะการเป็นเป็น Key - Value เช่น {"key": value}


```python
colors = {"r":"red","g":"green","b":"blue"}
print(colors) # {'r': 'red', 'g': 'green', 'b': 'blue'}

print(colors["r"]) # red

colors["r"] = "Red"
print(colors["r"]) # Red

colors["y"] = "Yellow"
print(colors) # {'r': 'Red', 'g': 'green', 'b': 'blue', 'y': 'Yellow'}

```

### การนับจำนวนใน Dictionary


```python
colors = {'r': 'Red', 'g': 'green', 'b': 'blue', 'y': 'Yellow'}
print(len(colors)) # 4
```

### ฟังก์ชั่นใน Dictionary

|คำสั่ง|คำอธิบาย|
|:-:|:-:|
|keys()|keys ทั้งหมดใน Dictionary|
|values()|values ทั้งหมดใน Dictionary|
|get(key)|ดึงข้อมูลใน Dictionary ตาม Key ที่ระบุ|
|items()|ดึงข้อมูล Keys และ Values ทั้งหมด|


```python
colors = {'r': 'Red', 'g': 'green', 'b': 'blue', 'y': 'Yellow'}

print(colors.keys()) # dict_keys(['r', 'g', 'b', 'y'])

print(colors.values()) # dict_values(['Red', 'green', 'blue', 'Yellow'])

print(colors.get('r')) # Red

print(colors.items()) # dict_items([('r', 'Red'), ('g', 'green'), ('b', 'blue'), ('y', 'Yellow')])

for key in colors.keys():
    print(key)
# r
# g
# b
# y
for value in colors.values():
    print(value)

# Red
# green
# blue
# Yellow
for color in colors.items():
    print(color)


# ('r', 'Red')
# ('g', 'green')
# ('b', 'blue')
# ('y', 'Yellow')

for key,value in colors.items():
    print(key," = ", value)

# r  =  Red
# g  =  green
# b  =  blue
# y  =  Yellow
```

### ฟังก์ชั่นใน Dictionary (2)

|คำสั่ง|คำอธิบาย|
|:-:|:-:|
|clear()|ลบสมาชิกทั้งหมดออกจาก Dictionary|
|pop(key)|ลบข้อมูลใน Dictionary จาก Key ที่ระบุ|
|update({key,value})|เพิ่มหรืออัพเดตข้อมูลใน Dictionary|
|copy()|คัดลอก Dictionary|



```python
colors = {'r': 'Red', 'g': 'green', 'b': 'blue', 'y': 'Yellow'}

print(colors.pop('r')) # Red
print(colors) # {'g': 'green', 'b': 'blue', 'y': 'Yellow'}

colors.update({'r':'red'})
print(colors) # {'g': 'green', 'b': 'blue', 'y': 'Yellow', 'r': 'red'}

colors.update({'r':"Red"})
print(colors) # {'g': 'green', 'b': 'blue', 'y': 'Yellow', 'r': 'Red'}

rgb = colors.copy()
rgb.pop('y')

print(colors) # {'g': 'green', 'b': 'blue', 'r': 'Red'}
print(colors) # {'g': 'green', 'b': 'blue', 'y': 'Yellow', 'r': 'Red'}

```

## Identity Operator

- ตัวแปร 2 ตัวจะเท่ากัน ถ้าชี้ไปยัง memory address เดียวกัน


```python
a = [1,2,3]
b = a

print(b is a) # True

c = [1,2,3]
print(c is a) # False

print(b is not a) # False
print(c is not a) # True
```

## Membership operator

- หาว่ามีค่าอยู่ใน ตัวแปรมั๊ย


```python
a = [1,2,3]

print(1 in a) # True
print(4 in a) # False

print(1 not in a) # False
print(4 not in a) # True
```
