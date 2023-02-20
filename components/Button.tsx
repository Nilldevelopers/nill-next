const Button = (props: IButtonType) => {
  if (props.btnType === "simple")
    return (
      <>
        <button type={props.type} className="button button--hyperion">
          <span>
            <span>{props.btntxt}</span>
          </span>
        </button>
      </>
    );

  if (props.btnType === "export")
    return (
      <>
        <button type={props.type} className="button button--calypso">
          <span>
            <span>{props.btntxt}</span>
          </span>
        </button>
      </>
    );

  if (props.btnType === "initialize")
    return (
      <>
        <button type={props.type} className="button button--anthe">
          <span>
            <span>{props.btntxt}</span>
          </span>
        </button>
      </>
    );

  if (props.btnType === "render")
    return (
      <>
        <button type={props.type} className="button button--mimas">
          <span>
            <span>{props.btntxt}</span>
          </span>
        </button>
      </>
    );
  return <></>;
};

export default Button;
