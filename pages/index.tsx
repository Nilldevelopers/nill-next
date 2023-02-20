import Head from "next/head";
import Image from "next/image";
import BoxLight from "@/components/BoxLight";
import styles from '@/styles/Home.module.css'

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Navigation, Pagination } from "swiper";
import SliderItems from "@/components/SliderItems";
import ContactSlider from "@/components/ContactSlider";
import ProgressBar from "@/components/ProgressBar";
import Button from "@/components/Button";


export default function Home() {
  return (
    <>
      <Head>
        <title>Nill Dev | گروه توسعه نیل</title>
        <meta name="description" content="صفحه اصلی گروه توسعه نیل" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="pt-5 mt-5">
        <section className="head-slider">
          <h3 className={`${styles.headDesign} position-absolute`} dir="ltr">
            Nill develoeprs <span className={styles.cYellow}>presents!</span>
          </h3>

          <Image
            className="position-relative"
            src="/img/nasa-Q1p7bh3SHj8-unsplash.jpg"
            fill
           
            alt="earth image"
          />
        </section>

        <section className={`${styles.bgBlack} pt-5 pb-5`}>
          <div className="container">
            <div className="row align-items-center">
              <div className="col-12 col-md-6">
                <h3 className={styles.headDesign}>
                  شرکت طراحی Nill Developers
                </h3>
                <p className={styles.bodyDesign}>
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و
                  با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و
                  مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی
                  تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای
                  کاربردی می باشد.
                </p>
                <div className="pt-3">
                  <Button btnType="simple" btntxt="بیشتر" />
                </div>
              </div>
              <div className="col-md-1"></div>
              <div className="col-12 col-md-5">
                <Image
                  src="/img/nill-card.png"
                  alt="nill developers image"
                  width="500"
                  height="300"
                />
                
              </div>
            </div>
          </div>
        </section>
        <section className={`${styles.bgLight} pt-5 pb-5`}>
          <div className="container">
            <div>
              <svg
                width="56"
                height="8"
                viewBox="0 0 56 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="52" cy="4" r="4" fill="#000"></circle>
                <line
                  x1="49.5"
                  y1="4.5"
                  x2="0.5"
                  y2="4.5"
                  stroke="#000"
                  strokeLinecap="round"
                ></line>
              </svg>

              <span className={`${styles.eslipse} m-3`}>خدمات ما</span>
            </div>
            <div className={`${styles.headContent} pb-5`}>
              زمینه های کاری ما
            </div>
            <div className="row">
              <div className="col-12 col-md-4 pr-md-3">
                <BoxLight
                  icon_path="/img/icons/Dashboard.svg"
                  head="Web Design"
                  pragraph="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است."
                />
              </div>
              <div className="col-12 col-md-4 pr-md-3">
                <BoxLight
                  icon_path="/img/icons/Theme.svg"
                  head="Graphic & UI/UX Design"
                  pragraph="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است."
                />
              </div>
              <div className="col-12 col-md-4 pr-md-3">
                <BoxLight
                  icon_path="/img/icons/AR.svg"
                  head="3D Design & Modeling"
                  pragraph="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است."
                />
              </div>
            </div>
          </div>
        </section>

        <section className={`${styles.bgBlack} pt-5 pb-5`}>
          <div className="container">
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

                <span className={`${styles.eslipse} m-3 text-white`}>
                  خدمات ما
                </span>
              </div>
              <div className={`${styles.headContent} text-white pb-5`}>
                پروژه های اخیر
              </div>

              <div>
                <Swiper
                  pagination={{
                    dynamicBullets: true,
                    clickable: true,
                  }}
                  breakpoints={{
                    640: {
                      slidesPerView: 1,
                      spaceBetween: 20,
                    },
                    768: {
                      slidesPerView: 2,
                      spaceBetween: 40,
                    },
                    1024: {
                      slidesPerView: 3,
                      spaceBetween: 50,
                    },
                  }}
                  slidesPerView={1}
                  spaceBetween={30}
                  modules={[Pagination]}
                  className="mySwiper"
                >
                  <SwiperSlide>
                    <SliderItems
                      slidertxt="طراحی ست اداری شرکت hydout"
                      imageSource="/img/project/Project_3.png"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <SliderItems
                      slidertxt="طراحی Low Poly زومجی"
                      imageSource="/img/project/Project_2.png"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <SliderItems
                      slidertxt="طراحی UI/UX شرکت Rainbow"
                      imageSource="/img/project/Project_1.png"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <SliderItems
                      slidertxt="طراحی ست اداری شرکت hydout"
                      imageSource="/img/project/Project_3.png"
                    />
                  </SwiperSlide>

                  <SwiperSlide>
                    <SliderItems
                      slidertxt="طراحی ست اداری شرکت hydout"
                      imageSource="/img/project/Project_3.png"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <SliderItems
                      slidertxt="طراحی ست اداری شرکت hydout"
                      imageSource="/img/project/Project_3.png"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <SliderItems
                      slidertxt="طراحی ست اداری شرکت hydout"
                      imageSource="/img/project/Project_3.png"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <SliderItems
                      slidertxt="طراحی ست اداری شرکت hydout"
                      imageSource="/img/project/Project_3.png"
                    />
                  </SwiperSlide>

                  <SwiperSlide>
                    <SliderItems
                      slidertxt="طراحی ست اداری شرکت hydout"
                      imageSource="/img/project/Project_3.png"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <SliderItems
                      slidertxt="طراحی ست اداری شرکت hydout"
                      imageSource="/img/project/Project_3.png"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <SliderItems
                      slidertxt="طراحی ست اداری شرکت hydout"
                      imageSource="/img/project/Project_3.png"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <SliderItems
                      slidertxt="طراحی ست اداری شرکت hydout"
                      imageSource="/img/project/Project_3.png"
                    />
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
        </section>

        <section className={`${styles.bgLight} pt-5 pb-5`}>
          <div className="container">
            <div>
              <svg
                width="56"
                height="8"
                viewBox="0 0 56 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="52" cy="4" r="4" fill="#000"></circle>
                <line
                  x1="49.5"
                  y1="4.5"
                  x2="0.5"
                  y2="4.5"
                  stroke="#000"
                  strokeLinecap="round"
                ></line>
              </svg>

              <span className={`${styles.eslipse} m-3`}>خدمات ما</span>
            </div>
            <div className={`${styles.headContent} pb-3`}>
              زمینه های کاری ما
            </div>

            <Swiper
              id="contact-slider"
              pagination={{
                dynamicBullets: true,
                clickable: true,
              }}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 1,
                  spaceBetween: 0,
                },
                1024: {
                  slidesPerView: 2,
                  spaceBetween: 70,
                },
              }}
              slidesPerView={1}
              spaceBetween={50}
              modules={[Pagination]}
              className="mySwiper"
            >
              <SwiperSlide>
                <ContactSlider
                  theme="blue"
                  profileName="Andre Park"
                  profileSource="/img/icons/LineStar.svg"
                  sliderP="   لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و
                  با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و
                  مجله در ستون و سطرآنچنان که لازم است."
                />
              </SwiperSlide>
              <SwiperSlide>
                <ContactSlider
                  theme="blue"
                  profileName="Andre Park"
                  profileSource="/img/icons/LineStar.svg"
                  sliderP="   لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و
                  با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و
                  مجله در ستون و سطرآنچنان که لازم است."
                />
              </SwiperSlide>
              <SwiperSlide>
                <ContactSlider
                  theme="blue"
                  profileName="Andre Park"
                  profileSource="/img/icons/LineStar.svg"
                  sliderP="   لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و
                  با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و
                  مجله در ستون و سطرآنچنان که لازم است."
                />
              </SwiperSlide>
              <SwiperSlide>
                <ContactSlider
                  theme="blue"
                  profileName="Andre Park"
                  profileSource="/img/icons/LineStar.svg"
                  sliderP="   لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و
                  با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و
                  مجله در ستون و سطرآنچنان که لازم است."
                />
              </SwiperSlide>
            </Swiper>
          </div>
        </section>

        <section className={`${styles.bgBlack} pt-5 pb-5`}>
          <div className="container">
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

              <div>
                <Swiper
                  pagination={{
                    dynamicBullets: true,
                    clickable: true,
                  }}
                  breakpoints={{
                    640: {
                      slidesPerView: 1,
                      spaceBetween: 20,
                    },
                    768: {
                      slidesPerView: 2,
                      spaceBetween: 40,
                    },
                    1024: {
                      slidesPerView: 3,
                      spaceBetween: 50,
                    },
                  }}
                  slidesPerView={1}
                  spaceBetween={30}
                  modules={[Pagination]}
                  className="mySwiper"
                >
                  <SwiperSlide>
                    <SliderItems
                      slidertxt="طراحی ست اداری شرکت hydout"
                      imageSource="/img/project/Project_3.png"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <SliderItems
                      slidertxt="طراحی Low Poly زومجی"
                      imageSource="/img/project/Project_2.png"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <SliderItems
                      slidertxt="طراحی UI/UX شرکت Rainbow"
                      imageSource="/img/project/Project_1.png"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <SliderItems
                      slidertxt="طراحی ست اداری شرکت hydout"
                      imageSource="/img/project/Project_3.png"
                    />
                  </SwiperSlide>

                  <SwiperSlide>
                    <SliderItems
                      slidertxt="طراحی ست اداری شرکت hydout"
                      imageSource="/img/project/Project_3.png"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <SliderItems
                      slidertxt="طراحی ست اداری شرکت hydout"
                      imageSource="/img/project/Project_3.png"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <SliderItems
                      slidertxt="طراحی ست اداری شرکت hydout"
                      imageSource="/img/project/Project_3.png"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <SliderItems
                      slidertxt="طراحی ست اداری شرکت hydout"
                      imageSource="/img/project/Project_3.png"
                    />
                  </SwiperSlide>

                  <SwiperSlide>
                    <SliderItems
                      slidertxt="طراحی ست اداری شرکت hydout"
                      imageSource="/img/project/Project_3.png"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <SliderItems
                      slidertxt="طراحی ست اداری شرکت hydout"
                      imageSource="/img/project/Project_3.png"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <SliderItems
                      slidertxt="طراحی ست اداری شرکت hydout"
                      imageSource="/img/project/Project_3.png"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <SliderItems
                      slidertxt="طراحی ست اداری شرکت hydout"
                      imageSource="/img/project/Project_3.png"
                    />
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
        </section>

        <section className={`${styles.bgLight} pt-5 pb-5`}>
          <div className="container">
            <div className={`${styles.headContent} pb-5`}>
              پروژه های در حال انجام
            </div>
            <div className="row">
              <div className="col-12 col-md-4">
                {" "}
                <ProgressBar load={70} title={"Nordea"} />
              </div>
              <div className="col-12 col-md-4">
                {" "}
                <ProgressBar load={90} title={"transit"} />
              </div>
              <div className="col-12 col-md-4">
                {" "}
                <ProgressBar load={35} title={"AliBaba"} />
              </div>
              <div className="col-12 col-md-4 pt-md-3">
                {" "}
                <ProgressBar load={50} title={"FlyEmirates"} />
              </div>
              <div className="col-12 col-md-4 pt-md-3">
                {" "}
                <ProgressBar load={80} title={"Zoomit"} />
              </div>
              <div className="col-12 col-md-4 pt-md-3">
                {" "}
                <ProgressBar load={95} title={"Digi Kala"} />
              </div>
            </div>
          </div>
        </section>

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

        <section className={styles.bgLight}>
          <div className="pt-3 pb-3"></div>
        </section>
        <section>
          <div
            className={`${styles.bgYellow} pt-5 pb-5 d-flex flex-column justify-content-center align-content-center flex-wrap align-items-center`}
          >
            <h3 className={styles.newProject}>پروژه جدید داری؟</h3>
            <div className="pt-3">
              <Button btnType="simple" btntxt="درخواست پروژه جدید" />
            </div>
          </div>
        </section>
        <section className={styles.bgLight}>
          <div className="container pt-3 pb-3"></div>
        </section>
      </main>
    </>
  );
}
