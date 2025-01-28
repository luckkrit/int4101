---
title: Tutorial 2
lastUpdated: 2025-01-28
---

# Python3 Tutorial (2)

## คำสั่งเงื่อนไข 
- If Statement เช่น if..else , if..elif..else, Nested if
- Match Statement

### Nested if


```python
# Nested if เป็นการซ้อนเงื่อนไขไปเรื่อยๆ

seconds = 59
minutes = 59
hours = 21

if seconds <= 59:
    seconds += 1
    if seconds == 60:
        minutes += 1
        if minutes == 60:
            hours += 1
            if hours <= 23:
                hours += 1
                if hours == 24:
                    hours = 0
            minutes = 0     
        seconds = 0

print("hour = ",hours, " minute = ", minutes, " seconds = ", seconds) # hour = 23 minute = 0 seconds = 0
```

### Switch - Case

- ประเภทบริการ

1 ถอนเงิน
2 ฝากเงิน
3 ยอดเงินคงเหลือ


```python

service = 4

match service:
    case 1: print("ถอนเงิน")
    case 2: print("ฝากเงิน")
    case 3: print("ยอดเงินคงเหลือ")
    case _: print("ไม่พบประเภทบริการ") # ไม่พบประเภทบริการ
```

## คำสั่งทำซ้ำ

- While loop
- For loop

### While loop


```python
seconds = 0

while seconds <= 59:
    print("seconds = ", seconds)
    seconds+=1

```

- ผลลัพธ์

```
seconds =  0
seconds =  1
seconds =  2
seconds =  3
seconds =  4
seconds =  5
seconds =  6
seconds =  7
seconds =  8
seconds =  9
seconds =  10
seconds =  11
seconds =  12
seconds =  13
seconds =  14
seconds =  15
seconds =  16
seconds =  17
seconds =  18
seconds =  19
seconds =  20
seconds =  21
seconds =  22
seconds =  23
seconds =  24
seconds =  25
seconds =  26
seconds =  27
seconds =  28
seconds =  29
seconds =  30
seconds =  31
seconds =  32
seconds =  33
seconds =  34
seconds =  35
seconds =  36
seconds =  37
seconds =  38
seconds =  39
seconds =  40
seconds =  41
seconds =  42
seconds =  43
seconds =  44
seconds =  45
seconds =  46
seconds =  47
seconds =  48
seconds =  49
seconds =  50
seconds =  51
seconds =  52
seconds =  53
seconds =  54
seconds =  55
seconds =  56
seconds =  57
seconds =  58
seconds =  59
```

### For loop

คำสั่ง for จะทำตามช่วงของจำนวนโดยอาศัยคำสั่ง range

- range(60) จะได้ช่วง 0 ถึง 59
- range(0, 60) จะได้ช่วง 0 ถึง 59
- range(1, 60) จะได้ช่วง 1 ถึง 59
- range(0, 60, 1) จะได้ช่วง 0 ถึง 59 โดยเพิ่มทีละ 1
- range(0, 60, 2) จะได้ช่วง 0 ถึง 58 โดยเพิ่มทีละ 2 ที่ไม่ได้ 59 เพราะเมื่อ seconds = 57 แล้ว 57 + 2 มันจะต้องน้อยกว่า 59 ถึงจะทำงานต่อได้ แต่ในกรณีนี้ได้ 59 พอดี


```python
for seconds in range(0,60,1):
    print("seconds = ", seconds)
```

    seconds =  0
    seconds =  1
    seconds =  2
    seconds =  3
    seconds =  4
    seconds =  5
    seconds =  6
    seconds =  7
    seconds =  8
    seconds =  9
    seconds =  10
    seconds =  11
    seconds =  12
    seconds =  13
    seconds =  14
    seconds =  15
    seconds =  16
    seconds =  17
    seconds =  18
    seconds =  19
    seconds =  20
    seconds =  21
    seconds =  22
    seconds =  23
    seconds =  24
    seconds =  25
    seconds =  26
    seconds =  27
    seconds =  28
    seconds =  29
    seconds =  30
    seconds =  31
    seconds =  32
    seconds =  33
    seconds =  34
    seconds =  35
    seconds =  36
    seconds =  37
    seconds =  38
    seconds =  39
    seconds =  40
    seconds =  41
    seconds =  42
    seconds =  43
    seconds =  44
    seconds =  45
    seconds =  46
    seconds =  47
    seconds =  48
    seconds =  49
    seconds =  50
    seconds =  51
    seconds =  52
    seconds =  53
    seconds =  54
    seconds =  55
    seconds =  56
    seconds =  57
    seconds =  58
    seconds =  59
    

- ผลลัพธ์

```
seconds =  0
seconds =  1
seconds =  2
seconds =  3
seconds =  4
seconds =  5
seconds =  6
seconds =  7
seconds =  8
seconds =  9
seconds =  10
seconds =  11
seconds =  12
seconds =  13
seconds =  14
seconds =  15
seconds =  16
seconds =  17
seconds =  18
seconds =  19
seconds =  20
seconds =  21
seconds =  22
seconds =  23
seconds =  24
seconds =  25
seconds =  26
seconds =  27
seconds =  28
seconds =  29
seconds =  30
seconds =  31
seconds =  32
seconds =  33
seconds =  34
seconds =  35
seconds =  36
seconds =  37
seconds =  38
seconds =  39
seconds =  40
seconds =  41
seconds =  42
seconds =  43
seconds =  44
seconds =  45
seconds =  46
seconds =  47
seconds =  48
seconds =  49
seconds =  50
seconds =  51
seconds =  52
seconds =  53
seconds =  54
seconds =  55
seconds =  56
seconds =  57
seconds =  58
seconds =  59
```

## โจทย์ 1

- เขียนแสดงแม่สูตรคูณ แม่ 2 เช่น 2x1=2 ไปจนถึง 2x12=24

## โจทย์ 2

- หาผลรวมตั้งแต่ 1 ถึง 10 โดยใช้คำสั่ง Loop

### Nested For


```python
# Nested for

for i in range(1,13):
    print("สูตรคูณแม่ ",i)
    for j in range(1,13):
        print(i,"x",j,"=",i*j)
    print("")
```

- ผลลัพธ์

```
สูตรคูณแม่  1
1 x 1 = 1
1 x 2 = 2
1 x 3 = 3
1 x 4 = 4
1 x 5 = 5
1 x 6 = 6
1 x 7 = 7
1 x 8 = 8
1 x 9 = 9
1 x 10 = 10
1 x 11 = 11
1 x 12 = 12

สูตรคูณแม่  2
2 x 1 = 2
2 x 2 = 4
2 x 3 = 6
2 x 4 = 8
2 x 5 = 10
2 x 6 = 12
2 x 7 = 14
2 x 8 = 16
2 x 9 = 18
2 x 10 = 20
2 x 11 = 22
2 x 12 = 24

สูตรคูณแม่  3
3 x 1 = 3
3 x 2 = 6
3 x 3 = 9
3 x 4 = 12
3 x 5 = 15
3 x 6 = 18
3 x 7 = 21
3 x 8 = 24
3 x 9 = 27
3 x 10 = 30
3 x 11 = 33
3 x 12 = 36

สูตรคูณแม่  4
4 x 1 = 4
4 x 2 = 8
4 x 3 = 12
4 x 4 = 16
4 x 5 = 20
4 x 6 = 24
4 x 7 = 28
4 x 8 = 32
4 x 9 = 36
4 x 10 = 40
4 x 11 = 44
4 x 12 = 48

สูตรคูณแม่  5
5 x 1 = 5
5 x 2 = 10
5 x 3 = 15
5 x 4 = 20
5 x 5 = 25
5 x 6 = 30
5 x 7 = 35
5 x 8 = 40
5 x 9 = 45
5 x 10 = 50
5 x 11 = 55
5 x 12 = 60

สูตรคูณแม่  6
6 x 1 = 6
6 x 2 = 12
6 x 3 = 18
6 x 4 = 24
6 x 5 = 30
6 x 6 = 36
6 x 7 = 42
6 x 8 = 48
6 x 9 = 54
6 x 10 = 60
6 x 11 = 66
6 x 12 = 72

สูตรคูณแม่  7
7 x 1 = 7
7 x 2 = 14
7 x 3 = 21
7 x 4 = 28
7 x 5 = 35
7 x 6 = 42
7 x 7 = 49
7 x 8 = 56
7 x 9 = 63
7 x 10 = 70
7 x 11 = 77
7 x 12 = 84

สูตรคูณแม่  8
8 x 1 = 8
8 x 2 = 16
8 x 3 = 24
8 x 4 = 32
8 x 5 = 40
8 x 6 = 48
8 x 7 = 56
8 x 8 = 64
8 x 9 = 72
8 x 10 = 80
8 x 11 = 88
8 x 12 = 96

สูตรคูณแม่  9
9 x 1 = 9
9 x 2 = 18
9 x 3 = 27
9 x 4 = 36
9 x 5 = 45
9 x 6 = 54
9 x 7 = 63
9 x 8 = 72
9 x 9 = 81
9 x 10 = 90
9 x 11 = 99
9 x 12 = 108

สูตรคูณแม่  10
10 x 1 = 10
10 x 2 = 20
10 x 3 = 30
10 x 4 = 40
10 x 5 = 50
10 x 6 = 60
10 x 7 = 70
10 x 8 = 80
10 x 9 = 90
10 x 10 = 100
10 x 11 = 110
10 x 12 = 120

สูตรคูณแม่  11
11 x 1 = 11
11 x 2 = 22
11 x 3 = 33
11 x 4 = 44
11 x 5 = 55
11 x 6 = 66
11 x 7 = 77
11 x 8 = 88
11 x 9 = 99
11 x 10 = 110
11 x 11 = 121
11 x 12 = 132

สูตรคูณแม่  12
12 x 1 = 12
12 x 2 = 24
12 x 3 = 36
12 x 4 = 48
12 x 5 = 60
12 x 6 = 72
12 x 7 = 84
12 x 8 = 96
12 x 9 = 108
12 x 10 = 120
12 x 11 = 132
12 x 12 = 144
```

## String

String หรือ ข้อความ จะอยู่ในรูปของตัวอักษรหลายๆตัวเรียงต่อกันโดยเริ่มจากลำดับ 0 จนถึง n-1

<table>
<tbody>
<tr>
<td>K</td>
<td>r</td>
<td>t</td>
<td>t</td>
<td></td>
<td>C</td>
<td>h</td>
<td>o</td>
<td>m</td>
<td>a</td>
<td>i</td>
<td>t</td>
<td>o</td>
<td>n</td>
<td>g</td>
</tr>
<tr>
<td>0</td>
<td>1</td>
<td>2</td>
<td>3</td>
<td>4</td>
<td>5</td>
<td>6</td>
<td>7</td>
<td>8</td>
<td>9</td>
<td>10</td>
<td>11</td>
<td>12</td>
<td>13</td>
<td>14</td>
</tr>
<tr>
<td>-15</td>
<td>-14</td>
<td>-13</td>
<td>-12</td>
<td>-11</td>
<td>-10</td>
<td>-9</td>
<td>-8</td>
<td>-7</td>
<td>-6</td>
<td>-5</td>
<td>-4</td>
<td>-3</td>
<td>-2</td>
<td>-1</td>
</tr>
</tbody>
</table>


```python
full_name = "Krit Chomaitong"
print(full_name[0]) # K

print(full_name[-15]) # K

print(full_name[-1]) # g

name = full_name[0:4]
print(name) # Krit

name = full_name[-11:-15]
print(name) # ไม่พิมพ์อะไรมาเลย

name = full_name[-15:-11]
print(name) # Krit

name = full_name[:4]
print(name) # Krit

name = full_name[:-11]
print(name) # Krit

last_name = full_name[5:]
print(last_name) # Chomaitong

```


```python
# ถ้าตัวแปร string มีหลายบรรทัด

address = """
111/22
ม.ธนสิน
แขวงคลองกุ่ม เขตบึงกุ่ม 10240
"""

print(address)

address2 = '''
333/33
ม.ธนสิน
แขวงคลองกุ่ม เขตบึงกุ่ม 10240
'''

print(address2)
```

    
    111/22
    ม.ธนสิน
    แขวงคลองกุ่ม เขตบึงกุ่ม 10240
    
    
    333/33
    ม.ธนสิน
    แขวงคลองกุ่ม เขตบึงกุ่ม 10240
    
    

### Format string

- จัดรูปแบบข้อความให้ตรงกับ Format ที่เรากำหนด


```python
txt = "For only {price:.2f} dollars!"
print(txt.format(price = 50))

price = 50
txt2 = f"For only {price:.2f} dollars!"
print(txt2)
```

- คำสั่ง 1
```
money = 100
format_money = f"{money:.2f}"
print(format_money) # 100.00
print(format_money.format(money=200)) # 100.00 ไม่สามารถเปลี่ยนค่าได้เพราะถูก format ไปแล้ว
```

- คำสั่ง 2
```
money2 = 200
format_money2 = "{money2:.2f}"
print(format_money2.format(money2 = money2)) # 200.00
print(format_money2.format(money2 = 300)) # 300.00
```

- จะสังเกตุได้ว่าถ้ามีการประกาศ format_money โดยมี `f"{money:.2f}"` จะต้องมีการประกาศตัวแปร money ก่อนจะ format และตัวแปร format_money จะไม่สามารถเปลี่ยนค่าทีหลังได้
- แต่อีกตัวอย่างนึงจะมีการเรียกใช้ `format_money2.format(money2 = 200)` จะสามารถเปลี่ยนค่าไปได้เรื่อยๆ

- มี comma คั่นตัวเลข


```python
#Use "," to add a comma as a thousand separator:

txt = "ฉันมีเงิน {:,} บาท"

print(txt.format(1000000))

```

# แปลงฐาน 2 เป็นฐาน 10


```python
# แปลงเป็น ฐาน 10

txt = "{:d}"

# 0b นำแสดงว่าตัวเลขหลังจากนี้เป็นฐาน 2
print(txt.format(0b101)) # 5
```

# แปลงฐาน 10 เป็นฐาน 2


```python
txt = "{:b}"
print(txt.format(5)) # 101
```

### การแทนตัวแปรใน format string 
- โดยจะมีการบอกลำดับที่จะแทนด้วยตำแหน่งที่ปรากฎ โดยเริ่มจาก 0 เช่น {0} จะหมายถึงตัวแปรที่จะมาแทนเป็นตัวแรก
- ถ้าไม่มีการระบุตำแหน่ง ก็จะยึดตำแหน่งแรกแทนตัวแปรตัวแรก เช่น {} 


```python
words = "คุณมีไก่ {0} {1}".format(2, "ตัว")
print(words) # คุณมีไก่ 2 ตัว

words = "คุณมีไก่ {} {}".format(2, "ตัว")
print(words) # คุณมีไก่ 2 ตัว
```

### การเช็คคำขึ้นต้น


```python
name = "นายเจมส์ บอนด์"

if name.startswith("นาย"):
    print("เป็นผู้ชาย") # เป็นผู้ชาย
else:
    print("เป็นผู้หญิง")

name = "นางคิล บิล"

if name.startswith("นาย"):
    print("เป็นผู้ชาย")
else:
    print("เป็นผู้หญิง") # เป็นผู้หญิง
```

### การเช็คคำลงท้าย


```python
month = "มกราคม"

if month.endswith("คม"):
    print("มี 31 วัน")
elif month.endswith("ยน"):
    print("มี 30 วัน")
elif month.endswith("พันธ์"):
    print("มี 28-29 วัน")
else:
    print("ไม่รู้จัก")
```

### การค้นหาคำในข้อความ 

- คำสั่ง find จะบอกตำแหน่งของตัวอักษร โดยตำแหน่งตัวอักษรเริ่มที่ 0 แต่ถ้าไม่เจอก็จะคืนค่าเป็น -1


```python
words = "คุณถูกรางวัลที่ 1"

print(words.find("รางวัล")) # 6

print(words.find("2")) # -1
```

### นับจำนวนคำในประโยค


```python
words = "ไก่ จิก เด็ก ตาย"
print(words.count(" ")) # อักขระว่าง 3 ตัว
words = "คนหนึ่งคน"
print(words.count("คน")) # 2
```

### การแทนที่คำในประโยค


```python
words = "ไก่ x ตัว"
print(words) # ไก่ x ตัว
print(words.replace("x", "2")) # ไก่ 2 ตัว
```

### การนับจำนวนตัวอักษรในข้อความหรือประโยค


```python
words="1,2,3,4"
print(len(words)) # 7  
```
