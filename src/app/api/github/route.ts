import { NextResponse } from "next/server";

export async function GET() {
    const username = process.env.NEXT_PUBLIC_GITHUB_USERNAME || "octocat";
    const token = process.env.GITHUB_TOKEN;

    const headers: HeadersInit = {
        Accept: "application/vnd.github.v3+json",
        "User-Agent": "portfolio-app",
    };

    if (token) {
        headers.Authorization = `Bearer ${token}`;
    }

    try {
        const response = await fetch(
            `https://api.github.com/users/${username}/repos?sort=updated&per_page=3&type=public&type=contributor`,
            { headers, next: { revalidate: 3600 } }
        );

        if (!response.ok) {
            return NextResponse.json(
                { error: "Failed to fetch repositories" },
                { status: response.status }
            );
        }

        const repos = await response.json();

        const simplified = repos.map(
            (repo: {
                name: string;
                description: string | null;
                html_url: string;
                language: string | null;
                updated_at: string;
                stargazers_count: number;
            }) => ({
                name: repo.name,
                description: repo.description,
                url: repo.html_url,
                language: repo.language,
                updatedAt: repo.updated_at,
                stars: repo.stargazers_count,
            })
        );

        return NextResponse.json(simplified);
    } catch {
        return NextResponse.json(
            { error: "Failed to fetch repositories" },
            { status: 500 }
        );
    }
}
