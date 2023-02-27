import Button from "@/components/Button";
import GalleryFilter from "@/components/GalleryFilter";
import styles from "@/styles/Home.module.css";
import Head from "next/head";
import Element from "@/components/Element";

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
                  <Element theme="dark"/>

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
