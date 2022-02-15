import Head from "next/head";

import BreadCrumb from "../components/breadcrumb";
import NavBar from "../components/navbar";
import RepoCard from "../components/repoCard";

export default function Home(props) {
    const repos = props.repos;

    return (
        <div className="">
            <Head>
                <title>Git Stars</title>
                <meta name="description" content="" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="font-popin">
                <NavBar />
                <BreadCrumb count={repos.length} page={"Repos"} />
                <main className="px-2 container mx-auto  grid content-center gap-2 md:grid-cols-2 sm:grid-cols-1">
                    {repos.map((repo, i) => (
                        <RepoCard
                            key={i}
                            rank_position={i + 1}
                            avatar_url={repo.avatar}
                            repo_name={repo.repo_name}
                            stars={repo.stars}
                            forks={repo.forks}
                            repo_url={repo.repo_url}
                        />
                    ))}
                </main>
            </div>
        </div>
    );
}

export async function getStaticProps() {
    const api_url = process.env.API_URL;

    const response = await fetch(api_url);
    const data = await response.json();

    return {
        props: {
            repos: data,
        },
        revalidate: 60 * 5,
    };
}
