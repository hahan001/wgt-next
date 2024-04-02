import Image from "next/image";
import { Facebook, Instagrams, Twitter } from "../ui/icons";

const Card = ({ src }: { src: string }) => {
  return (
    <div className="flex flex-col rounded-lg shadow-xl cursor-pointer group">
      <div className="relative h-0 w-full pt-[100%] overflow-hidden rounded-t-lg">
        <Image
          src={src}
          alt=""
          fill
          className="h-full object-cover group-hover:scale-125 transition-all duration-300"
          priority
        />
      </div>
      <div className="text-center py-4 md:py-7.5 group-hover:bg-secondary/5">
        <p className="font-bold text-sm md:text-base">Julian Jameson</p>
        <p className="my-1 sm:my-2.5 text-xs text-secondary-light">Profession</p>
        <div className="flex justify-center gap-2 sm:gap-5">
          <Facebook className="text-base sm:text-2xl" />
          <Instagrams className="text-base sm:text-2xl" />
          <Twitter className="text-base sm:text-2xl" />
        </div>
      </div>
    </div>
  );
};

export default Card;
