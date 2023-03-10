import React from "react";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import { ChatCommentsData, HomeSliderItem, tagItems } from "@/data/data";
import ChatComments from "@/components/ChatComments";
import { Swiper, SwiperSlide } from "swiper/react";
import SliderItems from "@/components/SliderItems";
import { Pagination } from "swiper";
import Button from "@/components/Button";
import Head from "next/head";
import Element from "@/components/Element";

const post = () => {
  return (
    <>
      <Head>
        <title>Nill Dev | پست نیل</title>
        <meta name="description" content="نیل با افتخار تقدیم میکند" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Image
          alt=""
          src="/static/img/post/Rectangle 62.png"
          className="custom-img"
          layout="fill"
        />

        <div className="container">
          <div className="row pt-5">
            <span className="date_post">Graphic Design, December 04, 2022</span>
            <h3 className="head_post">طراحی ست اداری شرکت hydeout</h3>
            <div className="pt-3 pb-5">
              <div className="d-flex flex-row">
                {tagItems.map((items, index) => (
                  <span key={index} className="tag_post_items ms-2">
                    {items}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="row">
            <div className="pt-5">
              <p className="txt-on-image-p pb-3">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد
                نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
                کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان
                جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را
                برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در
                زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و
                دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد
                وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات
                پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
              </p>
            </div>
          </div>
          <div className="row">
            <Image
              src="/static/img/post/Rectangle 67.png"
              alt="dd"
              className="custom-img"
              fill
            />
          </div>
          <div className="row">
            <p className="txt-on-image-p pt-5">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد
              نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
              کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان
              جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای
              طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان
              فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری
              موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد
              نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل
              دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
            </p>
          </div>
          <div className="row">
            <div className="position-relative pb-5">
              <hr className="position-absolute" id="post_line_1" />
              <p
                className={`${styles.cYellow} position-relative txt-on-image-p pt-5 pb-5 me-4`}
              >
                ’’ لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و
                با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و
                مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی
                مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می
                باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت
                فراوان جامعه و متخصصان را می طلبد. ‘‘
              </p>
            </div>
          </div>

          <div className="row">
            <Image
              src="/static/img/post/Rectangle 69.png"
              alt="dd"
              className="custom-img"
              fill
            />
          </div>
          <div className="pt-3"></div>
          <div className="row">
            <Image
              src="/static/img/post/Rectangle 70.png"
              fill
              alt="dd"
              className="custom-img pb-5"
            />
          </div>

          <div className="row pb-3">
            {ChatCommentsData.map((data, index) => {
              if (index == 1) {
                return (
                  <div
                    className="pt-5 d-flex flex-row align-items-center"
                    key={index}
                  >
                    <div className="contents ps-3">
                      <Image
                        src={data.image.source}
                        width={data.image.width}
                        height={data.image.height}
                        alt={data.image.alt}
                      />
                    </div>
                    <div className="col-span-2">
                      <ChatComments
                        comment={data.comment}
                        date={data.date}
                        liked={data.liked}
                        username={data.username}
                      />
                    </div>
                  </div>
                );
              } else {
                return (
                  <div className="pt-5" key={index}>
                    <ChatComments
                      comment={data.comment}
                      date={data.date}
                      liked={data.liked}
                      username={data.username}
                    />
                  </div>
                );
              }
            })}
          </div>

          <div className="row pt-5 pb-5">
            <Image
              src="/static/img/icons/DrowDown.svg"
              width={30}
              height={30}
              alt="icon drow down"
            />
          </div>

          <div className="row">
            <div>
              <Element theme="dark" />

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
                  dynamicBullets: false,
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
                id="post_slider"
              >
                {HomeSliderItem.map((data, index) => (
                  <SwiperSlide key={index}>
                    <SliderItems
                      slidertxt={data.title}
                      imageSource={data.image}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>

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
      </main>
    </>
  );
};

export default post;
