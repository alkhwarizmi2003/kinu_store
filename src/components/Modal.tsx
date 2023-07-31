type Props = {
  show: boolean;
  children: React.ReactNode;
  appCmdCallback: (command: string, data: any) => void;
};

function Modal({ show, children, appCmdCallback }: Props) {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  function handleClose() {
    appCmdCallback("closeModal", "0000 closing moadl...");
  }

  return (
    <div className={showHideClassName} style={{ zIndex: 10000000 }}>
      <section className="modal-main">
        <div>{children}</div>
        <br />
        <button
          type="button"
          onClick={handleClose}
          style={{ alignSelf: "flex-end", padding: "5px 20px" }}
        >
          Close
        </button>
      </section>
    </div>
  );
}

export default Modal;
