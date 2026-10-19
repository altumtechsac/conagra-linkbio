/* =========================================================
   CONFIGURACIÓN — edita SOLO este archivo para cambiar datos
   ========================================================= */
const CONFIG = {
  whatsapp: {
    phone: "51983047594",
    message: "Hola CONAGRA, necesito información sobre sus productos",
  },

  // Orden = orden en pantalla. "icon" = clase de Font Awesome.
  links: [
    {
      name: "Facebook",
      desc: "¡Conoce nuestras soluciones!",
      url: "https://www.facebook.com/p/Consorcio-Agropecuario-Americano-SAC-61593700641638/",
      // Alternativa que aparece en la cabecera del sitio:
      // "https://www.facebook.com/profile.php?id=100094629637938"
      icon: "fa-brands fa-facebook-f",
      color: "#1877F2",
    },
    {
      name: "Instagram",
      desc: "Siempre tenemos novedades",
      url: "https://www.instagram.com/conagrasac/",
      // Alternativa de la cabecera: "https://www.instagram.com/conagra.sac/"
      icon: "fa-brands fa-instagram",
      color: "#E1306C",
    },
    {
      name: "TikTok",
      desc: "Todo lo que necesitas, aquí",
      url: "https://www.tiktok.com/@CAMBIAR_USUARIO", // TODO: poner el usuario real
      icon: "fa-brands fa-tiktok",
      color: "#111111",
    },
    {
      name: "YouTube",
      desc: "Videos y demostraciones en campo",
      url: "https://www.youtube.com/@CONAGRASAC",
      icon: "fa-brands fa-youtube",
      color: "#FF0000",
    },
    {
      name: "LinkedIn",
      desc: "Conoce a la empresa",
      url: "https://www.linkedin.com/in/conagra-sac-185676283/",
      icon: "fa-brands fa-linkedin-in",
      color: "#0A66C2",
    },
    {
      name: "Sitio web",
      desc: "Catálogo completo de productos",
      url: "https://conagra.com.pe/",
      icon: "fa-solid fa-globe",
      color: "#2f8f4e",
    },
  ],

  productLines: [
    "Fertilizantes NPK",
    "Micronutrientes",
    "Fertilizantes con calcio",
    "Enraizadores",
    "Bioestimulantes",
    "Inductores de fitoalexinas",
    "Bio insecticidas / fungicidas",
    "Coadyuvantes",
    "Acondicionadores de suelo",
    "Ácidos húmicos",
    "Equipos agrícolas",
  ],

  // Horario: 0 = domingo ... 6 = sábado. null = cerrado.
  // TODO: confirmar horario real con la empresa
  hours: {
    1: ["08:00", "18:00"],
    2: ["08:00", "18:00"],
    3: ["08:00", "18:00"],
    4: ["08:00", "18:00"],
    5: ["08:00", "18:00"],
    6: ["08:00", "13:00"],
    0: null,
  },
  timezone: "America/Lima",

  // URL a la que apunta el QR. Si se deja vacío, usa la URL actual de la página.
  // Recomendado: poner la URL final de GitHub Pages para que el QR impreso nunca cambie.
  qrUrl: "",
};
