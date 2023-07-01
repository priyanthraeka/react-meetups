import { useRef } from "react";
import Card from "./Card";

const AddMeetups = () => {
  const titleRef = useRef();
  const imageRef = useRef();
  const addressRef = useRef();
  const descriptionRef = useRef();

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    const response = await fetch(
      "https://react-meetups-455dd-default-rtdb.firebaseio.com/meetups.json",
      {
        method: "POST",
        body: JSON.stringify({
          title: titleRef.current.value,
          image: imageRef.current.value,
          address: addressRef.current.value,
          description: descriptionRef.current.value,
        }),
        headers: {
          "Content-Type": "application.json",
        },
      }
    );

    const data = await response.json();
    console.log(data);
  };

  return (
    <Card>
      <form onSubmit={onSubmitHandler}>
        <div className="flex flex-col gap-3 border border-gray-400 max-w-[600px] m-auto p-5 rounded-md shadow-md shadow-gray-400 mt-16">
          <div className="flex flex-col gap-1">
            <label htmlFor="title" className="text-lg">
              Title
            </label>
            <input
              type="text"
              id="title"
              className="py-2 px-4 border border-gray-400 rounded-md hover:border-gray-600"
              ref={titleRef}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="image" className="text-lg">
              Image
            </label>
            <input
              type="text"
              id="image"
              className="py-2 px-4 border border-gray-400 rounded-md hover:border-gray-600"
              ref={imageRef}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="address" className="text-lg">
              Address
            </label>
            <input
              type="text"
              id="address"
              className="py-2 px-4 border border-gray-400 rounded-md hover:border-gray-600"
              ref={addressRef}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="description" className="text-lg">
              Description
            </label>
            <textarea
              id="description"
              cols="30"
              rows="10"
              className="py-2 px-4 border border-gray-400 rounded-md hover:border-gray-600"
              ref={descriptionRef}
            ></textarea>
          </div>
          <button className="ms-auto border-gray-400 py-2 px-4 border rounded-md font-bold mt-2">
            Submit
          </button>
        </div>
      </form>
    </Card>
  );
};

export default AddMeetups;
