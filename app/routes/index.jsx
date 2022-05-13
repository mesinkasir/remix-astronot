import { useLoaderData } from "remix";
import { Link } from "react-router-dom";

import stylesUrl from "../styles/index.css";

export function meta() {
  return {
    title:"Remix Starter Astronot CSS",
    description: "A starter project remix website template with astronot css"
  };
}

export function links() {
  return [{ rel: "stylesheet", href: stylesUrl }];
}

export function loader() {
  return {
    title: "Remix Starter With Astronot CSS 👩‍🚀",
    description:
      "Hi... 👋 and welcome, i'm a starter astronot css built with remix.",
    intro:
      "this time built modern website using astronot css and remix framework 😎",
    content:
      "So if you need to build and develope modern website with unique design so you can use astronot css for help you to design web with unique concept 🤖. free download and open source code full present by axcora technology on https://website.axcora.com.",
    button: "Get Started →",
    link: "welcome",
    cover:
      "https://freepikpsd.com/file/2019/10/astronaut-vector-png-2-Images-PNG-Transparent.png"
  };
}

export default function Index() {
  let data = useLoaderData();

  return (
    <div style={{ textAlign: "center", padding: 20 }}>
      <h1>{data.title}</h1>
      <img src={data.cover} alt={data.title} />
      <h2>{data.description}</h2>
      <h3>{data.intro}</h3>
      <p>{data.content}</p>
      <Link to={data.link}>
        <button>{data.button}</button>
      </Link>
    </div>
  );
}
