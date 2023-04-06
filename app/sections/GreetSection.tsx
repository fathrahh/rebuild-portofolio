import Link from "next/link";
import styles from "./section.module.css";
import Image from "next/image";

export default function GreetSection() {
  return (
    <div className={styles.greetWrapper}>
      <div className={styles.left}>
        <div className={styles.leftContentWrapper}>
          <div>
            <div className={styles.upperGreet}>
              <h1>Hi! I Am</h1>
              <div className={styles.rolelist}>
                <div className={"pill"}>
                  <span>Frontend</span>
                </div>
              </div>
            </div>
            <h1>M. Fathurrahman</h1>
          </div>
          <p>
            Welcome to my web portfolio! As a final year student and a frontend
            developer, I am excited to showcase my skills and experience in this
            space.
          </p>
          <Link className="btn" data-button-variant="green" href={"#"}>
            My Journey 🚀
          </Link>
        </div>
      </div>
      <div className={styles.right}>
        <Image
          style={{
            objectFit: "contain",
          }}
          src="/greeting-illustration.png"
          width={324}
          height={324}
          alt="greting"
        />
      </div>
    </div>
  );
}
