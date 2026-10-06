export default function Home() {
  return (
    <main>
      <header className="hero">
        <h1>Michael Jakub</h1>
        <p>a freshman at UH Manoa studying finance.</p>
      </header>

      <section>
        <h2>About</h2>
        <p>
          I&apos;m a freshman at UH Manoa studying finance. I&apos;m interested
          in how money, markets and businesses work, and I&apos;m using my first
          year to build a strong foundation in the basics.
        </p>
      </section>

      <section>
        <h2>This semester</h2>
        <ul>
          <li>Taking an intro economics course</li>
          <li>Sticking to a monthly personal budget</li>
          <li>Checking out a student finance club on campus</li>
        </ul>
      </section>

      <footer>© Michael Jakub {new Date().getFullYear()}</footer>
    </main>
  );
}
