---
title: Tutorial 4
lastUpdated: 2025-01-29
---

# Encryption กับ Hashing


## Encryption คือ?

![Encryption](https://media.geeksforgeeks.org/wp-content/uploads/20210115134029/EncryptionvsEncodingvsHashing1-660x280.jpg)

การเข้ารหัสเป็นกระบวนการแปลงข้อความที่อ่านได้ตามปกติที่เรียกว่าข้อความธรรมดาให้เป็นข้อความขยะหรือข้อความที่ไม่สามารถอ่านได้ที่เรียกว่าไซเฟอร์เท็กซ์ ไซเฟอร์เท็กซ์ที่ได้รับจากการเข้ารหัสสามารถเปลี่ยนเป็นข้อความธรรมดาได้อย่างง่ายดายโดยใช้คีย์เข้ารหัส ตัวอย่างอัลกอริธึมการเข้ารหัสบางส่วน ได้แก่ RSA, AES และ Blowfish

## Hashing คือ?

![Hashing](https://media.geeksforgeeks.org/wp-content/uploads/20210115190611/NewProject-660x123.jpg)

การแฮชเป็นกระบวนการแปลงข้อมูลให้เป็นคีย์โดยใช้ฟังก์ชันแฮช ข้อมูลต้นฉบับไม่สามารถดึงข้อมูลจากคีย์แฮชได้ไม่ว่าด้วยวิธีใดก็ตาม โดยทั่วไปคีย์แฮชจะถูกจัดเก็บไว้ในฐานข้อมูลและเปรียบเทียบเพื่อตรวจสอบว่าข้อมูลต้นฉบับตรงกันหรือไม่ โดยทั่วไปจะใช้เพื่อจัดเก็บรหัสผ่านสำหรับการเข้าสู่ระบบ ตัวอย่างบางส่วนของอัลกอริทึมการแฮชคือ MD5, SHA256

### salt ใน hashing คือ?

![salt](https://media.geeksforgeeks.org/wp-content/uploads/20220606170059/salt.png)

ในการเข้ารหัส salt คือข้อมูลสุ่มที่ใช้เป็นอินพุตเพิ่มเติมให้กับฟังก์ชันทางเดียวที่แฮชข้อมูล เช่น รหัสผ่าน salt ถูกใช้เพื่อรักษารหัสผ่านให้ปลอดภัยในขณะที่จัดเก็บ ในอดีต ระบบจะคงเฉพาะฟังก์ชันแฮชการเข้ารหัสของรหัสผ่านไว้ แต่เมื่อเวลาผ่านไป ได้มีการพัฒนาข้อควรระวังเพิ่มเติมเพื่อป้องกันการระบุรหัสผ่านที่ซ้ำกันหรือรหัสผ่านทั่วไป การป้องกันอย่างหนึ่งคือการใส่ salt

# !pip install bcrypt ไว้สำหรับ install bcrypt บน jupyter notebook หรือ google colab


```python
!pip install bcrypt
```


```python
import bcrypt

# example password
password = 'passwordabc'

# converting password to array of bytes
bytes = password.encode('utf-8')

# generating the salt
salt = bcrypt.gensalt()

# Hashing the password
hash = bcrypt.hashpw(bytes, salt)

# Taking user entered password
userPassword =  'passwordabc'

# encoding user password
userBytes = userPassword.encode('utf-8')

# checking password
result = bcrypt.checkpw(userBytes, hash)

print(hash)
print(result)
```

    b'$2b$12$ttPNzPSMeE9iAA4Assz3DuUpbBnWJEMpnQspbexybzB.CMaUE/VYS'
    True
    

## โจทย์

จากสิ่งที่ได้เรียนมาข้างต้น ให้นักศึกษาประยุกต์ใช้ความรู้เรื่องการใช้ hashing และ salt ในการ hashing password

โดยสร้างโปรแกรมที่ถาม username กับ password

โดย db คือ ตัวแปรดังต่อไปนี้ 

```python
db = {"users":[{"username":"krit","password":b'$2b$12$ttPNzPSMeE9iAA4Assz3DuUpbBnWJEMpnQspbexybzB.CMaUE/VYS'}]}
```

ให้ไปเช็ค ค่า username กับ password ที่ถูก hash ในตัวแปร db ว่าตรงกันหรือไม่?

วิธีการทำก็คือ 
1. ให้สร้าง username กับ password โดยเก็บ username กับ password ที่ถูก hash แล้วลง db
2. หลังจากนั้นให้ถาม username กับ password อีกครั้ง แล้วเช็คค่า password ที่เราป้อนเข้าไปตรงกับ password ที่ถูก hash เอาไว้ใน db หรือไม่?

## เฉลย
<details>
<summary>ดูเฉลยเมื่อคิดว่าทำไม่ได้แล้วจริงๆ</summary>

```python

import bcrypt


db = {"users":[]}

menu = int(input('''
                 1. Register User and Login User
                 '''))

match menu:
    case 1: 
        print(f"You input {menu} : Register and Login User")
        username = input("Please enter username")
        if username == "-1":
            pass
        else:
            password = input("Please enter your password")
            if password == "-1":
                pass
            else:
                bytes = password.encode('utf-8')

                # generating the salt
                salt = bcrypt.gensalt()

                # Hashing the password
                hash = bcrypt.hashpw(bytes, salt)
                db["users"].append({"username":username, "password": hash})
                print("Register user success")
                print("Please login")
                username = input("Please enter username")

                if username == "-1":
                    pass
                else:
                    password = input("Please enter your password")
                    if password == "-1":
                        pass
                    else:
                        for user in db["users"]:
                            # print(user)
                            if user["username"] == username:

                                userPassword =  password

                                # encoding user password
                                userBytes = userPassword.encode('utf-8')

                                # checking password
                                result = bcrypt.checkpw(userBytes, user["password"])

                                if result == True:
                                    print(f"Hello {username}")
                                    break
                                else:
                                    print(f"Invalid username or password")
                                    break
    case _:
        print("Invalid menu")
```
</details>
