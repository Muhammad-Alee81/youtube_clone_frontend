import { Bell } from "lucide-react";

const Notification = () => {
  return (
    <button
      type="button"
      className="relative flex h-10 w-10 items-center justify-center rounded-full transition hover:bg-gray-500/25 cursor-pointer"
    >
      <Bell className="h-7 w-7 text-white max-sm:h-5 max-sm:w-5" />

      {/* Notification Badge */}
      <span className="absolute right-0.5 top-0.5 flex h-4 min-w-4  items-center justify-center rounded-full bg-red-600 px-1 text-[10px] font-semibold text-white">
        3
      </span>
    </button>
  );
};

export default Notification;
