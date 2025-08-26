
# Sổ tay ghi chú
```
https://docs.google.com/document/d/16zvbayXIKGOHOUr0jzLkFNyehv2CuRJaSo2rGdTp3Gw/edit?tab=t.0
```

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


-------------------------------
# Tải docker desktop
# Tải DBeaver
```
https://dbeaver.io/download/
```

## Chạycâu lệnh ở file chứa mysql:
```
docker compose -f mysql.yml -p nodejs-sql up -d 
-f: filename 
-p: projectname 
-d : detach,runasbackground 
```
# Tải MySQL (hình con cá heo)


## Cách dùng
```
Chạy docker lên trước
chạy con cá heo sau
```

# Cài thư viện "mysql2" không phải là  "mysql"
```
[npm install --save-exact mysql2@2.3.3 ](https://www.npmjs.com/package/mysql2)
```
```
npm install --save-exact mysql2@2.3.3 
```

-------------------------------
# Chọn version của thư viện

## Kiểm tra version
```
node -v
```

## Kiểm tra danh sách version
```
nvm list
```

## Chọn version sử dụng
```
nvm use 14.17.0
```

-------------------------------

# 32.Database
```
host:
username:root
pass:123456
```

# 33.Connection pool pattern
```
https://github.com/sidorares/node-mysql2#using-connection-pools
```

```
Giảm thời gian kết nối bằng cách tái sử dụng với những thằng trước đấy
Bằng cách đóng những thằng không sử dụng nữa
-> Ứng dụng không bị quá tải, mỗi lần quá tải là nó sẽ restarted lại

Đặt giới hạn connection
-> Giúp database nó không bị quá tải

Người dùng chấp nhận hệ thống bị chậm, chứ không chấp nhận hệ thống bị quá tải

```




### Link: #33 - https://www.youtube.com/watch?v=FWM4a3ecVNs&list=PLncHg6Kn2JT4smWdJceM0bDg4YUF3yqLu&index=34 - 00:00