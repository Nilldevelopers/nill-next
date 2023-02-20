import React from "react";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import ServicesInAbout from "@/components/ServicesInAbout";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import {  Pagination } from "swiper";
import ContactSlider from "@/components/ContactSlider";
import Button from "@/components/Button";
import Head from "next/head";

const about = () => {
  return (
    <>
      <Head>
        <title>Nill Dev | درباره ما</title>
        <meta name="description" content="نیل با افتخار تقدیم میکند" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="container">
          <section className={`${styles.bgBlack} pt-5 pb-5`}>
            <div className="row">
              <h3 className={`${styles.headAbout} text-white`}>
                شرکت طراحی Nill Developers
              </h3>
              <p className={`pt-3 ${styles.pAbout}`}>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
                استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
                نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
              </p>

              <div className="pt-5 d-flex justify-content-center">
                <div className="field">
                  <div className="mouse"></div>
                </div>
              </div>
            </div>
          </section>
        </div>

        <div className="position-relative">
          <div className="bg-team">
            <section className="p-5 text-on-image">
              <h3 className="txt-on-image-head">گستره فعالیت گروه ما</h3>
              <p className="txt-on-image-p">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
                استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
                نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
              </p>
            </section>
          </div>
        </div>
        <div className="container">
          <div className="row">
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

            <div className="col-12 col-md-4">
              <ServicesInAbout
                head="طراحی پوستر"
                body="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است."
              />
            </div>
            <div className="col-12 col-md-4">
              <ServicesInAbout
                head="طراحی لوگو"
                body="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است."
              />
            </div>
            <div className="col-12 col-md-4">
              <ServicesInAbout
                head="طراحی موشن گرافی"
                body="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است."
              />
            </div>
            <div className="col-12 col-md-4">
              <ServicesInAbout
                head="طراحی قالب پست"
                body="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است."
              />
            </div>
            <div className="col-12 col-md-4">
              <ServicesInAbout
                head="طراحی بنر سایت"
                body="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است."
              />
            </div>
            <div className="col-12 col-md-4">
              <ServicesInAbout
                head="طراحی سه بعدی"
                body="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است."
              />
            </div>
          </div>
          <div className="row pb-5">
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
                پروژه ها
              </span>
            </div>
            <div className={`${styles.headContent} text-white pb-5`}>
              نظرات کارفرمایان
            </div>
            <Swiper
              id="contact-slider-2"
              pagination={{
                dynamicBullets: true,
                clickable: true,
              }}
              slidesPerView={2}
              spaceBetween={30}
              modules={[Pagination]}
              className="mySwiper"
            >
              <SwiperSlide>
                <ContactSlider
                  theme="dark"
                  profileName="Andre Park"
                  profileSource="/img/icons/LineStar.svg"
                  sliderP="   لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و
                  با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و
                  مجله در ستون و سطرآنچنان که لازم است."
                />
              </SwiperSlide>
              <SwiperSlide>
                <ContactSlider
                  theme="dark"
                  profileName="Andre Park"
                  profileSource="/img/icons/LineStar.svg"
                  sliderP="   لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و
                  با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و
                  مجله در ستون و سطرآنچنان که لازم است."
                />
              </SwiperSlide>
              <SwiperSlide>
                <ContactSlider
                  theme="dark"
                  profileName="Andre Park"
                  profileSource="/img/icons/LineStar.svg"
                  sliderP="   لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و
                  با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و
                  مجله در ستون و سطرآنچنان که لازم است."
                />
              </SwiperSlide>
              <SwiperSlide>
                <ContactSlider
                  theme="dark"
                  profileName="Andre Park"
                  profileSource="/img/icons/LineStar.svg"
                  sliderP="   لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و
                  با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و
                  مجله در ستون و سطرآنچنان که لازم است."
                />
              </SwiperSlide>
            </Swiper>
          </div>
          <div className="row">
            <section className={`${styles.bgBlack} pt-5 pb-5`}>
              <div className="container">
                <div className={`${styles.headContent} text-white pb-5`}>
                  پروژه های بسته شده
                </div>
                <div className="row">
                  <div className="col-12 col-md-4">
                    <Image
                      src="/img/logo/Rectangle 22.png"
                      alt="co image"
                      width={350}
                      height={159}
                    />
                  </div>
                  <div className="col-12 col-md-4">
                    <Image
                      src="/img/logo/Rectangle 22.png"
                      alt="co image"
                      width={350}
                      height={159}
                    />
                  </div>
                  <div className="col-12 col-md-4">
                    <Image
                      src="/img/logo/Rectangle 22.png"
                      alt="co image"
                      width={350}
                      height={159}
                    />
                  </div>
                  <div className="col-12 col-md-4 pt-md-3">
                    <Image
                      src="/img/logo/Rectangle 22.png"
                      alt="co image"
                      width={350}
                      height={159}
                    />
                  </div>
                  <div className="col-12 col-md-4 pt-md-3">
                    <Image
                      src="/img/logo/Rectangle 22.png"
                      alt="co image"
                      width={350}
                      height={159}
                    />
                  </div>
                  <div className="col-12 col-md-4 pt-md-3">
                    <Image
                      src="/img/logo/Rectangle 22.png"
                      alt="co image"
                      width={350}
                      height={159}
                    />
                  </div>
                </div>
              </div>
            </section>
          </div>

          <div className="row pb-5">
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
                ارتباط با ما
              </span>
            </div>
            <div className={`${styles.headContent} text-white pb-5`}>
              ثبت نظر یا پروژه جدید
            </div>
            <div className="col-12 col-md-6">
              <div className={`${styles.bgGrey} p-3`}>
                <p className={styles.form_about_head}>ثبت نظر</p>

                <hr id="about_form_line" />
                <form>
                  <div className="form-group d-flex flex-row align-items-center mt-4">
                    <label htmlFor="exampleInputName1">
                      <span className="ps-3 label-border">نام</span>
                    </label>
                    <input
                      type="text"
                      className="form-control me-3"
                      id="exampleInputName1"
                      aria-describedby="emailHelp"
                      placeholder="پیمان کلانی"
                    />
                  </div>
                  <div className="form-group d-flex flex-row align-items-center mt-4">
                    <label htmlFor="exampleInputEmail1">
                      <span className="ps-3 label-border">ایمیل</span>
                    </label>
                    <input
                      type="email"
                      className="form-control me-3"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="test@gmail.com"
                    />
                  </div>
                  <div className="form-group mt-4">
                    <textarea
                      className="form-control"
                      id="exampleFormControlTextarea1"
                      rows={4}
                      placeholder="نظر خود را بنویسید"
                    ></textarea>
                  </div>

                  <div
                    className="d-flex flex-column align-items-center"
                    style={{
                      marginTop: "21px",
                    }}
                  >
                    <Button type="submit" btnType="simple" btntxt="ارسال" />
                  </div>
                </form>
              </div>
            </div>

            <div className="col-12 pt-3 pt-md-0 col-md-6">
              <div className={`${styles.bgGrey} p-3`}>
                <p className={styles.form_about_head}>درخواست انجام پروژه</p>

                <hr id="about_form_line" />

                <form>
                  <div className="form-group d-flex flex-row align-items-center mt-4">
                    <label htmlFor="exampleInputName2">
                      <span className="ps-3 label-border">نام</span>
                    </label>
                    <input
                      type="text"
                      className="form-control me-3"
                      id="exampleInputName2"
                      aria-describedby="emailHelp"
                      placeholder="پیمان کلانی"
                    />
                  </div>
                  <div className="form-group d-flex flex-row align-items-center mt-4">
                    <label htmlFor="exampleInputEmail2">
                      <span className="ps-3 label-border">ایمیل</span>
                    </label>
                    <input
                      type="email"
                      className="form-control me-3"
                      id="exampleInputEmail2"
                      aria-describedby="emailHelp"
                      placeholder="test@gmail.com"
                    />
                  </div>
                  <div className="form-group d-flex flex-row align-items-center mt-4">
                    <label htmlFor="exampleInputTel1">
                      <span className="ps-3 label-border">تلفن</span>
                    </label>
                    <input
                      type="tel"
                      className="form-control me-3"
                      id="exampleInputTel1"
                      aria-describedby="emailHelp"
                      placeholder="09203216120"
                    />
                  </div>
                  <div className="form-group d-flex flex-row align-items-center mt-4">
                    <label htmlFor="exampleInputEmail1">
                      <span className="ps-3 label-border">پروژه</span>
                    </label>
                    <select className="form-control me-3">
                      <option>UI/UX</option>
                      <option>Front-End</option>
                      <option>Back-End</option>
                    </select>
                  </div>

                  <div className="d-flex flex-column align-items-center mt-4">
                    <Button type="submit" btnType="render" btntxt="ارسال" />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default about;
