# AI Screen Translate

Ứng dụng Web mô phỏng (simulation) công cụ dịch màn hình thời gian thực bằng Trí tuệ Nhân tạo (AI), hỗ trợ dịch game, truyện tranh (manga), duyệt web và các ứng dụng trò chuyện. Dự án được tối ưu hóa cho trải nghiệm di động ngay trên trình duyệt web thông qua một giao diện giả lập điện thoại đẹp mắt.

---

## 🚀 Giới Thiệu Dự Án (What is it?)
**AI Screen Translate** được thiết kế để giải quyết nhu cầu dịch thuật nội dung trực tiếp trên màn hình thiết bị mà không cần sao chép văn bản thủ công. Ứng dụng web này đóng vai trò là bản thiết kế giao diện (UI/UX Prototype) hoàn chỉnh, tương tác trực quan cho các tính năng:
* Dịch văn bản trên màn hình theo thời gian thực sử dụng mô hình ngôn ngữ lớn (LLM).
* Trải nghiệm ứng dụng di động nguyên bản trên trình duyệt.
* Tích hợp chế độ Dịch ngoại tuyến và Quản lý lịch sử bản dịch.

---

## 🛠️ Công Nghệ Sử Dụng (Tech Stack)
Dự án được xây dựng trên nền tảng các công nghệ web hiện đại nhất hiện nay:

* **Core & Framework**: 
  * [React 19](https://react.dev/) - Thư viện giao diện người dùng phổ biến nhất với nhiều cải tiến hiệu năng.
  * [TanStack Start](https://tanstack.com/router/v1/docs/start/overview) - Full-stack React framework thế hệ mới, hỗ trợ routing mạnh mẽ và SSR/SPA tối ưu.
* **Ngôn ngữ**: [TypeScript](https://www.typescriptlang.org/) - Đảm bảo an toàn kiểu dữ liệu và tự động gợi ý code thông minh.
* **Giao diện & Thiết kế (UI/UX)**:
  * [Tailwind CSS v4](https://tailwindcss.com/) - Công cụ CSS tiện ích hiện đại nhất, biên dịch cực nhanh.
  * [Radix UI / shadcn/ui](https://ui.shadcn.com/) - Các thành phần giao diện không giao diện mẫu (headless components) được thiết kế tinh tế và dễ tùy biến.
  * [Lucide React](https://lucide.dev/) - Bộ thư viện icon phong phú, sắc nét.
* **Build Tool**: [Vite](https://vitejs.dev/) - Môi trường chạy và đóng gói mã nguồn siêu tốc.

---

## ✨ Chức Năng Chính (Core Features)
Dự án bao gồm các module chức năng chính sau:

1. **👋 Onboarding & Splash (`/onboarding`)**
   * Màn hình chào mừng động với các hiệu ứng chuyển cảnh mượt mà để giới thiệu tính năng chính đến người dùng mới.
   
2. **🔑 Giả Lập Cấp Quyền (`/permissions`)**
   * Mô phỏng quá trình người dùng cấp các quyền hệ thống nhạy cảm trên thiết bị di động như: *Hiển thị trên ứng dụng khác (Draw over other apps)* và *Ghi màn hình (Screen recording)* để phục vụ quét văn bản.

3. **🔮 Màn Hình Dịch Thuật Chính (`/translate` & `/home`)**
   * Mô phỏng nút dịch nổi (Floating Bubble UI) đặc trưng của các ứng dụng dịch màn hình.
   * Chọn ngôn ngữ nguồn & ngôn ngữ đích linh hoạt.
   * Chế độ tự động dịch và nhận diện vùng văn bản thông minh.

4. **📂 Quản Lý Lịch Sử (`/history`)**
   * Lưu trữ các bản dịch cũ theo dòng thời gian, hỗ trợ tìm kiếm và xem lại các hình ảnh hoặc nội dung đã dịch thành công.

5. **🌐 Dịch Ngoại Tuyến (`/offline` & `/languages`)**
   * Quản lý các gói tài nguyên ngôn ngữ để tải xuống thiết bị, cho phép sử dụng công nghệ OCR và dịch không cần kết nối internet.

6. **⚙️ Cấu Hình Hệ Thống (`/settings`)**
   * Điều chỉnh độ trễ dịch, phím tắt nhanh, tích hợp khóa API của dịch vụ AI (AI Provider Key) và chuyển đổi giao diện Sáng / Tối (Dark/Light mode).

---

## 💻 Hướng Dẫn Chạy Dự Án Cục Bộ (Getting Started)

Dự án này sử dụng trình quản lý gói **Bun** hoặc **npm**. Đảm bảo bạn đã cài đặt Node.js hoặc Bun trên máy tính của mình.

### 1. Cài đặt các gói phụ thuộc (Dependencies)
```bash
# Nếu dùng Bun (Khuyên dùng)
bun install

# Hoặc dùng npm
npm install
```

### 2. Chạy môi trường phát triển (Development Mode)
```bash
# Nếu dùng Bun
bun dev

# Hoặc dùng npm
npm run dev
```
Sau khi chạy, ứng dụng sẽ khả dụng tại: `http://localhost:3000` (hoặc cổng được hiển thị trong terminal).

### 3. Đóng gói dự án (Build for Production)
```bash
# Nếu dùng Bun
bun build:dev   # Build mode development
bun build       # Build mode production

# Hoặc dùng npm
npm run build
```

---

> Dự án này được thiết kế và đồng bộ hóa thông qua nền tảng **Lovable.dev**. Khi phát triển, vui lòng giữ lịch sử commit Git ổn định để tránh xung đột dữ liệu.
