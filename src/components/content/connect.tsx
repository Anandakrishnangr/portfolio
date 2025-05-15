import { Gmail, Instagram, LinkedIn } from "@/assets/icons";
import { Bg } from "@/assets/icons/bg";
import Link from "next/link";

const ConnectMe = () => {
  return (<>
        <Bg className="w-full h-full" />
    <div className="h-full flex flex-col lg:flex-row relative">
      <div className="absolute inset-0 z-0">
      </div>
      <div className="flex-1 flex justify-center items-center text-center p-4 relative z-10">
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold">
          Connect with me!
        </h1>
      </div>

      <div className="flex-1 flex justify-center items-center text-center p-4 md:flex-row flex-col relative z-10">
        <div>
          <Link
            href="https://www.linkedin.com/in/ananda-krishnan-gr-188869219"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl md:text-2xl "
            >
            <LinkedIn width={'200px'} className="inline-block mr-2" />
            
          </Link>
        </div>
        <div>

          <Link
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl md:text-2xl hover:border-2"
            >
            <Instagram   width={'250px'} height={'150px'} />
          </Link>
        </div>
        <div>

          <Link
            href="mailto:granandakrishnan@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl md:text-2xl "
            >
            <Gmail width={'200px'} height={'100px'}/>
          </Link>
        </div>
      </div>

    </div>
            </>
  );
};

export default ConnectMe;
