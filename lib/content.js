export const content = [
  {
    name: "Konten Video Youtube",
    desc: "Sebuah alat AI yang menghasilkan deskripsi video Youtube berdasarkan informasi yang Anda berikan",
    category: "Youtube",
    icon: "/youtube-fill.svg",
    aiPrompt:
      "Buatkan deskripsi video Youtube berdasarkan judul dan garis besar yang diberikan. Sertakan deskripsi yang lengkap dan detail dalam format Rich Text Editor dan tambahkan beberapa hashtag yang relevan.",
    slug: "content-youtube",
    form: [
      {
        label: "Judul Video Youtube",
        field: "input",
        name: "judul",
        required: true,
      },
    ],
  },
  {
    name: "Judul Blog",
    desc: "Sebuah alat AI yang menghasilkan ide blog berdasarkan informasi yang Anda berikan",
    category: "Blog",
    icon: "/news-line.svg",
    aiPrompt:
      "Buatkan ide blog berdasarkan judul dan garis besar topik yang diberikan. Berikan hasil dalam format Rich Text Editor.",
    slug: "content-ide-blog",
    form: [
      {
        label: "Judul Blog",
        field: "input",
        name: "judul",
        required: true,
      },
    ],
  },
  {
    name: "Konten Instagram",
    desc: "Sebuah alat AI yang menghasilkan hashtag Instagram berdasarkan judul dan informasi post Anda",
    category: "Instagram",
    icon: "/instagram-fill.svg",
    aiPrompt:
      "Buatkan beberapa contoh ide Caption dan hashtag Instagram yang relevan berdasarkan judul dan garis besar topik yang diberikan. Sertakan hasil dalam format Rich Text Editor.",
    slug: "content-instagram",
    form: [
      {
        label: "Judul Konten Instagram",
        field: "input",
        name: "judul",
        required: true,
      },
    ],
  },
  {
    name: "Konten Tiktok",
    desc: "Sebuah alat AI yang menghasilkan ide topik Tiktok berdasarkan judul dan informasi post Anda",
    category: "Tiktok",
    icon: "/tiktok-fill.svg",
    aiPrompt:
      "Buatkan beberapa contoh ide Caption dan Hashtag Tiktok yang relevan berdasarkan judul dan garis besar topik yang diberikan. Sertakan hasil dalam format Rich Text Editor.",
    slug: "content-tiktok",
    form: [
      {
        label: "Judul Konten Tiktok",
        field: "input",
        name: "judul",
        required: true,
      },
    ],
  },
  {
    name: "Posting Linkedin",
    desc: "Sebuah alat AI yang menghasilkan ide Caption post dan Hashtag Linkedin berdasarkan judul dan informasi post Anda",
    category: "Linkedin",
    icon: "/linkedin-box-fill.svg",
    aiPrompt:
      "Buatkan beberapa contoh ide postingan Linkedin yang relevan berdasarkan judul dan garis besar topik yang diberikan. Sertakan hasil dalam format Rich Text Editor.",
    slug: "content-linkedin",
    form: [
      {
        label: "Judul Postingan Linkedin",
        field: "input",
        name: "judul",
        required: true,
      },
    ],
  },
  {
    name: "Konten Twitter",
    desc: "Sebuah alat AI yang menghasilkan contoh tweet berdasarkan judul dan informasi post Anda",
    category: "Twitter",
    icon: "/twitter-x-fill.svg",
    aiPrompt:
      "Buatkan contoh tweet sepanjang 280 karakter berdasarkan judul dan garis besar topik yang diberikan. Sertakan hasil dalam format Text Editor.",
    slug: "content-twitter",
    form: [
      {
        label: "Judul Postingan Twitter",
        field: "input",
        name: "judul",
        required: true,
      },
    ],
  },
  {
    name: "Konten Facebook",
    desc: "Sebuah alat AI yang menghasilkan contoh Postingan Facebook berdasarkan judul dan informasi post Anda",
    category: "Twitter",
    icon: "/facebook.svg",
    aiPrompt:
      "Buatkan contoh postingan Facebook sepanjang 280 karakter berdasarkan judul dan garis besar topik yang diberikan. Sertakan hasil dalam format Text Editor.",
    slug: "content-facebook",
    form: [
      {
        label: "Judul Postingan Facebook",
        field: "input",
        name: "judul",
        required: true,
      },
    ],
  },
];
