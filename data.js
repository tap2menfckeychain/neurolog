/* =====================================================================
   NỘI DUNG TRANG NEUROLOG — chỉ cần sửa file này (mở bằng Notepad)
   - Chữ nằm giữa hai dấu ngoặc kép "...". Sửa chữ, giữ nguyên dấu ngoặc và dấu phẩy.
   - Chữ đặt giữa hai dấu * sẽ được tô màu nổi bật, ví dụ: "Chiếc cầu nối *Phygital*".
   - Sửa xong nhớ Lưu (Ctrl+S) rồi mở lại index.html để xem.
   ===================================================================== */
window.TRANG = {

  /* ---------- Nhạc nền ---------- */
  nhac: "nhac/nhac-nen.wav",
  tenNhac: "Ru con lớn khôn — bản piano NeuroLog tự soạn",
  amLuong: 0.45,            // độ to của nhạc: 0.1 (rất nhỏ) … 1 (to nhất)

  /* ---------- Màn bìa sổ lúc mở trang ---------- */
  bia: {
    dong1: "Bộ Nhật ký tâm lý",
    dong2: "đồng hành cùng con lớn khôn",
    goiY: "Chạm để mở sổ"
  },

  /* ---------- Đầu trang ---------- */
  dauTrang: {
    nhan: "Bộ Nhật ký tâm lý đồng hành cùng con lớn khôn",
    tieuDe: "Chiếc cầu nối *Phygital* gắn kết yêu thương",
    moTa: "Từ những quan sát hằng ngày tại nhà đến dữ liệu hữu ích cho gia đình và bác sĩ. NeuroLog kết hợp sổ tay giấy không màn hình cho bé với ứng dụng AI cho cha mẹ, để trẻ 6–11 tuổi có biểu hiện ADHD được thấu hiểu và đồng hành đúng cách.",
    nut1: "Trải nghiệm ứng dụng",
    nut2: "Tìm hiểu dự án",
    khauHieu: "Ghi dấu mỗi ngày · Đồng hành cùng con",
    nhanGiay: "Nhật ký giấy",
    nhanSo: "Ứng dụng NeuroLog"
  },

  /* ---------- Các con số nổi bật ---------- */
  conSo: [
    { so: "4,6–7,5%", moTa: "trẻ tiểu học có biểu hiện hoặc nguy cơ ADHD — gần 1 trong 22 trẻ" },
    { so: "9.000", moTa: "trẻ được chẩn đoán ADHD mỗi năm tại Bệnh viện Nhi Trung ương" },
    { so: "30 phút", moTa: "là thời lượng một buổi khám — quá ngắn so với 24/7 sinh hoạt của trẻ" },
    { so: "90 giây", moTa: "để bác sĩ nắm trọn bối cảnh qua Báo cáo PDF của NeuroLog" }
  ],

  /* ---------- 01. Vấn đề ---------- */
  vanDe: {
    nhan: "Câu chuyện về những đứa trẻ ADHD và gia đình",
    tieuDe: "Những *khoảng trống* mỗi gia đình đang gặp",
    moTa: "ADHD — rối loạn tăng động giảm chú ý — không chỉ xuất hiện trong phòng khám mà diễn ra liên tục trong giờ học bài, bữa cơm, lúc chuẩn bị đi ngủ. Thế nhưng phần lớn những khoảnh khắc ấy chưa từng được ghi lại.",
    the: [
      { bieuTuong: "dongho", tieuDe: "Khoảng trống dữ liệu 24/7", moTa: "Bác sĩ chỉ có khoảng 30 phút khám, thiếu dữ liệu sinh hoạt thực tế của trẻ tại nhà và ở trường." },
      { bieuTuong: "naobo", tieuDe: "Gánh nặng trí nhớ", moTa: "Cha mẹ kiệt sức, thường chỉ nhớ những lần con bùng nổ mà bỏ sót các yếu tố kích hoạt và cả những tiến bộ nhỏ." },
      { bieuTuong: "dienthoai", tieuDe: "Ma sát công nghệ", moTa: "Ứng dụng thuần số với ánh sáng xanh và kích thích quá mức dễ khiến trẻ ADHD xao nhãng, quá tải giác quan." },
      { bieuTuong: "be", tieuDe: "Vị thế bị động của trẻ", moTa: "Trẻ bị xem như “đối tượng bị giám sát”, thiếu động lực để tự nhận thức và điều chỉnh bản thân." }
    ]
  },

  /* ---------- 02. Khách hàng mục tiêu ---------- */
  khachHang: {
    nhan: "Khách hàng mục tiêu",
    tieuDe: "Một vòng tròn *ba người* cùng đồng hành",
    nhom: [
      {
        anh: "anh/be-viet-so.webp", the: "Người dùng chính · B2C",
        tieuDe: "Trẻ 6–11 tuổi", phu: "có biểu hiện, nguy cơ hoặc đã được chẩn đoán ADHD",
        moTa: "Tự tô vẽ, tự đánh giá Bảng năng lượng và dán Sticker khen thưởng trong không gian không màn hình.",
        noiDau: "Bị dán nhãn tiêu cực, dễ quá tải khi dùng màn hình, thiếu động lực vì liên tục nhận phản hồi tiêu cực.",
        nhuCau: "Một không gian an toàn để tự nhận thức và được ghi nhận tiến bộ."
      },
      {
        anh: "anh/gia-dinh.webp", the: "Người dùng chính · B2C",
        tieuDe: "Phụ huynh / Người chăm sóc", phu: "người ở cạnh con nhiều nhất mỗi ngày",
        moTa: "Ghi nhận bằng giọng nói hoặc chụp trang sổ; AI tự bóc tách dữ liệu vào khung mô hình ABC.",
        noiDau: "Kiệt sức vì gánh nặng trí nhớ, mệt mỏi khi phải chép nhật ký thủ công, hoang mang vì thiếu công cụ chuyên môn.",
        nhuCau: "Công cụ nhập liệu 1 chạm (30 giây) và một cố vấn AI đồng hành."
      },
      {
        anh: "", bieuTuong: "bacsi", the: "Người thụ hưởng · B2B2C",
        tieuDe: "Bác sĩ & Chuyên gia tâm lý", phu: "tâm lý nhi, tâm lý lâm sàng, trường tiểu học hòa nhập",
        moTa: "Tiếp nhận Báo cáo PDF chuẩn hóa xuất tự động từ ứng dụng, nắm bắt hành vi của trẻ trong những ngày trước buổi tái khám.",
        noiDau: "Chỉ có 30–60 phút gặp trẻ, phải dựa vào lời kể cảm tính của phụ huynh.",
        nhuCau: "Dữ liệu có cấu trúc Tiền đề – Hành vi – Hệ quả, đọc hiểu trong dưới 90 giây."
      }
    ]
  },

  /* ---------- 03. Giải pháp ---------- */
  giaiPhap: {
    nhan: "Giải pháp Phygital Low-Screen",
    tieuDe: "Giấy cho con, *số hóa* cho cha mẹ",
    moTa: "NeuroLog không chỉ là một ứng dụng hay một cuốn sổ — mà là người bạn đồng hành trong ngôi nhà, nơi từng cảm xúc nhỏ của con được thấu hiểu và gánh nặng âm thầm của cha mẹ được sẻ chia.",
    giay: { nhan: "PAPER", tieuDe: "Nhật ký giấy cho bé", moTa: "Sổ tay A5 vật lý — bé tương tác 100% trên giấy, rời xa ánh sáng xanh." },
    so: { nhan: "DIGITAL", tieuDe: "Ứng dụng NeuroLog cho cha mẹ", moTa: "Số hóa trang sổ, phân tích bằng AI và xuất báo cáo cho bác sĩ." },
    diemKhac: [
      { tieuDe: "Trải nghiệm không màn hình cho bé", moTa: "Sổ tay A5 với Bảng năng lượng (Energy Meter), Khung vẽ cảm xúc và Sticker thưởng Micro-Wins. Trẻ từ “đối tượng bị giám sát” trở thành “chủ thể tự nhận thức”." },
      { tieuDe: "Nhập liệu 1 chạm cho bố mẹ", moTa: "Scan OCR (chụp ảnh trang sổ) hoặc Voice-to-Text (ghi âm 30 giây kể bối cảnh) — AI tự bóc tách vào khung ABC." },
      { tieuDe: "AI phân tích & đồng hành", moTa: "Phân tích theo mô hình ABC. Chatbot AI hiểu dần từng bé, đưa lời khuyên sát bối cảnh riêng — càng ghi đều, AI càng hiểu con." },
      { tieuDe: "Báo cáo chuẩn hóa cho bác sĩ", moTa: "Tự động tổng hợp xu hướng thành Báo cáo PDF, giúp bác sĩ đọc vị toàn bộ bối cảnh trong 90 giây." }
    ]
  },

  /* ---------- 04. Vòng lặp vận hành ---------- */
  vongLap: {
    nhan: "Sơ đồ vòng lặp vận hành",
    tieuDe: "Sáu bước, *một vòng* khép kín",
    moTa: "Gia đình – Trẻ – Chuyên gia cùng nằm trong một vòng dữ liệu, lặp lại mỗi ngày nhẹ nhàng như một thói quen.",
    buoc: [
      { ai: "Bé", tieuDe: "Nhận nhiệm vụ & tự ghi nhận", moTa: "Bé dành 2–3 phút trên sổ: chọn mức năng lượng, biểu cảm cảm xúc, vẽ tranh và tích mục tiêu nhỏ." },
      { ai: "Cha mẹ", tieuDe: "Ghi nhận 1 chạm", moTa: "Nói ngắn gọn sự việc hoặc chụp trang sổ của con — dữ liệu tự vào hồ sơ số theo khung ABC." },
      { ai: "Cha mẹ & Bé", tieuDe: "Củng cố tích cực", moTa: "Khen ngợi cụ thể khi bé hoàn thành nhiệm vụ, bé tự dán Sticker thưởng. Ứng dụng nhắc giờ uống thuốc theo đơn bác sĩ." },
      { ai: "AI", tieuDe: "Phân tích xu hướng", moTa: "Nhận diện tần suất bùng nổ, khung giờ rủi ro, yếu tố kích hoạt; đối chiếu cảm nhận của bé với quan sát của cha mẹ." },
      { ai: "Bé", tieuDe: "Nhìn lại tiến bộ", moTa: "Bộ sưu tập Sticker và huy hiệu giúp bé thấy những bước tiến nhỏ, thêm tự tin cho nhiệm vụ tiếp theo." },
      { ai: "Bác sĩ", tieuDe: "Báo cáo trước tái khám", moTa: "Báo cáo PDF 1–3 trang, quét mã QR là xem — bác sĩ nắm trọn bối cảnh của trẻ trong dưới 90 giây." }
    ]
  },

  /* ---------- 05. Bên trong cuốn sổ ---------- */
  cuonSo: {
    nhan: "Bên trong cuốn sổ",
    tieuDe: "Mỗi trang là một *khoảnh khắc* vui chơi",
    moTa: "Sổ được thiết kế theo nguyên tắc Paper-First / Low-Screen: khoảng trống rộng, hình ảnh trực quan, hạn chế viết chữ dài — để giờ ghi nhật ký trở thành giờ chơi của con.",
    tinhNang: [
      { bieuTuong: "pin", tieuDe: "Bảng năng lượng", moTa: "Bé tự đánh giá mức năng lượng và chọn biểu cảm cảm xúc trong ngày bằng hình ảnh." },
      { bieuTuong: "co", tieuDe: "Khung vẽ cảm xúc", moTa: "Tự do vẽ câu chuyện trong ngày, không áp lực chữ viết hay nỗi sợ bị phán xét." },
      { bieuTuong: "muctieu", tieuDe: "Nhiệm vụ & Micro-Wins", moTa: "Tích những mục tiêu nhỏ; cha mẹ ghi nhận ít nhất 3 tiến bộ của con mỗi ngày." },
      { bieuTuong: "ngoisao", tieuDe: "Sticker khen thưởng", moTa: "Bé tự tay dán sticker khi hoàn thành nhiệm vụ — động lực nội tại bền vững." }
    ],
    dacDiem: ["120 trang · 60 ngày đồng hành", "Giấy Ford 100gsm chống lóa", "Ruột sổ Refill theo chủ đề mới: Vũ trụ, Đại dương, Rừng xanh…"]
  },

  /* ---------- 06. So sánh ---------- */
  soSanh: {
    nhan: "Bối cảnh cạnh tranh",
    tieuDe: "Vì sao chọn *NeuroLog*?",
    cot: ["NeuroLog", "App ngoại (Joon, Atlas ADHD)", "Sổ tay, Planner thường", "Thang đo y khoa"],
    // dùng "co" = có, "khong" = không; chữ khác sẽ hiện nguyên văn
    hang: [
      { tieuChi: "Chi phí sử dụng", o: ["149.000đ", "300.000–500.000đ/tháng", "150.000–300.000đ", "Đi kèm phí khám"] },
      { tieuChi: "Trải nghiệm Low-Screen, bảo vệ thị giác", o: ["co", "khong", "co", "khong"] },
      { tieuChi: "Đồng theo dõi 2 góc nhìn (cha mẹ + con)", o: ["co", "khong", "khong", "khong"] },
      { tieuChi: "Số hóa & tự xuất báo cáo cho bác sĩ", o: ["co", "khong", "khong", "khong"] },
      { tieuChi: "Khen thưởng tích cực (Micro-Wins)", o: ["co", "co", "khong", "khong"] },
      { tieuChi: "Bản địa hóa cho gia đình Việt", o: ["co", "khong", "co", "co"] }
    ]
  },

  /* ---------- 07. Sản phẩm & giá ---------- */
  sanPham: {
    nhan: "Sản phẩm & mô hình kinh doanh",
    tieuDe: "Bắt đầu với *một bộ sổ*",
    goi: [
      { ten: "Starter Kit", gia: "149.000đ", donVi: "/bộ", moTa: "Sổ A5 + Sticker + Hộp + App cơ bản", noiBat: true, nhanNoiBat: "Trọn gói" },
      { ten: "Sổ lẻ + Sticker", gia: "79.000đ", donVi: "/bộ", moTa: "Dành cho gia đình chỉ muốn dùng sổ giấy" },
      { ten: "Ruột sổ Refill", gia: "65.000đ", donVi: "/tập", moTa: "Thay ruột sau 2 tháng, dữ liệu trên app vẫn giữ nguyên" },
      { ten: "Digital Premium", gia: "79.000đ", donVi: "/tháng", moTa: "Gói ứng dụng nâng cao cho cha mẹ" }
    ],
    soTreo: {
      tieuDe: "Sổ treo · Mua 10 tặng 1",
      moTa: "Cứ 10 bộ được bán ra, NeuroLog tài trợ 1 bộ sản phẩm miễn phí cho trẻ em có hoàn cảnh khó khăn."
    },
    phanKhuc: [
      { phanTram: 70, ten: "B2C", moTa: "Gia đình có con 6–11 tuổi tại các đô thị lớn" },
      { phanTram: 30, ten: "B2B2C", moTa: "Phòng khám tâm lý nhi, trung tâm can thiệp sớm, trường hòa nhập" }
    ]
  },

  /* ---------- 08. Tác động xã hội ---------- */
  tacDong: {
    nhan: "Đóng góp SDGs & chỉ số tác động",
    tieuDe: "Mỗi bộ sổ là một *giá trị đo được*",
    sdg: [
      { so: 3, mau: "#4c9f38", ten: "Sức khỏe tốt & An sinh", muc: "Target 3.4 · Thúc đẩy sức khỏe tâm thần, phát hiện sớm cho trẻ em", kpi: "> 70% gia đình duy trì ghi chép trên 5 ngày/tuần trong đợt Pilot 60 ngày" },
      { so: 4, mau: "#c5192d", ten: "Giáo dục có chất lượng", muc: "Target 4.5 · Tiếp cận bình đẳng, giảm kỳ thị cho trẻ có khó khăn hành vi", kpi: "> 80% bác sĩ/chuyên gia đánh giá Báo cáo PDF hữu ích khi điều chỉnh phác đồ hỗ trợ" },
      { so: 10, mau: "#dd1367", ten: "Giảm bất bình đẳng", muc: "Target 10.2 · Hòa nhập xã hội cho trẻ em yếu thế, gia đình thu nhập thấp", kpi: "> 20 bộ “Sổ treo” trong giai đoạn Pilot, lũy kế 5.000 bộ vào năm thứ 3" },
      { so: 12, mau: "#bf8b2e", ten: "Tiêu dùng có trách nhiệm", muc: "Target 12.5 · Giảm chất thải qua mô hình tái sử dụng, nguyên liệu bền vững", kpi: "> 50% khách hàng tái mua Ruột sổ Refill từ tháng thứ 3" }
    ]
  },

  /* ---------- 09. Lộ trình ---------- */
  loTrinh: {
    nhan: "Lộ trình & tăng trưởng",
    tieuDe: "Ba tháng *đầu tiên*, ba năm *phía trước*",
    thang: [
      { ten: "Tháng 10", moc: ["Tuần 1–2: Hoàn thiện Sổ A5 & Từ điển hành vi", "Tuần 3–4: Lập trình App MVP & in ấn 200 bộ"] },
      { ten: "Tháng 11", moc: ["Tuần 5–6: Ký kết B2B2C & khởi động Pilot 60 ngày", "Tuần 7–8: Trao “Sổ treo” & vận hành Zalo OA"] },
      { ten: "Tháng 12", moc: ["Tuần 9–10: Đánh giá tác động y khoa", "Tuần 11–12: Bán lẻ D2C & cán mốc hòa vốn"] }
    ],
    doanhThu: [
      { nam: "2026", giaTri: 127, chu: "127 triệu" },
      { nam: "2027", giaTri: 1200, chu: "1,2 tỷ" },
      { nam: "2028", giaTri: 2090, chu: "2,09 tỷ" }
    ],
    tongDoanhThu: "3,417 tỷ VNĐ doanh thu dự kiến sau 3 năm",
    diemNhan: [
      { so: "T12.2026", moTa: "Dự kiến hòa vốn" },
      { so: "24,6 triệu", moTa: "Vốn ươm tạo MVP" },
      { so: "50.000+", moTa: "Gia đình đồng hành sau 3 năm" }
    ]
  },

  /* ---------- 10. Đội ngũ (theo đúng thứ tự) ---------- */
  doiNgu: {
    nhan: "Đội ngũ phát triển",
    tieuDe: "Những người *đứng sau* NeuroLog",
    thanhVien: [
      { anh: "anh/thanh-vien/01.jpg", ten: "Phạm Lê Phương Anh", vaiTro: "Product & Medical Content Lead", moTa: "Nghiên cứu bối cảnh y khoa, định hướng cấu trúc Phygital, bản địa hóa bộ từ điển ngôn ngữ hành vi cho gia đình Việt." },
      { anh: "anh/thanh-vien/02.jpg", ten: "Nguyễn Ngọc Huyền", vaiTro: "Finance & Research Lead", moTa: "Quản trị mô hình tài chính BMC, kiểm soát giá vốn COGS, tính toán điểm hòa vốn và phân bổ ngân sách." },
      { anh: "anh/thanh-vien/03.jpg", ten: "Lê Nam Sơn", vaiTro: "UX/UI Design Specialist", moTa: "Thiết kế nhận diện thương hiệu, bố cục Sổ A5 Low-Screen, bộ Sticker Micro-Wins và Báo cáo PDF 90 giây; phát triển ý tưởng gốc." },
      { anh: "anh/thanh-vien/04.jpg", ten: "Phạm Việt Anh", vaiTro: "Tech & AI Lead", moTa: "Lập trình Web-App/Mini App, tối ưu thuật toán Scan OCR nhận diện trang sổ và Voice-to-Text chuyển giọng nói thành khung ABC." },
      { anh: "anh/thanh-vien/05.jpg", ten: "Phạm Thị Him", vaiTro: "Growth & B2B2C Lead", moTa: "Phát triển thị trường, truyền thông và kết nối mạng lưới bác sĩ tâm thần nhi, phòng khám và trung tâm can thiệp sớm." }
    ]
  },

  /* ---------- 11. Cố vấn ---------- */
  coVan: {
    nhan: "Đội ngũ cố vấn",
    tieuDe: "Đồng hành *chuyên môn*",
    nguoi: [
      { anh: "anh/co-van/01.jpg", ten: "TS. Phạm Thục Oanh", vaiTro: "Cố vấn Chuyên môn Tâm lý", moTa: "Tiến sĩ Tâm lý học; đồng sáng lập Công ty CP Tâm lý Lâm sàng và Tâm lý Trị liệu (CPPC) và Phòng khám Sức khỏe Tâm thần Pax Clinic." },
      { anh: "anh/co-van/02.jpg", ten: "ThS. Bùi Thanh Văn", vaiTro: "Cố vấn Chuyên môn Tâm lý", moTa: "Nhà tham vấn và trị liệu tâm lý lâm sàng trẻ em và vị thành niên; Giám đốc Trung tâm Công tác Xã hội và Tâm lý Lâm sàng Phương Đông." },
      { anh: "anh/co-van/03.jpg", ten: "Bà Chu Thị Lan Phương", vaiTro: "Cố vấn Định hướng ESG", moTa: "Giám đốc Đào tạo, Tư vấn Tài chính, Thuế và ESG — Hanoitax." },
      { anh: "anh/co-van/04.jpg", ten: "Ông Đỗ Gia Đăng", vaiTro: "Cố vấn Kỹ thuật Công nghệ", moTa: "Trung tâm Thử nghiệm và Thương mại hóa Công nghệ, Viện Đổi mới Sáng tạo Quốc gia (NIC)." },
      { anh: "anh/co-van/05.jpg", ten: "PGS.TS. Nguyễn Minh Phương", vaiTro: "Cố vấn — Học viện Ngân hàng", moTa: "Phó Trưởng Bộ môn Kế toán Ngân hàng, Khoa Ngân hàng — Học viện Ngân hàng." }
    ]
  },

  /* ---------- 12. Liên hệ (cuối trang) ---------- */
  lienHe: {
    nhan: "Liên hệ",
    tieuDe: "Cùng NeuroLog *đồng hành* với con",
    moTa: "Phụ huynh, bác sĩ, phòng khám, trường học hay nhà tài trợ — chúng mình luôn sẵn lòng lắng nghe và kết nối.",
    facebook: "https://www.facebook.com/PartnerNeuroLog",
    email: "neurolog.support@gmail.com",
    web: "https://neurologapp.vercel.app/login",
    luuY: "NeuroLog là công cụ hỗ trợ ghi nhận và theo dõi hành vi tại nhà, không phải thiết bị y tế và không thay thế chẩn đoán hay phác đồ điều trị của bác sĩ."
  }
};
