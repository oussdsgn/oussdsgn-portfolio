import Link from "next/link";
import { Arrow } from "@/components/Logo";

export default function NotFound() {
  return (
    <section className="not-found dark" data-header-dark>
      <div className="container">
        <h1 className="not-found__code">404</h1>
        <p className="not-found__text">This page doesn’t exist, but your next project could.</p>
        <Link className="btn btn--light" href="/">Back home <Arrow /></Link>
      </div>
    </section>
  );
}
