import type { MetaFunction, LoaderFunction } from "remix";
import { useLoaderData, json, Link } from "remix";

type IndexData = {
  resources: Array<{ name: string; url: string }>;
  demos: Array<{ name: string; to: string }>;
};

// Loaders provide data to components and are only ever called on the server, so
// you can connect to a database or run any server side code you want right next
// to the component that renders it.
// https://remix.run/api/conventions#loader
export let loader: LoaderFunction = () => {
  let data: IndexData = {
    resources: [
      {
        name: "Remix Docs",
        url: "https://remix.run/docs",
      },
      {
        name: "React Router Docs",
        url: "https://reactrouter.com/docs",
      },
      {
        name: "Remix Discord",
        url: "https://discord.gg/VBePs6d",
      },
    ],
    demos: [
      {
        to: "demos/actions",
        name: "Actions",
      },
      {
        to: "demos/about",
        name: "Nested Routes, CSS loading/unloading",
      },
      {
        to: "demos/params",
        name: "URL Params and Error Boundaries",
      },
    ],
  };

  // https://remix.run/api/remix#json
  return json(data);
};

// https://remix.run/api/conventions#meta
export let meta: MetaFunction = () => {
  return {
    title: "Victoria Bruyere",
    description: "Personal website for Victoria Bruyere",
  };
};

// https://remix.run/guides/routing#index-routes
export default function Index() {
  let data = useLoaderData<IndexData>();

  return (
    <div className="remix__page">
      <main>
        <h1>Coming Soon: Bryton</h1>

        <ul className="card-list">
          <li>
            <h2>About</h2>

            <p>
              Bryton aims to create a unique online marketplace for gently used
              baby goods in the local community. We will collect donations of
              baby items and make them available for purchase through our online
              platform, providing a convenient and sustainable way for parents
              to access affordable baby essentials. What sets us apart is our
              commitment to giving back to the community by donating a portion
              of our profits to a foundation chosen by our customers.
            </p>
          </li>

          <li>
            <h2>Mission</h2>

            <p>
              Our mission is to make high-quality baby essentials accessible to
              all while fostering a sense of community and giving back. We
              strive to reduce waste by recycling gently used baby goods and
              offering them through an easy-to-use online platform, promoting
              sustainability and affordability. We are dedicated to supporting
              local families and making a positive impact by contributing to
              charitable foundations that address critical issues in our
              community.
            </p>
          </li>

          <li>
            <h2>Vision</h2>

            <p>
              We envision a future where every parent and caregiver in our local
              community can easily access affordable, quality baby items. Our
              platform will serve as a trusted hub for buying and selling
              second-hand baby goods, promoting sustainability and reducing the
              environmental footprint. Through our commitment to charitable
              giving, we aim to strengthen our community by supporting causes
              that matter most to our customers, creating a sense of purpose and
              connection among our users. In essence, we aim to be the go-to
              online marketplace for local parents, caregivers, and donors who
              want to make a difference in their community while finding great
              deals on essential baby items.
            </p>
          </li>
        </ul>
        <p>
          For more information contact me at{" "}
          <a href="mailto:victoriabruyere44@gmail.com">
            victoriabruyere44@gmail.com
          </a>{" "}
        </p>
      </main>
      {/* <aside>
        <h2>More content coming soon!</h2>
        <h2>Demos In This App</h2>
        <ul>
          {data.demos.map((demo) => (
            <li key={demo.to} className="remix__page__resource">
              <Link to={demo.to} prefetch="intent">
                {demo.name}
              </Link>
            </li>
          ))}
        </ul>
        <h2>Resources</h2>
        <ul>
          {data.resources.map((resource) => (
            <li key={resource.url} className="remix__page__resource">
              <a href={resource.url}>{resource.name}</a>
            </li>
          ))}
        </ul>
      </aside> */}
    </div>
  );
}
