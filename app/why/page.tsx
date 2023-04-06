import cx from "classnames";
import styles from "./why.module.css";
import FakeIDE from "../components/FakeIDE";

export default function Why() {
  return (
    <main className={cx("container", styles.main)}>
      <h1>
        Why you need <br />
        <span>Frontend ?</span>
      </h1>
      <section className={styles.hero}>
        <FakeIDE>
          <div className="line">
            <span className="code syntax-keyword">import</span>
            <span className="code syntax-definition">*</span>
            <span className="code syntax-keyword">as</span>
            <span className="code syntax-code">React</span>
            <span className="code syntax-keyword">from</span>
            <span className="code syntax-string">{`"react"`}</span>
          </div>
          <div className="line sp">
            <span className="code syntax-keyword">const</span>
            <span className="code syntax-string">Component</span>
            <span className="code syntax-keyword">:</span>
            <span className="code syntax-definition">React.FC</span>
            <span className="code syntax-string">()</span>
            <span className="code syntax-keyword">{"=>"}</span>
            <span className="code syntax-string">{"{"}</span>
          </div>
          <div className="line" data-depth="5">
            <span className="code syntax-comment">
              {"//"} type your code below here
            </span>
          </div>
          <div className="line">
            <span className="code syntax-keyword">return</span>
            <span className="code syntax-keyword">(</span>
          </div>
          <div className="ml-4 lg:ml-8 ">
            <p className="text-code-red">
              {/* <Typed
                  strings={homeTyped}
                  typeSpeed={5}
                  onComplete={handleTypingComplete}
                /> */}
            </p>
          </div>
          <div className="line" data-depth="2">
            <span className="code syntax-keyword">{")"}</span>
          </div>
          <div className="line">
            <span className="code syntax-string">{"}"}</span>
          </div>
          {/* <div
            className={`absolute inset-0 ${
              modalShown ? "flex" : "hidden"
            } justify-center items-center`}
          >
            <div className="w-60 lg:w-80 bg-gray-500 rounded-md p-4">
              <h3 className="text-code-white">Yakin lo mau di save</h3>
              <div className="flex gap-3 mt-4">
                <div className="flex-1 text-center rounded bg-gray-400">
                  Yakin dong
                </div>
                <div className="flex-1 text-center rounded bg-gray-400">
                  Gak Dong
                </div>
              </div>
            </div>
          </div> */}
        </FakeIDE>
        <div className={styles.result}>
          <div className={styles["result__action-wrapper"]}>
            <button className="pill pill--primary">Before</button>
            <button className="pill">After</button>
          </div>
          <div className={styles.result__content}>
            <span className="reset">
              Halo Semuanya Perkenalkan Nama Saya Muhammad Fathurrahman
            </span>
          </div>
        </div>
      </section>
    </main>
  );
}
