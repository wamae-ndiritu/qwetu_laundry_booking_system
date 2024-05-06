import CloseIcon from "@mui/icons-material/Close";

const Message = ({ variant = "error", onClose, children }) => {
  return (
    <span
      className={`flex items-center justify-between my-1 w-full py-2 px-4 rounded border ${
        variant === "error"
          ? "bg-red-100 border-red-400 text-red-700"
          : "bg-green-100 border-green-400 text-green-700"
      }`}
    >
      <p>{children}</p>
      <button onClick={onClose}>
        <CloseIcon />
      </button>
    </span>
  );
};

export default Message;
