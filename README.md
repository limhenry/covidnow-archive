# 🇲🇾 COVIDNOW Historic Archive

A historic retrospective and release archive for **COVIDNOW** (`covidnow.moh.gov.my`), Malaysia’s official public COVID-19 data and analytics dashboard.

Launched in **2021** and built to production in just **3 weeks** in collaboration with the Ministry of Health Malaysia (MoH), COVIDNOW revolutionized public health communications by shifting away from static PDF statements to a live, granular, open-data dashboard. Throughout its operation, it served over **100,000,000+ views with 0 downtime** before transitioning into [KKMNOW](https://data.moh.gov.my/).

---

## 👥 The Volunteer Developer Team

Built *pro bono* by 4 independent developers in close partnership with Dr. Mahesh Appannan and the Crisis Preparedness and Response Centre (CPRC) data team:

- [**Henry Lim**](https://linkedin.com/in/henrylim96)
- [**Calum Lim**](https://www.linkedin.com/in/calumlim/)
- [**Lim Sheng Han**](https://www.linkedin.com/in/shenghan/)
- [**Roshen Maghan**](https://www.linkedin.com/in/roshen-maghhan-831b3498/)

---

## 🛠️ Original Tech Stack

- **Frontend:** Nuxt, Tailwind CSS, Cloudflare Pages
- **Backend:** Python

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18+)

### Development / Local Server

Start a local static server pointing to `src/`:

```bash
npm run serve
```

Then open `http://localhost:3000` in your browser.

---

## 📦 Generating Releases Data (Optional)

The archive dataset (`src/data/releases.json`) contains curated release records mapped with corresponding Internet Archive Wayback Machine snapshots.

To regenerate or fetch updated pull requests:

1. Configure your `.env` file:
   ```env
   GITHUB_TOKEN=your_github_token
   GITHUB_OWNER=user_or_org_name
   GITHUB_REPO=repo_name
   ```

2. Run the generator script:
   ```bash
   npm run generate
   ```

---

## 📰 Press & Media Coverage

- **New Straits Times**: [*Heroes lift Covid 'veil of secrecy'*](https://www.nst.com.my/news/nation/2021/09/726457/heroes-lift-covid-veil-secrecy)
- **Malay Mail**: [*Developers of CovidNow website committed to helping pro bono as long as they’re needed*](https://www.malaymail.com/news/malaysia/2021/10/05/developers-of-covidnow-website-committed-to-helping-pro-bono-as-long-as-the/2010974)
- **Wayback Machine**: [*Preserved launch day story*](https://web.archive.org/web/20210909092147/https://covidnow.moh.gov.my/about)

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).
