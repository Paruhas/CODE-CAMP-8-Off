# สร้าง node linux ver. alpine เพราะเป็น linux ที่ optimize มาแล้ว ขนาดเล็กและlightweigthมากๆ
FROM node:alpine

WORKDIR /app

# COPY "ไฟล์" อะไรไปยัง "โฟลเดอร์อะไร" ; ตัวอย่าง COPY จาก PATH โฟลเดอร์นี้ ; ./ มีค่าเท่ากับ /app (ตัว WORKDIR)
COPY package.json package-lock.json ./
# มีค่าเท่ากับ npm install แต่มี optimize มากกว่า
RUN npm ci
# ./ ทั้งใน PATH level นี้
COPY ./ ./

CMD ["npm", "start"]

