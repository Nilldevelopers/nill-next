import React from "react";
import styles from "@/styles/Home.module.css";
import Image from "next/image";

const BoxLight = (props: IBoxTypes) => {
  return (
    <div>
      <div className={`${styles.bgffff} p-5 text-center`}>
        <div className="pb-3">
          <Image src={props.icon_path} alt="" width={65} height={65} />
        </div>
        <h3 className={`${styles.boxHead} pb-2`}>{props.head}</h3>
        <p className={styles.boxP}>{props.pragraph}</p>
      </div>
    </div>
  );
};

export default BoxLight;
