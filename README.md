 # TalkLikeThat 

 software Process Management Project

 วิดีโอประกอบการทำงานของระบบ https://youtu.be/gAYpRQKQkj8

 ## Deploy API
 
 ในที่นี้จะไม่พูดถึงขั้นตอนการ เตรียม VM ครับ

 เริ่มจาก Clone โปรเจคจาก GitHub และย้ายไปยัง banch develop กันก่อนเลย
 
 ```bash
  git clone https://github.com/firstziiz/talklikethat-app.git
  git checkout develop
 ```
 และ
 
 ```bash
  cd talklikethat-app
  git checkout develop
 ```
 
 เราก็จะได้ Project ที่เก็บไว้ใน GiHub branch develop แล้ว
 
 หลังจากนั้นก็มาถึงส่วนของ build และ run .jar 
 
 ```bash
  mvn package && java -jar target/talklikethat-spring-boot-0.1.0.jar
 ```
 
 เสร็จแล้วเราก็จะสามารถดู API ทำงานบน VM โดยเข้าไปใน Web Browser ด้วย
 
  ```bash
   http://13.229.230.227/hello/
  ```
 จะเห็นได้ว่า API สามารถไปดึงข้อมูลจาก DB ออกมาได้
 
