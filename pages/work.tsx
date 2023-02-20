import Button from "@/components/Button";
import GalleryFilter from "@/components/GalleryFilter";
import styles from "@/styles/Home.module.css";
import Head from "next/head";

const work = () => {
  return (
    <>
      <Head>
        <title>Nill Dev | پروژه های نیل</title>
        <meta name="description" content="نیل با افتخار تقدیم میکند" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div>
          <section className={styles.bgBlack}>
            <div className="pt-5 pb-5">
              <div className="container m-auto">
                <div className="pt-5">
                  <svg
                    width="56"
                    height="8"
                    viewBox="0 0 56 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="52" cy="4" r="4" fill="#fff"></circle>
                    <line
                      x1="49.5"
                      y1="4.5"
                      x2="0.5"
                      y2="4.5"
                      stroke="#fff"
                      strokeLinecap="round"
                    ></line>
                  </svg>

                  <span className={`${styles.eslipse} m-3 text-white`}>
                    خدمات ما
                  </span>
                </div>
                <div className={`${styles.headContent} text-white pb-5`}>
                  خدمات جدید طراحی گرافیک
                </div>

                <GalleryFilter />
              </div>
            </div>
          </section>
          <section className="pt-5 mb-5">
            <div
              className={`${styles.bgYellow} pt-5 pb-5 d-flex flex-column justify-content-center align-content-center flex-wrap align-items-center`}
            >
              <h3 className={styles.newProject}>پروژه جدید داری؟</h3>
              <div className="pt-3">
                <Button btnType="simple" btntxt="درخواست پروژه جدید" />
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
};

export default work;
