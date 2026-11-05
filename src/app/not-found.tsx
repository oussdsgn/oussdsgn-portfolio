import Link from "next/link";
import { Arrow } from "@/components/Logo";
import { pageText } from "@/data/site";

export default function NotFound() {
  return (
    <section className="not-found dark" data-header-dark>
      <div className="container">
        <h1 className="not-found__code">404</h1>
        <p className="not-found__text">{pageText.notFound}</p>
        <Link className="btn btn--light" href="/">Back home <Arrow /></Link>
      </div>
    </section>
  );
}
