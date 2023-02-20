import React from "react";
import styles from "@/styles/Home.module.css";
import Image from "next/image";
import Head from "next/head";

const blog = () => {
  return (
    <>
      <Head>
        <title>Nill Dev | اخبار و مقالات</title>
        <meta name="description" content="نیل با افتخار تقدیم میکند" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <section className={`${styles.bgBlack} pt-5 pb-5`}>
          <div className="container mt-5">
            <div className="row">
              <div>
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

                <span className={`${styles.eslipse} m-3 text-white`}>بلاگ</span>
              </div>
              <div className={`${styles.headContent} text-white pb-5`}>
                اخبار و مقالات
              </div>

              <p className={styles.date_blog}>December 18, 2022</p>
              <h6 className={styles.head_blog}>
                موتور رندرینگ جدید در انتظار افترافکت
              </h6>
            </div>

            <div className="row pt-2">
              <Image
                src="/img/blog/image 12.png"
                layout='fill'
                alt="dd"
                className="custom-img"
              />
            </div>

            <div className="row pt-4">
              <p className={styles.bodyDesign}>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
                استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است.
              </p>
            </div>
            <hr id="blog_h_line" />

            <div className="row">
              <div className="d-flex flex-row align-items-center">
                <Image
                  src="/img/blog/Rectangle 46.png"
                  alt=""
                  width={353}
                  height={185}
                />
                <div className="d-flex flex-column pe-4">
                  <div>
                    <span className={styles.blogDateTime}>
                      December 04, 2022
                    </span>
                  </div>
                  <div>
                    <h5 className={styles.blogHeadTitle}>
                      قابلیت جدیدی که در انتظار توسعه دهندگان وب است!
                    </h5>
                  </div>
                  <div>
                    <p className={styles.blogBodyTxt}>
                      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ،
                      و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه
                      روزنامه و مجله در ستون و سطرآنچنان که لازم است.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <hr id="blog_h_line" />

            <div className="row">
              <div className="d-flex flex-row align-items-center">
                <Image
                  src="/img/blog/Rectangle 46.png"
                  alt=""
                  width={353}
                  height={185}
                />
                <div className="d-flex flex-column pe-4">
                  <div>
                    <span className={styles.blogDateTime}>
                      December 04, 2022
                    </span>
                  </div>
                  <div>
                    <h5 className={styles.blogHeadTitle}>
                      قابلیت جدیدی که در انتظار توسعه دهندگان وب است!
                    </h5>
                  </div>
                  <div>
                    <p className={styles.blogBodyTxt}>
                      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ،
                      و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه
                      روزنامه و مجله در ستون و سطرآنچنان که لازم است.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <hr id="blog_h_line" />

            <div className="row">
              <div className="d-flex flex-row align-items-center">
                <Image
                  src="/img/blog/Rectangle 46.png"
                  alt=""
                  width={353}
                  height={185}
                />
                <div className="d-flex flex-column pe-4">
                  <div>
                    <span className={styles.blogDateTime}>
                      December 04, 2022
                    </span>
                  </div>
                  <div>
                    <h5 className={styles.blogHeadTitle}>
                      قابلیت جدیدی که در انتظار توسعه دهندگان وب است!
                    </h5>
                  </div>
                  <div>
                    <p className={styles.blogBodyTxt}>
                      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ،
                      و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه
                      روزنامه و مجله در ستون و سطرآنچنان که لازم است.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <hr id="blog_h_line" />

            <div className="row">
              <div className="d-flex flex-row align-items-center">
                <Image
                  src="/img/blog/Rectangle 46.png"
                  alt=""
                  width={353}
                  height={185}
                />
                <div className="d-flex flex-column pe-4">
                  <div>
                    <span className={styles.blogDateTime}>
                      December 04, 2022
                    </span>
                  </div>
                  <div>
                    <h5 className={styles.blogHeadTitle}>
                      قابلیت جدیدی که در انتظار توسعه دهندگان وب است!
                    </h5>
                  </div>
                  <div>
                    <p className={styles.blogBodyTxt}>
                      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ،
                      و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه
                      روزنامه و مجله در ستون و سطرآنچنان که لازم است.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <hr id="blog_h_line" />

            <div className="row">
              <div className="d-flex flex-row align-items-center">
                <Image
                  src="/img/blog/Rectangle 46.png"
                  alt=""
                  width={353}
                  height={185}
                />
                <div className="d-flex flex-column pe-4">
                  <div>
                    <span className={styles.blogDateTime}>
                      December 04, 2022
                    </span>
                  </div>
                  <div>
                    <h5 className={styles.blogHeadTitle}>
                      قابلیت جدیدی که در انتظار توسعه دهندگان وب است!
                    </h5>
                  </div>
                  <div>
                    <p className={styles.blogBodyTxt}>
                      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ،
                      و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه
                      روزنامه و مجله در ستون و سطرآنچنان که لازم است.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <hr id="blog_h_line" className="mb-5" />
          </div>
        </section>
      </main>
    </>
  );
};

export default blog;
