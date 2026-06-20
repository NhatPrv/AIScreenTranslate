# Hướng Dẫn Chạy Dự Án & Giải Thích Về Bun

Tài liệu này giải thích chi tiết về **Bun** và cung cấp các lệnh chạy dự án nhanh chóng, bao gồm cả script chạy tự động cho Windows.

---

## 🍞 Bun là gì?

**Bun** là một nền tảng chạy mã (runtime environment) và quản lý thư viện JavaScript/TypeScript thế hệ mới, được thiết kế để thay thế hoàn toàn cho **Node.js** và **npm**.

### Các ưu điểm vượt trội của Bun:
1. **Tốc độ cực nhanh**: Bun khởi động nhanh gấp nhiều lần Node.js và cài đặt thư viện nhanh hơn npm từ 10 đến 30 lần nhờ được viết bằng ngôn ngữ lập trình Zig và tối ưu hóa sâu.
2. **Tích hợp sẵn (All-in-one)**: Bun không chỉ chạy code mà còn tự động đóng vai trò là trình quản lý gói (như npm), trình đóng gói (bundler), và trình chạy test (test runner) mà không cần cài thêm công cụ khác.
3. **Hỗ trợ TypeScript mặc định**: Bạn có thể chạy trực tiếp các file `.ts` hay `.tsx` mà không cần cấu hình biên dịch phức tạp.

*Nếu máy bạn chưa có Bun, bạn có thể tải tại [bun.sh](https://bun.sh/) hoặc chỉ cần dùng **npm** (đã đi kèm với Node.js).*

---

## 🛠️ Hướng Dẫn Các Lệnh Chạy Dự Án

Nếu terminal của IDE bị chặn hoặc bạn không muốn gõ lệnh trực tiếp, bạn có thể sử dụng file [run.bat](file:///d:/MyDATA/Code/AIScreennTranslate/run.bat) (nhấp đúp vào file để mở bảng menu tự động) hoặc chạy thủ công các lệnh dưới đây:

### 1. Sử dụng Bun (Khuyên dùng vì dự án có sẵn `bun.lock`)
* **Tải và cài đặt các thư viện:**
  ```bash
  bun install
  ```
* **Chạy dự án ở chế độ phát triển (Development):**
  ```bash
  bun dev
  ```

### 2. Sử dụng Node.js & npm (Nếu máy bạn chưa cài Bun)
* **Tải và cài đặt các thư viện:**
  ```bash
  npm install
  ```
* **Chạy dự án ở chế độ phát triển (Development):**
  ```bash
  npm run dev
  ```

---

## ⚡ Sử dụng File Hỗ Trợ Chạy Nhanh (`run.bat`)
Chúng tôi đã tạo sẵn file [run.bat](file:///d:/MyDATA/Code/AIScreennTranslate/run.bat) ở thư mục gốc của dự án. 

1. Mở File Explorer trên máy tính của bạn và truy cập thư mục: `d:\MyDATA\Code\AIScreennTranslate`
2. Nhấp đúp chuột vào file **`run.bat`**.
3. Một cửa sổ giao diện dòng lệnh sẽ hiện lên với menu tùy chọn từ **1 đến 5**:
   * Nhập `1` rồi nhấn Enter để cài đặt thư viện bằng Bun.
   * Nhập `2` rồi nhấn Enter để chạy dự án bằng Bun.
   * Nhập `3` hoặc `4` để thực hiện tương tự với npm.
