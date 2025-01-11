import React from "react";
import review1 from "../assets/review-1.png";
import review2 from "../assets/review-2.png";
import star from "../assets/star.svg";

const Review = () => {
  return (
    <div className="mt-[10rem] container">
      <h1 className="text-5xl font-bold font-script text-center border-black border-b w-1/2 mx-auto py-1">
        Reviews
      </h1>
      <div className="grid lg:grid-cols-2 lg:gap-x-3 gap-y-5 pt-16">
        <div className="text-center w-full">
          <img src={review1} alt="" className="mx-auto drop-shadow-xl" />
          <div className="py-8 px-5 bg-secondary">
            <h2 className="text-4xl font-script">Chef Arnold</h2>
            <div className="flex gap-1 justify-center py-2">
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repudiandae dolores, perferendis obcaecati est illo autem. Libero.
            </p>
          </div>
        </div>
        <div className="text-center w-full">
          <img src={review2} alt="" className="mx-auto drop-shadow-2xl" />
          <div className="py-8 px-5 bg-secondary">
            <h2 className="text-4xl font-script">Influencer</h2>
            <div className="flex gap-1 justify-center py-2">
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repudiandae dolores, perferendis obcaecati est illo autem. Libero.
            </p>
          </div>
        </div>
      </div>

      {/* Comments */}
      <div className="overflow-x-scroll mt-10 py-2">
        <div className="flex w-fit gap-5">
          <div className="w-[390px] h-[290px] border-black border flex flex-col justify-around px-3">
            <div>
              <h2 className="font-daysone text-2xl mb-1">Username</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repellat eligendi enim minus aspernatur! Nesciunt, labore
                aperiam debitis architecto, ipsa nobis cupiditate non deserunt
                autem modi accusantium! Laudantium quae magni accusamus tempora
                esse, magnam quis facilis eligendi neque dolores commodi quidem!
              </p>
            </div>

            <div className="flex gap 1 border-black border-t pt-1">
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
            </div>
          </div>
          <div className="w-[390px] h-[290px] border-black border flex flex-col justify-around px-3">
            <div>
              <h2 className="font-daysone text-2xl mb-1">Username</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repellat eligendi enim minus aspernatur! Nesciunt, labore
                aperiam debitis architecto, ipsa nobis cupiditate non deserunt
                autem modi accusantium! Laudantium quae magni accusamus tempora
                esse, magnam quis facilis eligendi neque dolores commodi quidem!
              </p>
            </div>

            <div className="flex gap 1 border-black border-t pt-1">
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
            </div>
          </div>
          <div className="w-[390px] h-[290px] border-black border flex flex-col justify-around px-3">
            <div>
              <h2 className="font-daysone text-2xl mb-1">Username</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repellat eligendi enim minus aspernatur! Nesciunt, labore
                aperiam debitis architecto, ipsa nobis cupiditate non deserunt
                autem modi accusantium! Laudantium quae magni accusamus tempora
                esse, magnam quis facilis eligendi neque dolores commodi quidem!
              </p>
            </div>

            <div className="flex gap 1 border-black border-t pt-1">
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
            </div>
          </div>
          <div className="w-[390px] h-[290px] border-black border flex flex-col justify-around px-3">
            <div>
              <h2 className="font-daysone text-2xl mb-1">Username</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repellat eligendi enim minus aspernatur! Nesciunt, labore
                aperiam debitis architecto, ipsa nobis cupiditate non deserunt
                autem modi accusantium! Laudantium quae magni accusamus tempora
                esse, magnam quis facilis eligendi neque dolores commodi quidem!
              </p>
            </div>

            <div className="flex gap 1 border-black border-t pt-1">
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
            </div>
          </div>
          <div className="w-[390px] h-[290px] border-black border flex flex-col justify-around px-3">
            <div>
              <h2 className="font-daysone text-2xl mb-1">Username</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repellat eligendi enim minus aspernatur! Nesciunt, labore
                aperiam debitis architecto, ipsa nobis cupiditate non deserunt
                autem modi accusantium! Laudantium quae magni accusamus tempora
                esse, magnam quis facilis eligendi neque dolores commodi quidem!
              </p>
            </div>

            <div className="flex gap 1 border-black border-t pt-1">
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
            </div>
          </div>
          <div className="w-[390px] h-[290px] border-black border flex flex-col justify-around px-3">
            <div>
              <h2 className="font-daysone text-2xl mb-1">Username</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repellat eligendi enim minus aspernatur! Nesciunt, labore
                aperiam debitis architecto, ipsa nobis cupiditate non deserunt
                autem modi accusantium! Laudantium quae magni accusamus tempora
                esse, magnam quis facilis eligendi neque dolores commodi quidem!
              </p>
            </div>

            <div className="flex gap 1 border-black border-t pt-1">
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
