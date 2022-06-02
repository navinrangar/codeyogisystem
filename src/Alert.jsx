import cn from "classnames";

export const Alert = ({ alert, removeAlert }) => {
  let { message, type } = alert;

  type = type || "success";

  const alertClasses = cn("bg-white border-strong h-20 w-full", {
    "bg-red-500 border-red-700": type === "error",
    "bg-yellow-500 border-yellow-700": type === "warning",
    "bg-green-500 border-green-700": type === "success"
  });

  return (
    <>
      <div>
        <div className={alertClasses}>
          <span className="mr-10"> {message} </span>
          <button onClick={() => removeAlert()}> Kill ME </button>
        </div>
      </div>
    </>
  );
};
