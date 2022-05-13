import {
  Meta,
  Link,
  Links,
  Scripts,
  useLoaderData,
  LiveReload,
  useCatch
} from "remix";
import { Outlet } from "react-router-dom";
import Astronot from "../node_modules/astronot/css/astronot.min.css";

export function links() {
  return [{ rel: "stylesheet", href: Astronot }];
}

export function loader() {
  return { date: new Date() };
}

function Document({ children, title }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.png" type="image/png" />
        {title ? <title>{title}</title> : null}
        <Meta />
        <Links />
      </head>
      <body>
	    <nav className="nav">
      <Link className="link" to="/">
      Astronot CSS 👩‍🚀
      </Link>{" "}
      .
      <a className="link" href="https://astronot.axcora.com">
      Doc
      </a>
    </nav>
        {children}
        <Scripts />
        {process.env.NODE_ENV === "development" && <LiveReload />}
      </body>
    </html>
  );
}

export default function App() {
  let data = useLoaderData();

  return (
    <Document>
      <Outlet />
      <p style={{ textAlign: "center", padding: 20 }}>
        A starter <a href="https://astronot.axcora.com">astronot css</a> with <a href="https://remix.run/">remix</a>
      </p>
    </Document>
  );
}

export function CatchBoundary() {
  let caught = useCatch();

  switch (caught.status) {
    case 401:
    case 404:
      return (
        <Document title={`${caught.status} ${caught.statusText}`}>
          <h1>
            {caught.status} {caught.statusText}
          </h1>
        </Document>
      );

    default:
      throw new Error(
        `Unexpected caught response with status: ${caught.status}`
      );
  }
}

export function ErrorBoundary({ error }) {
  console.error(error);

  return (
    <Document title="Uh-oh!">
      <h1>App Error</h1>
      <pre>{error.message}</pre>
      <p>
        Replace this UI with what you want users to see when your app throws
        uncaught errors.
      </p>
    </Document>
  );
}
