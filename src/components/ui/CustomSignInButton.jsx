import { Button } from "@/components/ui/button";
import { CircleUserRound } from "lucide-react";

const CustomSignInButton = () => {
  return (
    <div className="">
      <Button
        variant="destructive"
        className="text-blue-600 bg-transparent border border-gray-800 hover:bg-transparent text-md [&_svg]:w-6! [&_svg]:h-6! py-5! px-5! rounded-full cursor-pointer max-sm:px1! max-sm:py-4! max-sm:text-md max-sm:ml-2"
      >
        <CircleUserRound />
        SignIn
      </Button>
    </div>
  );
};

export default CustomSignInButton;
