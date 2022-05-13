import { useLoaderData } from "remix";
import { Link } from "react-router-dom";

export function loader() {
  return {
    title: "Astronot CSS 👩‍🚀",
    menu: "Doc",
    link: "https://astronot.axcora.com"
  };
}

export default function nav() {
  let nav = useLoaderData();

  return (
    <nav className="nav">
      <Link className="link" to="/">
        {nav.title}
      </Link>{" "}
      .
      <a className="link" href="{nav.link}">
        {nav.menu}
      </a>
    </nav>
  );
}
