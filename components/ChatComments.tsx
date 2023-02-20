import Image from "next/image";
import styles from "@/styles/Home.module.css";

const ChatComments = (props: ChatCommentType) => {
  if (props.liked) {
    return (
      <div className={`${styles.bgGrey} p-5 ${props.className}`}>
        <div className="d-flex flex-row pb-5">
          <Image
            src="/img/profiles/profile_1.png"
            alt=""
            width={90}
            height={90}
          />
          <div className="d-flex flex-column pe-5 align-justify-center ">
            <p className="head-comment-name">{props.username}</p>
            <p className="head-comment-date">{props.date}</p>
          </div>
        </div>
        <div>
          <p className="light-post-txt">{props.comment}</p>
        </div>
        <div className="d-flex flex-row-reverse">
          <Image
            src="/img/icons/FillHeart.svg"
            alt="like icon"
            className="pe-5"
            width={30}
            height={30}
          />
          <Image
            src="/img/icons/Reply.svg"
            alt="reply icon"
            width={30}
            height={30}
          />
        </div>
      </div>
    );
  } else {
    return (
      <div className={`${styles.bgGrey} p-5 ${props.className}`}>
        <div className="d-flex flex-row pb-5">
          <Image
            src="/img/profiles/profile_1.png"
            alt=""
            width={90}
            height={90}
          />
          <div className="d-flex flex-column pe-4 aling-justify-center align-content-center">
            <p className="head-comment-name">{props.username}</p>
            <p className="head-comment-date">{props.date}</p>
          </div>
        </div>
        <div>
          <p className="light-post-txt">{props.comment}</p>
        </div>
        <div className="d-flex flex-row-reverse">
          <div className="pe-5">
            <Image
              src="/img/icons/NullHeart.svg"
              alt="like icon"
              width={30}
              height={30}
            />
          </div>
          <Image
            src="/img/icons/Reply.svg"
            alt="reply icon"
            width={30}
            height={30}
          />
        </div>
      </div>
    );
  }
};

export default ChatComments;
