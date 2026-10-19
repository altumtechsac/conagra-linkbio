(() => {
  const $ = (s) => document.querySelector(s);
  const pageUrl = CONFIG.qrUrl || window.location.href.split("#")[0];

  /* ---------- WhatsApp CTA ---------- */
  $("#ctaWhatsapp").href =
    `https://wa.me/${CONFIG.whatsapp.phone}?text=${encodeURIComponent(CONFIG.whatsapp.message)}`;

  /* ---------- Redes ---------- */
  $("#links").innerHTML = CONFIG.links.map((l, i) => `
    <a class="link" href="${l.url}" target="_blank" rel="noopener"
       style="--c:${l.color}; animation-delay:${0.1 + i * 0.06}s">
      <span class="link__icon"><i class="${l.icon}"></i></span>
      <span class="link__text"><strong>${l.name}</strong><small>${l.desc}</small></span>
      <i class="fa-solid fa-chevron-right link__go"></i>
    </a>`).join("");

  /* ---------- Líneas de producto ---------- */
  $("#productLines").innerHTML = CONFIG.productLines.map((p) => `<li>${p}</li>`).join("");

  /* ---------- Horario + estado abierto/cerrado ---------- */
  const days = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
  const now = new Date(new Date().toLocaleString("en-US", { timeZone: CONFIG.timezone }));
  const today = now.getDay();
  const order = [1, 2, 3, 4, 5, 6, 0];

  $("#hours").innerHTML = order.map((d) => {
    const h = CONFIG.hours[d];
    return `<li class="${d === today ? "today" : ""}"><span>${days[d]}</span>
      <span class="${h ? "" : "closed"}">${h ? `${h[0]} – ${h[1]}` : "Cerrado"}</span></li>`;
  }).join("");

  const toMin = (t) => { const [h, m] = t.split(":").map(Number); return h * 60 + m; };
  const h = CONFIG.hours[today];
  const mins = now.getHours() * 60 + now.getMinutes();
  const open = h && mins >= toMin(h[0]) && mins < toMin(h[1]);
  $("#status").classList.add(open ? "is-open" : "is-closed");
  $("#statusText").textContent = open ? `Abierto · cierra ${h[1]}` : "Cerrado ahora";

  /* ---------- QR ---------- */
  const qrOpts = (el) => new QRCode(el, {
    text: pageUrl, width: 380, height: 380,
    colorDark: "#0d3b23", colorLight: "#ffffff",
    correctLevel: QRCode.CorrectLevel.H, // nivel H para tolerar el logo al centro
  });
  qrOpts($("#qrDesktop"));
  qrOpts($("#qrMobile"));

  document.querySelectorAll("[data-download]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const box = document.getElementById(btn.dataset.download);
      const src = box.querySelector("canvas");
      // Compone QR + logo central en un PNG con borde blanco
      const pad = 40, size = src.width + pad * 2;
      const c = document.createElement("canvas");
      c.width = c.height = size;
      const ctx = c.getContext("2d");
      ctx.fillStyle = "#fff"; ctx.fillRect(0, 0, size, size);
      ctx.drawImage(src, pad, pad);
               // Logo al centro del QR descargado
         const b = Math.round(size * 0.2), x = (size - b) / 2;
         ctx.fillStyle = "#fff";
         ctx.fillRect(x - 10, x - 10, b + 20, b + 20);
         const logo = box.parentElement.querySelector(".qr-badge");
         if (logo && logo.complete && logo.naturalWidth) {
           ctx.drawImage(logo, x, x, b, b);
         } else {
           ctx.fillStyle = "#0d3b23"; ctx.fillRect(x, x, b, b);
           ctx.fillStyle = "#a8d84e"; ctx.font = `bold ${b * 0.6}px Georgia`;
           ctx.textAlign = "center"; ctx.textBaseline = "middle";
           ctx.fillText("C", size / 2, size / 2 + 2);
         }
      const a = document.createElement("a");
      a.download = "conagra-qr.png"; a.href = c.toDataURL("image/png"); a.click();
    });
  });

  const modal = $("#qrModal");
  $("#qrOpen").addEventListener("click", () => modal.showModal());
  $("#qrClose").addEventListener("click", () => modal.close());
  modal.addEventListener("click", (e) => { if (e.target === modal) modal.close(); });

  /* ---------- Compartir / copiar ---------- */
  const toast = (msg) => {
    const t = $("#toast"); t.textContent = msg; t.classList.add("show");
    setTimeout(() => t.classList.remove("show"), 2000);
  };
  const copy = async () => {
    try { await navigator.clipboard.writeText(pageUrl); toast("Enlace copiado"); }
    catch { toast("No se pudo copiar"); }
  };
  $("#copyBtn").addEventListener("click", copy);
  $("#shareBtn").addEventListener("click", async () => {
    if (navigator.share) {
      try { await navigator.share({ title: "CONAGRA", text: "Conoce a Conagra", url: pageUrl }); } catch {}
    } else copy();
  });

  $("#year").textContent = new Date().getFullYear();
})();
