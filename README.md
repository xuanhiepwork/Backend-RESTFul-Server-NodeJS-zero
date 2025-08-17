

# Kết nối git
```
git remote add origin https://github.com/xuanhiepwork/Backend-RESTFul-Server-NodeJS-zero.git
```

### …or create a new repository on the command line
```
echo "# Backend-RESTFul-Server-NodeJS-zero" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/xuanhiepwork/Backend-RESTFul-Server-NodeJS-zero.git
git push -u origin main
```

### …or push an existing repository from the command line
```
git remote add origin https://github.com/xuanhiepwork/Backend-RESTFul-Server-NodeJS-zero.git
git branch -M main
git push -u origin main
```

# Tạo nhánh
```
git checkout -b <ten-nhanh-moi>
git switch -c <ten-nhanh-moi>
-c có nghĩa là tạo mới
```

# Đây là cách làm nhanh và phổ biến nhất. Lệnh này là sự kết hợp của hai bước:
```
git branch <ten-nhanh-moi> (tạo nhánh)

git checkout <ten-nhanh-moi> (chuyển sang nhánh đó)
```

# Tạo file git
```
git init
```

# Đặt tên nhánh git
```
git -b main
```

# Kéo các file từ GitHub về và hợp nhất lịch sử:
```
git pull origin main --allow-unrelated-histories
```

# Kết nối git
```
git remote add origin https://github.com/xuanhiepwork/Backend-RESTFul-Server-NodeJS-zero.git
```

# dọn sạch terminal
```
clear
```


# Cách chạy dòng lệnh Backend
```
node '[name].js - Đường link tới file bạn muốn chạy'
npm run start
```

# Thư viện .
```
npm install --save-exact ejs@3.1.8
```

```
npm install --save-exact dotenv@16.0.3
```

```
npm install --save-dev nodemon@2.0.20
```

### Link: #24 - https://www.youtube.com/watch?v=VCyPME-weuE&list=PLncHg6Kn2JT4smWdJceM0bDg4YUF3yqLu&index=24 - 00:45