import Link from "next/link";
import { useState } from "react";

export default function RepoCard(props) {
    function getMedal(rank_position) {
        switch (rank_position) {
            case 1:
                return "🥇";
            case 2:
                return "🥈";
            case 3:
                return "🥉";
            default:
                return "";
        }
    }

    return (
        <article className="p-2 container flex items-center mx-auto border-2 border-gray-800 rounded-md max-w-1xl">
            <div className="flex items-center gap-2">
                <span className="font-medium">{props.rank_position}°</span>
                <div className="relative">
                    <img
                        className="w-14 rounded-full"
                        src={props.avatar_url}
                        alt=""
                    />
                    <span className="absolute top-9 inline-block ">
                        {getMedal(props.rank_position)}
                    </span>
                </div>
            </div>

            <div className="ml-3 flex flex-1 items-center justify-between">
                <Link href={props.repo_url}>
                    <a target={"_blank"}>
                        <h3 className="font-bold text-md break-all ">
                            {props.repo_name}
                        </h3>
                    </a>
                </Link>

                <div className="text-sm flex">
                    <span className="flex">
                        <svg
                            aria-label="star"
                            role="img"
                            height="16"
                            viewBox="0 0 16 16"
                            version="1.1"
                            width="16"
                            data-view-component="true"
                            className=""
                        >
                            <path
                                fillRule="evenodd"
                                d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"
                            ></path>
                        </svg>
                        {props.stars}
                    </span>
                    <span className="flex ml-2">
                        <svg
                            aria-label="fork"
                            role="img"
                            height="16"
                            viewBox="0 0 16 16"
                            version="1.1"
                            width="16"
                            data-view-component="true"
                            className=""
                        >
                            <path
                                fillRule="evenodd"
                                d="M5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.122a2.25 2.25 0 10-1.5 0v.878A2.25 2.25 0 005.75 8.5h1.5v2.128a2.251 2.251 0 101.5 0V8.5h1.5a2.25 2.25 0 002.25-2.25v-.878a2.25 2.25 0 10-1.5 0v.878a.75.75 0 01-.75.75h-4.5A.75.75 0 015 6.25v-.878zm3.75 7.378a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm3-8.75a.75.75 0 100-1.5.75.75 0 000 1.5z"
                            ></path>
                        </svg>
                        {props.forks}
                    </span>
                </div>
            </div>
        </article>
    );
}
