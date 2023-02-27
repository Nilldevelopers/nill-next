import React from "react";
import Image from "next/image";
import Button from "@/components/Button";
import styles from "@/styles/Home.module.css";
import Head from "next/head";
const teammate = () => {
  return (
    <>
      <Head>
        <title>Nill Dev | اعضای گروه نیل</title>
        <meta name="description" content="نیل با افتخار تقدیم میکند" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <section className={`${styles.bgBlack} pt-5`}>
          <div className="container pt-5 ">
            <div className="row">
              <div className="col-12 col-md-5">
                <div className="position-relative">
                  <hr className="position-absolute" id="teammate_line_0" />

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

                    <span className={`${styles.eslipse} m-3 text-white`}>
                      گرافیست و طراح UI/UX
                    </span>
                  </div>
                  <div className={`${styles.headContent} text-white pb-5`}>
                    پیمان کلانی
                  </div>

                  <section className="pb-5 position-relative">
                    <hr className="position-absolute" id="teammate_line_1" />
                    <h2 className={`${styles.teammateHead} mb-4`}>
                      <span className="me-3">درباره من</span>
                    </h2>
                    <p className={styles.teammateP}>
                      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
                      و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه
                      روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای
                      شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف
                      بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه
                      درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می
                      طلبد.
                    </p>
                  </section>

                  <section className="pt-5 position-relative">
                    <hr className="position-absolute" id="teammate_line_2" />
                    <h2 className={`${styles.teammateHead} mb-4`}>
                      <span className="me-3">تجربه های کاری</span>
                    </h2>

                    <h5 className={`${styles.teammateBlueHead}`}>
                      طراح گرافیک
                    </h5>
                    <h6 className={`${styles.teammateMiddleHead}`}>
                      شرکت هنر پنجم | 2020 - 2021
                    </h6>
                    <p className={styles.teammateP}>
                      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
                      و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه
                      روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای
                      شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف
                      بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه
                      درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می
                      طلبد.
                    </p>
                  </section>
                  <section className="pt-5">
                    <h5 className={`${styles.teammateBlueHead}`}>طراح وب</h5>
                    <h6 className={`${styles.teammateMiddleHead}`}>
                      موسسه گاج | 2021 - 2019
                    </h6>
                    <p className={styles.teammateP}>
                      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
                      و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه
                      روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای
                      شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف
                      بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه
                      درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می
                      طلبد.
                    </p>
                  </section>

                  <section className="pt-5 pb-5">
                    <h5 className={`${styles.teammateBlueHead}`}>
                      طراح UI / UX
                    </h5>
                    <h6 className={`${styles.teammateMiddleHead}`}>
                      شرکت نیل | 2022 - 2021
                    </h6>
                    <p className={styles.teammateP}>
                      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
                      و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه
                      روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای
                      شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف
                      بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه
                      درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می
                      طلبد.
                    </p>
                    <ul>
                      <li>
                        <p className={styles.teammateP}>
                          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
                          چاپ و با استفاده از طراحان گرافیک است.
                        </p>
                      </li>
                      <li>
                        <p className={styles.teammateP}>
                          لورم ایپسوم از صنعت چاپ و با استفاده از طراحان گرافیک
                          است.
                        </p>
                      </li>
                      <li>
                        <p className={styles.teammateP}>
                          لورم ایپسوم متن ساختگی با تولید سادگی
                        </p>
                      </li>
                    </ul>
                  </section>

                  <section className="pt-5 pb-5 position-relative">
                    <hr className="position-absolute" id="teammate_line_2" />
                    <Button btnType="simple" btntxt="دانلود رزومه" />
                  </section>
                </div>
              </div>
              <div className="col-12 col-md-1"></div>
              <div className={`col-12 col-md-5 ${styles.bgGrey}`}>
               <section>
               <Image
                  src="/static/img/profiles/profile_2.png"
                  alt="favorite"
                  width={528}
                  height={516}
                  id="profile_id"
                />
               </section>
                <section className="px-5 ps-5">
                  <div>
                    <h1 className={`${styles.teammate_head} pt-5 pb-5`}>
                      CONTACT
                    </h1>
                    <div
                      className="d-flex flex-row align-items-center ms-4 pt-3"
                      dir="ltr"
                    >
                      <svg
                        width="28"
                        height="28"
                        viewBox="0 0 28 28"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5.63111 12.1178C7.87111 16.52 11.48 20.1133 15.8822 22.3689L19.3044 18.9467C19.7244 18.5267 20.3467 18.3867 20.8911 18.5733C22.6333 19.1489 24.5156 19.46 26.4444 19.46C27.3 19.46 28 20.16 28 21.0156V26.4444C28 27.3 27.3 28 26.4444 28C11.8378 28 0 16.1622 0 1.55556C0 0.7 0.7 0 1.55556 0H7C7.85556 0 8.55556 0.7 8.55556 1.55556C8.55556 3.5 8.86667 5.36667 9.44222 7.10889C9.61333 7.65333 9.48889 8.26 9.05333 8.69556L5.63111 12.1178Z"
                          fill="white"
                        />
                      </svg>
                      <span className={`${styles.teammate_body}`}>
                        +98 933 389 3879
                      </span>
                    </div>
                    <div
                      className="d-flex flex-row align-items-center ms-4 pt-3"
                      dir="ltr"
                    >
                      <svg
                        width="20"
                        height="18"
                        viewBox="0 0 28 23"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M25.2 0H2.8C1.26 0 0.014 1.26 0.014 2.8L0 19.6C0 21.14 1.26 22.4 2.8 22.4H25.2C26.74 22.4 28 21.14 28 19.6V2.8C28 1.26 26.74 0 25.2 0ZM25.2 5.6L14 12.6L2.8 5.6V2.8L14 9.8L25.2 2.8V5.6Z"
                          fill="white"
                        />
                      </svg>
                      <span className={`${styles.teammate_body}`}>
                        peymandesign1379@gmail.com
                      </span>
                    </div>
                    <div
                      className="d-flex flex-row align-items-center ms-4 pt-3"
                      dir="ltr"
                    >
                      <svg
                        width="28"
                        height="40"
                        viewBox="0 0 28 40"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M14 0C6.26 0 0 6.26 0 14C0 17.48 1 20.74 2.82 23.68C4.72 26.76 7.22 29.4 9.14 32.48C10.08 33.98 10.76 35.38 11.48 37C12 38.1 12.42 40 14 40C15.58 40 16 38.1 16.5 37C17.24 35.38 17.9 33.98 18.84 32.48C20.76 29.42 23.26 26.78 25.16 23.68C27 20.74 28 17.48 28 14C28 6.26 21.74 0 14 0ZM14 19.5C11.24 19.5 9 17.26 9 14.5C9 11.74 11.24 9.5 14 9.5C16.76 9.5 19 11.74 19 14.5C19 17.26 16.76 19.5 14 19.5Z"
                          fill="white"
                        />
                      </svg>
                      <span className={`${styles.teammate_body}`}>
                        Semnan province
                      </span>
                    </div>
                    <div
                      className="d-flex flex-row align-items-center ms-4 pt-3 pb-5"
                      dir="ltr"
                    >
                      <svg
                        width="28"
                        align-items-centerght="28"
                        viewBox="0 0 28 28"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M3.11111 0H24.8889C26.6 0 28 1.4 28 3.11111V24.8889C28 26.6 26.6 28 24.8889 28H3.11111C1.4 28 0 26.6 0 24.8889V3.11111C0 1.4 1.4 0 3.11111 0ZM9.824 5.488H6.08V8.296H9.824V5.488ZM9.752 9.616H6.128V22H9.752V9.616ZM21.0583 10.096C20.2743 9.584 19.3943 9.328 18.4183 9.328C17.6982 9.328 17.0422 9.488 16.4503 9.808C15.8743 10.112 15.3783 10.544 14.9623 11.104V9.616H11.9382V22H15.5863V15.088C15.5863 14.496 15.8022 13.984 16.2343 13.552C16.6663 13.12 17.1702 12.904 17.7463 12.904C18.3703 12.904 18.8903 13.12 19.3063 13.552C19.7383 13.984 19.9543 14.496 19.9543 15.088V22H23.6023V14.992C23.6023 13.968 23.3783 13.024 22.9303 12.16C22.4823 11.296 21.8582 10.608 21.0583 10.096Z"
                          fill="white"
                        />
                      </svg>

                      <span className={`${styles.teammate_body}`}>
                        Peyman Kalani
                      </span>
                    </div>
                    <hr id="about_form_line" />
                  </div>
                  <div>
                    <h1 className={`${styles.teammate_head} pt-5 pb-5`}>
                      EDUCATION
                    </h1>
                    <div className="me-4">
                      <h6 className={styles.education_head}>مهندسی کامپیوتر</h6>
                      <p className={styles.education_body}>دانشگاه سمنان</p>
                      <p className={styles.education_body}>2019 - 2023</p>
                    </div>

                    <div className="me-4 mt-5 mb-5">
                      <h6 className={styles.education_head}>طراح UI/UX</h6>
                      <p className={styles.education_body}>شرکت Google</p>
                      <p className={styles.education_body}>2022 - 2023</p>
                    </div>
                    <hr id="about_form_line" />
                  </div>
                  <div>
                    <h1 className={`${styles.teammate_head} pt-5 pb-5`}>
                      SKILLS
                    </h1>
                    <div className="container pb-5">
                      <div className="row" dir="ltr">
                        <div className="col-12 col-md-6">
                          <ul className={styles.skill}>
                            <li>HTML5</li>
                            <li>CSS</li>
                            <li>JavaScript</li>
                            <li>Bootstrap</li>
                            <li>JQuery</li>
                            <li>Photoshop</li>
                            <li>Illustrator</li>
                            <li>Indesign</li>
                            <li>After Effect</li>
                          </ul>
                        </div>
                        <div className="col-12 col-md-6">
                          <ul className={styles.skill}>
                            <li>Premier Pro</li>
                            <li>Adobe xd</li>
                            <li>Figma</li>
                            <li>InVision Studio</li>
                            <li>Blender</li>
                            <li>English (language)</li>
                            <li>French (language)</li>
                            <li>Team building</li>
                            <li>Problem Solving</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>

            <div className="row pb-5">
              <section className="pt-5">
                <div className={`${styles.headContent} text-white pb-5`}>
                  علاقه مندی ها
                </div>

                <div className="row">
                  <div className="col-12 col-md-4">
                    <Image
                      src="/static/img/favorite_1.png"
                      alt="favorite"
                      layout="fill"
                      className="custom-img"
                    />
                  </div>
                  <div className="col-12 col-md-8">
                    <Image
                      src="/static/img/favorite_2.png"
                      alt="favorite"
                      layout="fill"
                      className="custom-img"
                    />
                  </div>
                  <div className="col-12 col-md-8 pt-4">
                    <Image
                      src="/static/img/favorite_4.png"
                      alt="favorite"
                      layout="fill"
                      className="custom-img"
                    />
                  </div>
                  <div className="col-12 col-md-4 pt-4">
                    <Image
                      src="/static/img/favorite_3.png"
                      alt="favorite"
                      layout="fill"
                      className="custom-img"
                    />
                  </div>
                </div>
              </section>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default teammate;
