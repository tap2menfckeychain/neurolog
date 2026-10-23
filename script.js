/* Trang giới thiệu NeuroLog — phần xử lý. Nội dung nằm trong data.js */
(function () {
  "use strict";

  const D = window.TRANG || {};
  const $ = (id) => document.getElementById(id);
  const body = document.body;
  const nhac = $("nhac");
  const GIAM_CHUYEN_DONG = !!(window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches);

  /* ---------- Tiện ích ---------- */
  const esc = (s) => String(s == null ? "" : s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  // chữ giữa hai dấu * được tô màu nổi bật
  const noiBat = (s) => esc(s).replace(/\*([^*]+)\*/g, '<em class="to">$1</em>');
  const ds = (x) => (Array.isArray(x) ? x : []);
  const pad = (n) => (n < 10 ? "0" : "") + n;
  function gan(id, html) { const e = $(id); if (e) e.innerHTML = html; }
  function chu(id, t) { const e = $(id); if (e) e.textContent = t || ""; }

  /* ---------- Biểu tượng (vẽ bằng nét) ---------- */
  const BT = {
    dongho: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
    naobo: '<path d="M9.5 4.5a3 3 0 0 0-5 2.6A3.2 3.2 0 0 0 3 12a3.2 3.2 0 0 0 2 3 3 3 0 0 0 4.5 3.4V4.5z"/><path d="M14.5 4.5a3 3 0 0 1 5 2.6A3.2 3.2 0 0 1 21 12a3.2 3.2 0 0 1-2 3 3 3 0 0 1-4.5 3.4V4.5z"/><path d="M9.5 9H7.5M14.5 9h2M9.5 14H8M14.5 14H16"/>',
    dienthoai: '<rect x="7" y="2.5" width="10" height="19" rx="2.5"/><path d="M11 18.5h2"/><path d="M3 9l2 1.5M3 14l2-1.5M21 9l-2 1.5M21 14l-2-1.5"/>',
    be: '<circle cx="12" cy="7" r="3.5"/><path d="M5.5 21c.5-4 3.2-6.5 6.5-6.5s6 2.5 6.5 6.5"/><path d="M10.5 6.5h.01M13.5 6.5h.01"/>',
    bacsi: '<circle cx="12" cy="6.5" r="3.5"/><path d="M5 21c.4-4.2 3.2-7 7-7s6.6 2.8 7 7"/><path d="M9 14.6v2.4a2 2 0 0 0 4 0M15 14.6V18"/><circle cx="15" cy="19" r="1.2"/>',
    pin: '<rect x="3" y="7" width="16" height="10" rx="2.5"/><path d="M21 10.5v3"/><path d="M6 10v4M9 10v4M12 10v4"/>',
    co: '<path d="M4 20c1.5 0 3-1 3-3a2 2 0 0 0-2-2c-1.5 0-2 1.3-2 2.6V20h1z"/><path d="M8.5 14.5L19 4a1.4 1.4 0 0 1 2 2L10.5 16.5"/>',
    muctieu: '<circle cx="12" cy="12" r="8.5"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.5"/>',
    ngoisao: '<path d="M12 3.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8L12 16.9l-5.2 2.7 1-5.8-4.3-4.1 5.9-.9z"/>',
    tim: '<path d="M12 20s-7.5-4.4-7.5-10A4.2 4.2 0 0 1 12 7.6 4.2 4.2 0 0 1 19.5 10c0 5.6-7.5 10-7.5 10z"/>',
    co_check: '<path d="M5 12.5l4.2 4.2L19 7"/>',
    khong: '<path d="M7 7l10 10M17 7L7 17"/>',
    mic: '<rect x="9" y="3" width="6" height="11" rx="3"/><path d="M5.5 11a6.5 6.5 0 0 0 13 0M12 17.5V21"/>',
    quet: '<path d="M4 8V5.5A1.5 1.5 0 0 1 5.5 4H8M16 4h2.5A1.5 1.5 0 0 1 20 5.5V8M20 16v2.5a1.5 1.5 0 0 1-1.5 1.5H16M8 20H5.5A1.5 1.5 0 0 1 4 18.5V16"/><path d="M4 12h16"/>',
    facebook: '<path d="M14 8.5h2.5V5H14a3.5 3.5 0 0 0-3.5 3.5V11H8v3.5h2.5V21H14v-6.5h2.5L17 11h-3V9a.5.5 0 0 1 .5-.5z"/>',
    thu: '<rect x="3" y="5.5" width="18" height="13" rx="2.5"/><path d="M4 7l8 6 8-6"/>',
    web: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.6 2.6 3.8 5.6 3.8 9s-1.2 6.4-3.8 9c-2.6-2.6-3.8-5.6-3.8-9S9.4 5.6 12 3z"/>',
    muiten: '<path d="M5 12h14M13 6l6 6-6 6"/>',
    lap: '<path d="M4 12a8 8 0 0 1 14-5.3L20 9M20 4v5h-5"/><path d="M20 12a8 8 0 0 1-14 5.3L4 15M4 20v-5h5"/>',
    baocao: '<path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"/><path d="M14 3v5h5"/><path d="M9 17v-3M12 17v-5M15 17v-2"/>'
  };
  const icon = (ten, cls) => '<svg class="bt ' + (cls || "") + '" viewBox="0 0 24 24" aria-hidden="true">' + (BT[ten] || BT.ngoisao) + "</svg>";

  // đầu mỗi phần: số thứ tự + nhãn + tiêu đề + mô tả
  function phanDau(id, x) {
    const e = $(id);
    if (!e || !x) return;
    e.innerHTML =
      '<p class="nhan hien"><span class="nhan-so">' + esc(e.dataset.so || "") + "</span>" + esc(x.nhan) + "</p>" +
      '<h2 class="td hien">' + noiBat(x.tieuDe) + "</h2>" +
      (x.moTa ? '<p class="mota hien">' + esc(x.moTa) + "</p>" : "");
  }
  const tre = (i) => ' style="--tre:' + (i * 90) + 'ms"';

  /* ---------- Bìa sổ ---------- */
  const BIA = D.bia || {};
  chu("biaDong1", BIA.dong1);
  chu("biaDong2", BIA.dong2);
  chu("biaGoiY", BIA.goiY || "Chạm để mở sổ");

  /* ---------- Đầu trang ---------- */
  const DT = D.dauTrang || {};
  chu("heroNhan", DT.nhan);
  gan("heroTieuDe", noiBat(DT.tieuDe));
  chu("heroMoTa", DT.moTa);
  gan("heroNut1", esc(DT.nut1) + icon("muiten"));
  $("heroNut1").href = (D.lienHe || {}).web || "#lienHe";
  chu("heroNut2", DT.nut2);
  chu("heroKhauHieu", DT.khauHieu);
  chu("heroGiay", DT.nhanGiay);
  chu("heroSo", DT.nhanSo);

  gan("conSo", ds(D.conSo).map((c, i) =>
    '<div class="cs-o hien"' + tre(i) + '><b class="dem" data-so="' + esc(c.so) + '">' + esc(c.so) + "</b><span>" + esc(c.moTa) + "</span></div>"
  ).join(""));

  /* ---------- 01 Vấn đề ---------- */
  const VD = D.vanDe || {};
  phanDau("vdDau", VD);
  gan("vdThe", ds(VD.the).map((t, i) =>
    '<article class="the the-vd mau' + (i % 4) + ' hien"' + tre(i) + '>' +
      '<span class="the-bt">' + icon(t.bieuTuong) + "</span>" +
      "<h3>" + esc(t.tieuDe) + "</h3><p>" + esc(t.moTa) + "</p></article>"
  ).join(""));

  /* ---------- 02 Khách hàng ---------- */
  const KH = D.khachHang || {};
  phanDau("khDau", KH);
  gan("khNhom", ds(KH.nhom).map((n, i) =>
    '<article class="the the-kh mau' + i + ' hien"' + tre(i) + ">" +
      '<div class="kh-hinh">' + (n.anh ? '<img src="' + esc(n.anh) + '" alt="" loading="lazy">' : '<span class="kh-bt">' + icon(n.bieuTuong || "bacsi") + "</span>") + "</div>" +
      '<span class="the-nho">' + esc(n.the) + "</span>" +
      "<h3>" + esc(n.tieuDe) + '</h3><p class="kh-phu">' + esc(n.phu) + "</p>" +
      '<p class="kh-mota">' + esc(n.moTa) + "</p>" +
      '<dl class="kh-dl"><div><dt>Nỗi đau</dt><dd>' + esc(n.noiDau) + "</dd></div>" +
      "<div><dt>Nhu cầu</dt><dd>" + esc(n.nhuCau) + "</dd></div></dl></article>"
  ).join(""));

  /* ---------- 03 Giải pháp ---------- */
  const GP = D.giaiPhap || {};
  phanDau("gpDau", GP);
  const G = GP.giay || {}, S = GP.so || {};
  gan("gpDoi",
    '<article class="gp-o giay hien">' +
      '<span class="gp-nhan">' + esc(G.nhan) + "</span><h3>" + esc(G.tieuDe) + "</h3><p>" + esc(G.moTa) + "</p>" +
      '<div class="gp-anh-so"><img src="anh/so-tay-1.jpg" alt="" loading="lazy"><img src="anh/so-tay-2.jpg" alt="" loading="lazy"></div>' +
    "</article>" +
    '<div class="gp-cau hien" aria-hidden="true"><span>' + icon("quet") + "Scan</span><span>" + icon("mic") + "Voice</span></div>" +
    '<article class="gp-o so hien" style="--tre:120ms">' +
      '<span class="gp-nhan">' + esc(S.nhan) + "</span><h3>" + esc(S.tieuDe) + "</h3><p>" + esc(S.moTa) + "</p>" +
      '<div class="gp-anh-app"><img src="anh/ung-dung.jpg" alt="Ứng dụng NeuroLog" loading="lazy"><img class="gp-bt-app" src="anh/bieu-tuong-app.webp" alt="" loading="lazy"></div>' +
    "</article>");
  gan("gpDiem", ds(GP.diemKhac).map((d, i) =>
    '<article class="diem mau' + (i % 4) + ' hien"' + tre(i) + '><span class="diem-so">' + pad(i + 1) + "</span>" +
      "<h3>" + esc(d.tieuDe) + "</h3><p>" + esc(d.moTa) + "</p></article>"
  ).join(""));

  /* ---------- 04 Vòng lặp ---------- */
  const VL = D.vongLap || {};
  phanDau("vlDau", VL);
  const mauAi = (ai) => /bác sĩ/i.test(ai) ? "bs" : /^AI/i.test(ai) ? "ai" : /cha mẹ/i.test(ai) ? "cm" : "be";
  gan("vlBuoc", ds(VL.buoc).map((b, i) =>
    '<li class="buoc hien"' + tre(i) + '><span class="buoc-so">' + (i + 1) + "</span>" +
      '<div class="buoc-noi"><span class="vai ' + mauAi(b.ai) + '">' + esc(b.ai) + "</span>" +
      "<h3>" + esc(b.tieuDe) + "</h3><p>" + esc(b.moTa) + "</p></div></li>"
  ).join("") + '<li class="buoc-lap hien">' + icon("lap") + "<span>Lặp lại mỗi ngày</span></li>");

  /* ---------- 05 Cuốn sổ ---------- */
  const CS = D.cuonSo || {};
  phanDau("csDau", CS);
  gan("csTinhNang", ds(CS.tinhNang).map((t, i) =>
    '<div class="tn mau' + (i % 4) + ' hien"' + tre(i) + '><span class="tn-bt">' + icon(t.bieuTuong) + "</span><div><h3>" + esc(t.tieuDe) + "</h3><p>" + esc(t.moTa) + "</p></div></div>"
  ).join(""));
  gan("csDacDiem", ds(CS.dacDiem).map((t) => '<span class="chip hien">' + esc(t) + "</span>").join(""));

  /* ---------- 06 So sánh ---------- */
  const SS = D.soSanh || {};
  phanDau("ssDau", SS);
  const oBang = (v) => v === "co" ? '<span class="tich co" title="Có">' + icon("co_check") + "</span>"
    : v === "khong" ? '<span class="tich khong" title="Không">' + icon("khong") + "</span>" : esc(v);
  gan("ssBang",
    "<thead><tr><th>Tiêu chí</th>" + ds(SS.cot).map((c, i) => "<th" + (i ? "" : ' class="nl"') + ">" + esc(c) + "</th>").join("") + "</tr></thead>" +
    "<tbody>" + ds(SS.hang).map((h) =>
      '<tr><th scope="row">' + esc(h.tieuChi) + "</th>" + ds(h.o).map((v, i) => "<td" + (i ? "" : ' class="nl"') + ">" + oBang(v) + "</td>").join("") + "</tr>"
    ).join("") + "</tbody>");

  /* ---------- 07 Sản phẩm ---------- */
  const SP = D.sanPham || {};
  phanDau("spDau", SP);
  gan("spGoi", ds(SP.goi).map((g, i) =>
    '<article class="goi' + (g.noiBat ? " noi-bat" : "") + ' hien"' + tre(i) + ">" +
      (g.noiBat ? '<span class="goi-nhan">' + esc(g.nhanNoiBat || "Nổi bật") + "</span>" : "") +
      "<h3>" + esc(g.ten) + '</h3><p class="goi-gia"><b>' + esc(g.gia) + "</b><span>" + esc(g.donVi) + "</span></p>" +
      "<p>" + esc(g.moTa) + "</p></article>"
  ).join(""));
  const ST = SP.soTreo || {};
  gan("spSoTreo", '<span class="st-bt">' + icon("tim") + "</span><div><h3>" + esc(ST.tieuDe) + "</h3><p>" + esc(ST.moTa) + "</p></div>");
  const PK = ds(SP.phanKhuc);
  gan("spPhanKhuc",
    '<h3>Phân khúc doanh thu</h3><div class="pk-thanh">' + PK.map((p, i) =>
      '<span class="pk' + i + '" style="flex:' + (+p.phanTram || 1) + '"><b>' + esc(p.phanTram) + "%</b> " + esc(p.ten) + "</span>").join("") + "</div>" +
    '<ul class="pk-ds">' + PK.map((p, i) => '<li><i class="pk' + i + '"></i><b>' + esc(p.ten) + "</b> — " + esc(p.moTa) + "</li>").join("") + "</ul>");

  /* ---------- 08 Tác động ---------- */
  const TD = D.tacDong || {};
  phanDau("tdDau", TD);
  gan("tdSdg", ds(TD.sdg).map((s, i) =>
    '<article class="the the-sdg hien" style="--sdg:' + esc(s.mau) + ";--tre:" + i * 90 + 'ms">' +
      '<div class="sdg-dau"><span class="sdg-o"><small>SDG</small>' + esc(s.so) + "</span><h3>" + esc(s.ten) + "</h3></div>" +
      '<p class="sdg-muc">' + esc(s.muc) + "</p>" +
      '<p class="sdg-kpi">' + icon("muctieu") + "<span>" + esc(s.kpi) + "</span></p></article>"
  ).join(""));

  /* ---------- 09 Lộ trình ---------- */
  const LT = D.loTrinh || {};
  phanDau("ltDau", LT);
  gan("ltThang", ds(LT.thang).map((t, i) =>
    '<article class="thang hien"' + tre(i) + '><h3><span>' + pad(i + 1) + "</span>" + esc(t.ten) + "</h3><ul>" +
      ds(t.moc).map((m) => "<li>" + esc(m) + "</li>").join("") + "</ul></article>"
  ).join(""));
  const DTh = ds(LT.doanhThu), maxDT = Math.max.apply(null, DTh.map((d) => +d.giaTri || 0).concat([1]));
  gan("ltBieuDo",
    '<h3>Doanh thu dự kiến</h3><div class="cot-luoi">' + DTh.map((d) =>
      '<div class="cot"><span class="cot-chu">' + esc(d.chu) + '</span><span class="cot-than" style="--h:' + Math.max(4, Math.round((+d.giaTri || 0) / maxDT * 100)) + '%"></span><span class="cot-nam">' + esc(d.nam) + "</span></div>"
    ).join("") + '</div><p class="bd-tong">' + esc(LT.tongDoanhThu) + "</p>");
  gan("ltDiem", ds(LT.diemNhan).map((d, i) =>
    '<div class="ld hien"' + tre(i) + '><b class="dem" data-so="' + esc(d.so) + '">' + esc(d.so) + "</b><span>" + esc(d.moTa) + "</span></div>"
  ).join(""));

  /* ---------- 10 Đội ngũ ---------- */
  const DN = D.doiNgu || {};
  phanDau("dnDau", DN);
  gan("dnThanhVien", ds(DN.thanhVien).map((t, i) =>
    '<article class="tv mau' + (i % 4) + ' hien"' + tre(i) + ">" +
      '<div class="tv-anh"><img src="' + esc(t.anh) + '" alt="' + esc(t.ten) + '" loading="lazy" width="560" height="700"><span class="tv-so">' + pad(i + 1) + "</span></div>" +
      '<div class="tv-chu"><h3>' + esc(t.ten) + '</h3><p class="tv-vai">' + esc(t.vaiTro) + "</p><p>" + esc(t.moTa) + "</p></div></article>"
  ).join(""));

  /* ---------- 11 Cố vấn ---------- */
  const CV = D.coVan || {};
  phanDau("cvDau", CV);
  gan("cvNguoi", ds(CV.nguoi).map((n, i) =>
    '<article class="cv hien"' + tre(i) + '><img src="' + esc(n.anh) + '" alt="' + esc(n.ten) + '" loading="lazy" width="120" height="120">' +
      "<div><h3>" + esc(n.ten) + '</h3><p class="cv-vai">' + esc(n.vaiTro) + "</p><p>" + esc(n.moTa) + "</p></div></article>"
  ).join(""));

  /* ---------- 12 Liên hệ ---------- */
  const LH = D.lienHe || {};
  chu("lhNhan", LH.nhan);
  gan("lhTieuDe", noiBat(LH.tieuDe));
  chu("lhMoTa", LH.moTa);
  const gonLink = (u) => String(u || "").replace(/^https?:\/\/(www\.)?/, "").replace(/\/+$/, "");
  const NUT = [];
  if (LH.facebook) NUT.push({ cls: "fb", bt: "facebook", nhan: "Facebook", gt: gonLink(LH.facebook).replace(/^facebook\.com/, "fb.com"), href: LH.facebook, ngoai: true });
  if (LH.email) NUT.push({ cls: "mail", bt: "thu", nhan: "Email", gt: LH.email, href: "mailto:" + LH.email });
  if (LH.web) NUT.push({ cls: "web", bt: "web", nhan: "Ứng dụng web", gt: gonLink(LH.web).replace(/\/login$/, ""), href: LH.web, ngoai: true });
  gan("lhNut", NUT.map((n) =>
    '<a class="lh-o ' + n.cls + '" href="' + esc(n.href) + '"' + (n.ngoai ? ' target="_blank" rel="noopener"' : "") + ">" +
      '<span class="lh-bt">' + icon(n.bt) + '</span><span class="lh-chu"><small>' + esc(n.nhan) + "</small><b>" + esc(n.gt) + "</b></span>" + icon("muiten", "lh-mt") + "</a>"
  ).join(""));
  chu("lhLuuY", LH.luuY);
  chu("chanKhauHieu", DT.khauHieu);
  $("chanNhac").textContent = "© " + new Date().getFullYear() + " NeuroLog" + (D.tenNhac ? " · Nhạc nền: " + D.tenNhac : "");

  /* ---------- Nhạc: tự phát; trình duyệt chặn thì phát khi chạm mở sổ ---------- */
  const AM = Math.min(1, Math.max(0.05, +D.amLuong || 0.45));
  let daMo = false, nguoiTat = false, anTamDung = false, henLen = 0;
  function phat() {
    let p;
    try { p = nhac.play(); } catch (e) { p = Promise.reject(e); }
    return Promise.resolve(p);
  }
  // nhạc vào nhỏ rồi to dần cho êm tai
  nhac.addEventListener("play", () => {
    body.classList.add("dang-phat");
    clearInterval(henLen);
    let v = 0;
    try { nhac.volume = 0; } catch (e) { /* iPhone không cho chỉnh âm lượng */ }
    henLen = setInterval(() => {
      v = Math.min(AM, v + AM / 30);
      try { nhac.volume = v; } catch (e) { /* bỏ qua */ }
      if (v >= AM) clearInterval(henLen);
    }, 60);
  });
  nhac.addEventListener("pause", () => body.classList.remove("dang-phat"));

  function moBia() {
    if (daMo) return;
    daMo = true;
    $("bia").classList.add("mo");
    setTimeout(() => body.classList.add("da-mo"), 450);
    setTimeout(() => {
      $("bia").hidden = true;
      body.classList.remove("khoa");
      batDauHien();
    }, 1250);
  }
  $("bia").addEventListener("click", () => { phat().catch(() => {}); moBia(); });
  $("bia").addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") { e.preventDefault(); phat().catch(() => {}); moBia(); }
  });
  // Đã mở sổ mà nhạc vẫn chưa chạy (trình duyệt khó tính): chạm bất kỳ đâu là phát
  ["pointerup", "touchend", "click", "keydown"].forEach((ev) => document.addEventListener(ev, () => {
    if (daMo && nhac.paused && !nguoiTat) phat().catch(() => {});
  }, true));
  $("nutNhac").addEventListener("click", (e) => {
    e.stopPropagation();
    if (nhac.paused) { nguoiTat = false; phat().catch(() => {}); }
    else { nguoiTat = true; nhac.pause(); }
  });
  // Chuyển sang ứng dụng khác thì tạm dừng, quay lại thì phát tiếp
  document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
      if (!nhac.paused) { anTamDung = true; nhac.pause(); }
    } else if (anTamDung && !nguoiTat) {
      anTamDung = false;
      phat().catch(() => {});
    }
  });

  /* ---------- Mục lục trên điện thoại ---------- */
  const nutMenu = $("nutMenu");
  function datMenu(mo) {
    body.classList.toggle("mo-menu", mo);
    nutMenu.setAttribute("aria-expanded", mo ? "true" : "false");
  }
  nutMenu.addEventListener("click", (e) => { e.stopPropagation(); datMenu(!body.classList.contains("mo-menu")); });
  $("menu").addEventListener("click", (e) => { if (e.target.closest("a")) datMenu(false); });
  document.addEventListener("click", (e) => {
    if (body.classList.contains("mo-menu") && !e.target.closest("#menu")) datMenu(false);
  });
  addEventListener("scroll", () => body.classList.toggle("cuon", scrollY > 12), { passive: true });

  /* ---------- Cuộn tới đâu hiện tới đó, đếm số ---------- */
  const fmt = (n) => String(n).replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  function demSo(b) {
    const goc = b.dataset.so || "", m = goc.match(/^(\d{1,3}(?:\.\d{3})+|\d+)(?![\d,])(.*)$/);
    if (!m || GIAM_CHUYEN_DONG) return;
    const dich = +m[1].replace(/\./g, ""), duoi = m[2], t0 = performance.now(), lau = 1400;
    (function buoc(now) {
      const p = Math.min(1, (now - t0) / lau), e = 1 - Math.pow(1 - p, 3);
      b.textContent = fmt(Math.round(dich * e)) + duoi;
      if (p < 1) requestAnimationFrame(buoc);
      else b.textContent = goc;
    })(t0);
  }
  function batDauHien() {
    const muc = document.querySelectorAll(".hien, .bieu-do");
    const vao = (x) => {
      x.classList.add("vao");
      x.querySelectorAll(".dem").forEach(demSo);
    };
    if (!("IntersectionObserver" in window) || GIAM_CHUYEN_DONG) { muc.forEach(vao); return; }
    const io = new IntersectionObserver((ms) => {
      ms.forEach((m) => {
        if (!m.isIntersecting) return;
        vao(m.target);
        io.unobserve(m.target);
      });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.12 });
    muc.forEach((x) => io.observe(x));

    // tô đậm mục đang xem trên thanh mục lục (phần không có trong mục lục thì bỏ tô)
    const links = Array.from(document.querySelectorAll("#menu a"));
    const theo = new IntersectionObserver((ms) => {
      ms.forEach((m) => {
        if (!m.isIntersecting) return;
        links.forEach((a) => a.classList.toggle("dang-xem", a.getAttribute("href") === "#" + m.target.id));
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    document.querySelectorAll("main section[id]").forEach((s) => theo.observe(s));
  }

  /* ---------- Bong bóng màu trôi nhẹ phía sau ---------- */
  const cv = $("nen"), g = cv.getContext("2d");
  const MAU = ["58,208,127", "244,202,78", "255,167,221", "86,213,233", "255,69,137", "120,150,255"];
  let HAT = [];
  const nn = (a, b) => a + Math.random() * (b - a);
  function taoHat(dau) {
    return { x: Math.random() * innerWidth, y: dau ? Math.random() * innerHeight : innerHeight + 20, r: nn(3, 9), v: nn(8, 22), lac: nn(8, 26), pha: Math.random() * 6.3, mau: MAU[(Math.random() * MAU.length) | 0], a: nn(0.18, 0.45) };
  }
  function datNen() {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    cv.width = Math.round(innerWidth * dpr);
    cv.height = Math.round(innerHeight * dpr);
    g.setTransform(dpr, 0, 0, dpr, 0, 0);
    const n = GIAM_CHUYEN_DONG ? 0 : Math.round(Math.min(26, Math.max(10, (innerWidth * innerHeight) / 45000)));
    HAT = [];
    for (let i = 0; i < n; i++) HAT.push(taoHat(true));
  }
  let truoc = performance.now();
  function vong(now) {
    requestAnimationFrame(vong);
    const dt = Math.min(0.1, Math.max(0, (now - truoc) / 1000));
    truoc = now;
    if (document.hidden || !HAT.length) return;
    g.clearRect(0, 0, innerWidth, innerHeight);
    const s = now / 1000;
    for (const p of HAT) {
      p.y -= p.v * dt;
      if (p.y < -20) Object.assign(p, taoHat(false));
      const x = p.x + Math.sin(s * 0.6 + p.pha) * p.lac;
      const gr = g.createRadialGradient(x, p.y, 0, x, p.y, p.r);
      gr.addColorStop(0, "rgba(" + p.mau + "," + p.a + ")");
      gr.addColorStop(1, "rgba(" + p.mau + ",0)");
      g.fillStyle = gr;
      g.beginPath();
      g.arc(x, p.y, p.r, 0, 6.283);
      g.fill();
    }
  }
  let henCo = 0;
  addEventListener("resize", () => { clearTimeout(henCo); henCo = setTimeout(datNen, 150); });

  /* ---------- Khởi động ---------- */
  datNen();
  requestAnimationFrame(vong);
  if ("mediaSession" in navigator && typeof MediaMetadata !== "undefined") {
    try { navigator.mediaSession.metadata = new MediaMetadata({ title: D.tenNhac || "NeuroLog", artist: "NeuroLog" }); } catch (e) { /* bỏ qua */ }
  }
  nhac.src = D.nhac || "";
  // thử tự phát nhạc ngay khi mở trang: trình duyệt cho phép thì sổ tự mở
  phat().then(() => setTimeout(moBia, 1400), () => {});
})();
