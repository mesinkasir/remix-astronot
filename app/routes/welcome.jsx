import { useLoaderData } from "remix";

export function meta() {
  return {
    title: "Astrontot css new css for build unique website",
    description: "Build modern website with remix and astronot css free download remix web template themes starter"
  };
}

export function loader() {
  return {
    hometitle: "Welcome to Astronot CSS 👩‍🚀",
    homedescription:
      "👋 This is a starter project built with astonot css and remix",
    homecontent:
      "With astronot css now you can build and develope modern website with easy and fast, including unique design with astronot css,  get started now and learn how astronot css work.",
    homebutton: "Visit Astronot →",
    homelink: "https://astronot.axcora.com",
    homecover: "https://astronot.axcora.com/img/ASTRONOTCSS.jpg",
    fiturtitle: "Astronot Doc",
    fiturintro: "No need wory ,you can learn astronot css work with doc page.",
    fiturcontent:
      "Learn how astronot css make your website fast and unique , just learn astronot documentation page and copy paste code to your website project.",
    fiturbutton: "Documentation →",
    fiturlink: "https://astronot.axcora.com/doc.html",
    fiturcover: "https://astronot.axcora.com/img/DOC.jpg",
    fitur1title: "Play with layout",
    fitur1intro:
      "hey.. very easy to build website template now with astronot css",
    fitur1content:
      "Astronot css help you to build and design website easy and fast, just read documentation and develope your website with favorit technology.",
    fitur1button: "Learn Design →",
    fitur1link: "https://astronot.axcora.com/layout.html",
    fitur1cover: "https://astronot.axcora.com/img/LAYOUT.jpg",
    fitur2title: "Astronot emoji",
    fitur2intro: "Do you know with use astronot css you can play with emoji.",
    fitur2content:
      "This is cool... so you can change your website with unique design and you can use emoji for your website blog .",
    fitur2button: "Visit Emoji →",
    fitur2link: "https://astronot.axcora.com/emoji.html",
    fitur2cover: "https://astronot.axcora.com/img/emoji.jpg"
  };
}

export default function Welcome() {
  let data = useLoaderData();

  return (
    <div>
      <div className="cardes">
        <div className="carde">
          <img src={data.homecover} alt={data.hometitle} />
          <div class="card-content">
            <h1>{data.hometitle}</h1>
            <h3>{data.homedescription}</h3>
            <p>{data.homecontent}</p>
            <a href={data.homelink}>
              <button>{data.homebutton}</button>
            </a>
          </div>
        </div>
      </div>
      <div className="cards">
        <div className="card">
          <img src={data.fiturcover} alt={data.fiturtitle} />
          <div class="card-content">
            <h1>{data.fiturtitle}</h1>
            <h3>{data.fiturintro}</h3>
            <p>{data.fiturcontent}</p>
            <a href={data.fiturlink}>
              <button>{data.fiturbutton}</button>
            </a>
          </div>
        </div>

        <div className="card">
          <img src={data.fitur1cover} alt={data.fitur1title} />
          <div class="card-content">
            <h1>{data.fitur1title}</h1>
            <h3>{data.fitur1intro}</h3>
            <p>{data.fitur1content}</p>
            <a href={data.fitur1link}>
              <button>{data.fitur1button}</button>
            </a>
          </div>
        </div>
        <div className="card">
          <img src={data.fitur2cover} alt={data.fitur2title} />
          <div class="card-content">
            <h1>{data.fitur2title}</h1>
            <h3>{data.fitur2intro}</h3>
            <p>{data.fitur2content}</p>
            <a href={data.fitur2link}>
              <button>{data.fitur2button}</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
