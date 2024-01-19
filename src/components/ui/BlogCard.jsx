import { MdOutlineArrowOutward } from "react-icons/md";

const BlogCard = () => {
  return (
    <div>
      <div className="relative lg:max-w-80 aspect-auto flex lg:flex-col md:p-4 lg:p-0 shadow-[hsla(0,0%,51%,.26)] sm:bg-[#212121] rounded-lg sm:border-2 border-[#323232]">
        <div className="w-1/3 lg:w-full sm:border-l md:border-l-0 lg:border-b border-[#424242]">
          <img
            className="w-full md:w-full md:h-full md:rounded-t-lg rounded rounded-tr rounded-br object-cover"
            src="/images/quran-blog.jpg"
            alt=""
          />
        </div>
        <div className="text p-4 space-y-2">
          <h4 className="text-xl font-bold">كيف تحفظ القرآن؟</h4>
          <p className="text-zinc-400">أفضل الطرق الفعالة لحفظ القرآن</p>
          <button className="hidden md:flex btn-blacky">
            <MdOutlineArrowOutward className="h-full w-6" />
            <p>إقرأ المزيد</p>
          </button>
        </div>
      </div>
      <button className="sm:hidden mt-2 before:bg-[#212121] w-full btn-blacky">
        <MdOutlineArrowOutward className="h-full w-6" />
        <p>إقرأ المزيد</p>
      </button>
      <hr className="my-4 block md:hidden"/>
    </div>
  );
};

export default BlogCard;
