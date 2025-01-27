---
title: Tutorial 1
lastUpdated: 2025-01-27
---

# Python3 Tutorial

- Python คือภาษาคอมพิวเตอร์ เวลาเขียนคำสั่งให้ทำงาน จะต้องผ่านตัวแปลภาษา หรือ Interpreter เพื่อแปลงไปเป็น Machine Code อีกที 
- Machine Code เป็นภาษาที่คอมพิวเตอร์เข้าใจ


```python
# การ Comment code จะขึ้นต้นด้วย #
# ดังนั้นถ้ามี # นำหน้าข้อความนี้จะไม่ถูกนำไปประมวลผล
print("Test") # แสดงข้อความออกทางจอภาพ
print(100+400) # แสดงตัวเลขออกทางจอภาพ

"""
การ comment ทีละหลายบรรทัด
จะสะดวกมากขึ้นสำหรับการ comment code ทีละหลายบรรทัด
"""

```

## การตั้งชื่อตัวแปร

- ขึ้นต้นด้วยตัวอักษร A-Z หรือ a-z หรือเครื่องหมาย _
- อักษรตัวแรกห้ามเป็นตัวเลข
- ตัวพิมพ์เล็ก-ใหญ่ ไม่ถือว่าเป็นตัวเดียวกัน (Case Sensitive)
- ห้ามใช้เครื่องหมายพิเศษในการตั้งชื่อเช่น {}, %, ^ และช่องว่างเป็นต้น
- ห้ามใช้คำที่ตรงกับคำสงวนหรือคำสั่งพิเศษในภาษา Python

## ตัวอย่างคำสงวนในภาษา Python

<table>
<tbody>
<tr>
<td>and</td>
<td>as</td>
<td>break</td>
<td>class</td>
<td>continue</td>
</tr>
<tr>
<td>def</td>
<td>elif</td>
<td>else</td>
<td>except</td>
<td>False</td>
</tr>
<tr>
<td>finally</td>
<td>for</td>
<td>if</td>
<td>in</td>
<td>is</td>
</tr>
<tr>
<td>None</td>
<td>not</td>
<td>or</td>
<td>pass</td>
<td>return</td>
</tr>
<tr>
<td>True</td>
<td>try</td>
<td>while</td>
<td>import</td>
<td>from</td>
</tr>
</tbody>
</table>

## การประกาศตัวแปร


```python
# ประกาศตัวแปรทีละบรรทัด
a = 0 # ตัวเลขจำนวนเต็ม int
b = False # ข้อมูลตรรกศาสตร์
c = "Message" # ข้อมูลข้อความ จะมี "" ครอบข้อความ
d = None # ไม่ระบุค่า
print(a) # ได้ค่า 0
print(type(a)) # ได้ <class 'int'> หมายถึงประเภท int
print(b) # ได้ค่า False
print(type(b)) # ได้ <class 'bool'>
print(c) # ได้ Message
print(type(c)) # ได้ <class 'str'>
print(d) # None
print(type(d)) # ได้ <class 'NoneType'>
```


```python
# แก้ไขค่าจากการประกาศตัวแปร
a = 1
b = True
c = "Second message"
d = None

# แก้ไขค่าจากการประกาศตัวแปรทีละหลายๆตัว
a,b,c,d = 2,False,"Third message",None
# พิมพ์ตัวแปรทีละหลายๆตัว
print(a,b,c,d) # 2 False Third message None
print("Message = ", c) # Message = Third message
```


```python
# รับค่า Input จาก Keyboard
a = input("Please type something.")
print("You input: ",a)
```


```python
# แปลงชนิดข้อมูล

a = "0"
b = int(a) # แปลง Str ไปเป็น int
print(a, b, type(a), type(b)) # 0 0 <class 'str'> <class 'int'>

c = str(b) # แปลง int ไปเป็น str
print(b, c, type(b), type(c)) # 0 0 <class 'int'> <class 'str'>
```

## ตัวดำเนินการ (Operators)

- Operator เช่น +, -, *, /
- Operand ตัวดำเนินการ 

```python
a = 1 + 2 # 1 คือ Operand, 2 คือ Operand แต่ + คือ Operator
```

### ประเภทของตัวดำเนินการ

- ตัวดำเนินการทางคณิตศาสตร์
- ตัวดำเนินการกำหนดค่า
- ตัวดำเนินการเปรียบเทียบ
- ตัวดำเนินการทางตรรกศาสตร์

### ตัวดำเนินการทางคณิตศาสตร์

|เครื่องหมาย|คำอธิบาย|
|:-:|:-:|
|+|บวก|
|-|ลบ|
|*|คูณ|
|/|หาร|
|%|หารเอาเศษ|
|**|ยกกำลัง|
|//|หารไม่เอาเศษ|


```python
a = 1 + 1 # 2
print("1 + 1 = ", a) # 1 + 1 = 2
a = 2 - 1 # 1
print("2 - 1 = ", a) # 2 - 1 = 1
a = 2 * 2 # 4
print("2 * 2 = ", a) # 2 * 2 = 4
a = 1 / 2 # 0.5
print("1 / 2 = ", a) # 1 / 2 = 0.5
a = 2 % 2 # 0
print("2 % 2 = ", a) # 2 % 2 = 0
a = 2 ** 2 # 4
print("2 ** 2 = ", a) # 2 ** 2 = 4
a = 2 // 2 # 1
print("2 // 2 = ", a) # 2 // 2 = 1
```

### ตัวดำเนินการกำหนดค่า

|เครื่องหมาย|รูปแบบการเขียน|ความหมาย|
|:-:|:-:|:-:|
|+=|x+=y|x=x+y|
|-=|x-=y|x=x-y|
|*=|x*=y|x=x*y|
|/=|x/=y|x=x/y|
|%=|x%=y|x=x%y|
|**=|x**=y|x=x**y|
|//=|x//=y|x=x//y|


```python
# ประกาศตัวแปร
x,y = 1,2

x+=1 # 2
print("x+=1 = ",x) # x+=1 = 2
x-=1 # 1
print("x-=1 = ",x) # x-=1 = 1
x*=1 # 1
print("x*=1 = ",x) # x*=1 = 1
x/=1 # 1.0
print("x/=1 = ",x) # x/=1 = 1.0
x%=1 # 0.0
print("x%1 = ",x) # x%=1 = 0.0
x**=1 # 0.0
print("x**1 = ",x) # x**1 = 0.0
x//=1 # 0.0
print("x//=1 = ",x) # x//=1 = 0.0
```

### ตัวดำเนินการเปรียบเทียบ

|เครื่องหมาย|คำอธิบาย|ตัวอย่าง|
|:-:|:-:|:-:|
|==|เท่ากับ|a==b|
|!=|ไม่เท่ากับ|a!=b|
|>|มากกว่า|a>b|
|<|น้อยกว่า|a<b|
|>=|มากกว่าเท่ากับ|a>=b|
|<=|น้อยกว่าเท่ากับ|a<=b|


```python
# ประกาศตัวแปร
a,b = 1, 2

print("a == b", a==b) # False
print("a != b", a!=b) # True
print("a > b", a>b) # False
print("a < b", a<b) # True
print("a >= b", a>=b) # False
print("a <= b", a<=b) # True
```

### การใช้ if, if...else, if...elif...else


```python
# ประกาศตัวแปร
a,b = 2,2

# รูปแบบ 1
if a == b:
    print("a == b") # a == b

a,b = 1,2

# รูปแบบ 2
if a == b:
    print("a == b")
else:
    print("a != b") # a != b

# รูปแบบ 3
if a == 0:
    print("a == 0")
elif a == 2:
    print("a == 2")
else:
    print("a == 1") # a = 1
```

## Ternary Operator


```python
a = 2
print("even number") if a % 2 == 0 else print("odd number") 
```

## โจทย์ 1

- จงเขียนโปรแกรมตัดเกรด โดยมีช่วงคะแนนดังนี้
    - 80 - 100 คะแนน ได้เกรด A
    - 70 - 79 คะแนน ได้เกรด B
    - 0 - 69 คะแนน ได้เกรด F
    - นอกนั้นให้ขึ้น N (Invalid)
