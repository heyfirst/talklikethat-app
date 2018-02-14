# TalkLikeThat

software Process Management Project

วิดีโอประกอบการทำงานของระบบ (https://youtu.be/gAYpRQKQkj8)[https://youtu.be/gAYpRQKQkj8]

## Pre-requirement

* NodeJS & NPM
* Yarn
* Maven
* MySQL (แนะนำ MariaDB)

หลังจากที่ clone ตัวโปรเจคลงมาแล้ว ต่อไปจะเป็นการใส่ config ที่จำเป็นให้กับทั้งสองระบบคือ Site และ API ดังนี้

### Site

ให้เปิด bash และเข้าไปที่ directory ของโปรเจค Site ดังคำสั่งนี้

### API

ให้เปิด bash และเข้าไปที่ directory ของโปรเจค โดยใช้คำสั่ง

```bash
cd ./api/src/main/resources
```

และใช้คำสั่ง

```bash
cp application.example.properties application.properties
```

จากนั้นใช้ Text Editor เข้าไปแก้ไขไฟล์ application.properties ที่สร้างมาเมื่อขึ้นตอนก่อนหน้า

```bash
spring.jpa.hibernate.ddl-auto=none
spring.datasource.url=                // URI ของ DB ซึ่งต้องประกอบไปด้วย jdbc:mysql://DB_URL:PORT/DB_NAME
spring.datasource.username=           // Username ของ Database
spring.datasource.password=           // Password ของ Database
```

## How to deploy Site (React.js)

ในขั้นตอนนี้จะไม่พูดถึงการเตรียม Virtual Machine

ก่อนอื่นต้องมี Node.js (แนะนำ version. 8.9.4), yarn, pm2 ก่อน

เริ่มจาก Clone โปรเจคจาก GitHub

```bash
git clone https://github.com/firstziiz/talklikethat-app.git
cd talklikethat-app
```

ต่อจากนั้นลง dependency ทั้งหมดและทำการ build project ให้พร้อมใช้งานด้วยคำสั่ง

```bash
yarn && yarn build
```

ตอนนี้ระบบ Site พร้อมใช้งานแล้ว จะต้องทำการรันด้วยคำสั่งของ pm2 ดังนี้

```bash
pm2 start yarn --name TALKLIKETHAT_SITE -- start
```

จากนั้นให้เข้าใช้งานที่ `http://IP_ADDRESS:3000` ถือเป็นอันเสร็จอิ้น

## How to deploy API (Spring Boot Framework)
ในขั้นตอนนี้จะไม่พูดถึงการเตรียม Virtual Machine

เริ่มจาก Clone โปรเจคจาก GitHub

```bash
git clone https://github.com/firstziiz/talklikethat-app.git
cd talklikethat-app
```

เราก็จะได้ Project ที่เก็บไว้ใน GiHub branch develop แล้ว

ต่อไปในส่วนของ set .env

```bash
cp api/src/main/resources/application.examle.properties api/src/main/resources/application.properties
vi api/src/main/resources/application.properties
```

คำสั่ง vi เป็น text editor กด i เพื่อเข้าสู่โหมด Insert

และแก้ไขข้อความตัวพิมพ์ใหญ่

```bash
spring.jpa.hibernate.ddl-auto=none
spring.datasource.url=jdbc:mysql://DATABASE_ADDRESS:PORT/DATABASE_TABLE
spring.datasource.username=USERNAME
spring.datasource.password=PASSWORD
```

กด Esc เพื่อออกจากโหมด Insert และ :wq เพื่อ save และออกจากคำสั่ง vi

หลังจากนั้นก็มาถึงส่วนของ build และ run .jar 

```bash
mvn package && java -jar target/talklikethat-spring-boot-0.1.0.jar
```

เสร็จแล้วเราก็จะสามารถดู API ทำงานบน VM โดยเข้าไปใน Web Browser ด้วย

```bash
  http://IP_ADDRESS:8080/hello/
```

จะเห็นได้ว่า API สามารถไปดึงข้อมูลจาก DB ออกมาได้

