import Image from "next/image";
import Link from "next/link";

const MeetupList = (props) => {
  const { id, img, title, address, description } = props;

  return (
    <div className="flex flex-col justify-center items-center border border-black p-2 rounded-md max-w-[400px]">
      <Image src={img} alt={title} width={400} height={320} />
      <h2 className="text-2xl mt-2">{title}</h2>
      <address className="text-lg">{address}</address>
      <p className="text-lg text-center">{description}</p>
      <Link
        href={"/meetups/" + id}
        className="mt-2 text-base border border-black py-1 px-2 rounded-md"
      >
        See Details
      </Link>
    </div>
  );
};

export default MeetupList;
