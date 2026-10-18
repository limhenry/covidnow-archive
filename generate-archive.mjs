import { Octokit } from "@octokit/rest";
import fs from "fs";

try {
  process.loadEnvFile();
} catch {}

const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN });
const OWNER = process.env.GITHUB_OWNER;
const REPO = process.env.GITHUB_REPO;

async function buildArchive() {
  console.log("Building archive...");
  const prs = await octokit.paginate(octokit.pulls.list, {
    owner: OWNER,
    repo: REPO,
    state: "closed",
    sort: "updated",
    direction: "desc",
    per_page: 100,
  });

  const mergedPRs = prs.filter((pr) => pr.merged_at);
  const records = [];

  for (const pr of mergedPRs) {
    const ts = pr.merged_at.replace(/[-:T]/g, "").slice(0, 14); // YYYYMMDDHHMMSS
    
    // Fallback direct URL if API rate-limits
    let archiveUrl = `https://web.archive.org/web/${ts}/https://covidnow.moh.gov.my/`;

    try {
      const res = await fetch(`https://archive.org/wayback/available?url=covidnow.moh.gov.my&timestamp=${ts}`);
      console.log(`Fetching Wayback Machine data for timestamp: ${ts}`);
      const data = await res.json();
      if (data?.archived_snapshots?.closest?.url) {
        archiveUrl = data.archived_snapshots.closest.url;
      }
    } catch (e) {
      console.warn(`Wayback lookup failed for PR #${pr.number}, using timestamp fallback.`);
    }

    records.push({
      prNumber: pr.number,
      title: pr.title,
      description: pr.body,
      mergedAt: pr.merged_at,
      archiveUrl,
    });
  }

  fs.writeFileSync("src/data/releases.json", JSON.stringify(records, null, 2));
}

buildArchive();