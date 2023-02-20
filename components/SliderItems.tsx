import Image from "next/image";
import Button from "./Button";

const SliderItems = (props: ISliderItemType) => {
  return (
    <>
      <div className="d-flex position-relative col">
        <Image src={props.imageSource} alt={props.slidertxt} width={300} height={300} />
        <div className="position-absolute bottom-65 right-0">
          <Button btnType="initialize" btntxt={props.slidertxt} />
        </div>
      </div>
    </>
  );
};

export default SliderItems;
