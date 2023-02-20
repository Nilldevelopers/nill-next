
const ProgressBar = (props: IProgressBarType) => {
  const style = {
    width: props.load + "%",
  };
  return (
    <div dir="ltr">
      <div className="progress-title">{props.title}</div>
      <div className="my-progress progress-bg position-relative h-100">
        <div className="position-absolute">
          <div className="end-progress"></div>
        </div>
        <div className="position-relative during-progress" style={style}>
          <h2 className="precentage-txt position-absolute">{props.load}%</h2>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
