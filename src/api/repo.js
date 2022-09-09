import { Octokit } from "@octokit/rest"

function expect(what) { }

export async function Repo() {
    const octokit = new Octokit({
      auth: process.env.OCTOKIT_PERSONAL_ACCESS_TOKEN,
    })
    const { data } = await octokit.repos.getContent({
        owner: "donaldboulton",
        repo: "publiuslogic.com-netlify",
    });

    if (!Array.isArray(data)) {
        return;
    }
    for (const item of data) {
        expect(item.name);
    }
}