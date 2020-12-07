import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Two Infographics Summative</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Two Infographics{" "}
          <a
            href="https://github.com/filippo-fonseca/infographics"
            target="_blank"
          >
            Summative
          </a>
        </h1>

        <p className={styles.description}>
          Filippo Fonseca - <code className={styles.code}>IAS 9</code>
        </p>

        <p>
          Want to check out <strong>the code?</strong> Check out the project's
          GitHub{" "}
          <a
            className={styles.personalLink}
            href="https://github.com/filippo-fonseca/infographics"
            target="_blank"
          >
            repository.{" "}
          </a>
          Want to see <strong>what changed</strong> in the resubmission? Click{" "}
          <a
            className={styles.personalLink}
            href="https://i.ibb.co/VHBgQkf/Changes.png"
            target="_blank"
          >
            here.
          </a>
        </p>
        <div style={{ height: "50px" }} />
        <div style={{ display: "flex" }}>
          <kbd>
            <img width="400" src="https://i.ibb.co/hZWFLQG/1.png" />
          </kbd>

          <div style={{ width: "50px" }} />
          <kbd>
            <img width="400" src="https://i.ibb.co/JRNYJFW/2.png" />
          </kbd>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://github.com/filippo-fonseca"
          target="_blank"
          rel="noopener noreferrer"
        >
          Created and maintained with ❤️ by Filippo Fonseca.
          <img
            src="https://www.flaticon.com/svg/static/icons/svg/2111/2111425.svg"
            alt="GitHub Logo"
            className={styles.logo}
          />
        </a>
      </footer>
    </div>
  );
}
