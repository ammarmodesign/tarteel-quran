import { MdOutlineArrowOutward } from "react-icons/md";
import BlogCard from "../components/ui/BlogCard";
import ImageSwiper from "../components/ui/ImagesSwiper";
import FeatCard from "../components/ui/FeatCard";
import Hero from "../components/Hero";
import { IoMdBook, IoMdHeartEmpty } from "react-icons/io";
import { PiMedal } from "react-icons/pi";
import useDeviceType from "../hooks/useDeviceType";

const Home = () => {
  let platform = useDeviceType();

  return (
    <>
      <Hero />
      <section className="cards section-margin">
        <div className="wrapper flex flex-col lg:flex-row gap-4">
          <FeatCard
            icon={IoMdBook}
            title="إقرأ القرآن الكريم بجودة عالية"
            p="يمكنك قراءة القران واختيار السور."
          />
          <FeatCard
            isTranslateY={true}
            icon={IoMdHeartEmpty}
            title="إحتفظ بتلاواتك لوقت لاحق"
            p="يمكنك حفظ جميع تلاواتك المفضلة ."
          />
          <FeatCard
            icon={PiMedal}
            title="إستمع إلي أفضل التلاوات"
            p="لدينا أفضل التلاوات بصوت عالي الجودة."
          />
        </div>
      </section>
      <section className="about-quran text-white section-margin relative">
        <div className="wrapper md:flex md:items-center md:justify-between">
          <div className="text max-w-sm md:max-w-md space-y-6">
            <h2 className="font-bold text-3xl">عن القرآن الكريم</h2>
            <p className="text-zinc-400">
              القرآن الكريم هو كلام الله -تعالى-، المُنزل على نبيّه محمد -صلى
              الله عليه وسلم-، المعجز بلفظه، المتعبّد بتلاوته، المُفتتح بسورة
              الفاتحة، والمُنتهي بسورة الناس، المكتوب في المصاحف، والمنقول إلينا
              بالتواتر.
            </p>
            <button className="btn-primary">معرفة المزيد</button>
          </div>
          {/* Mobile Only */}
          {platform.mobile && (
            <div className="images">
              <img
                src="/images/quran-about-1.png"
                className="w-24 aspect-auto -z-20 absolute rotate-12 top-8 opacity-40 md:opacity-100 md:z-0 md:rotate-0 md:w-40 md:relative"
                alt=""
              />
              <img
                src="/images/quran-about-2.png"
                className="w-24 aspect-auto -z-20 absolute -rotate-12 bottom-24 left-8 opacity-10 md:opacity-100 md:z-0 md:rotate-0 md:w-40 md:relative"
                alt=""
              />
            </div>
          )}
        </div>
      </section>
      <section className="banner bg-greeny-gradient section-margin text-white">
        <div className="wrapper relative sm:flex sm:flex-row flex-col items-center justify-between space-y-8 p-8 lg:p-0">
          <div className="text space-y-4">
            <h3 className="font-bold text-2xl">
              إستمع إلي تلاوات قارئك المفضل
            </h3>
            <p className="text-zinc-300">
              إستمع لأكثر من 60 قارئ بجودة عالية وبدون تقطيع.
            </p>
            <button className="w-fit btn-blacky">
              <MdOutlineArrowOutward className="h-full w-6" />
              <p>أرني المزيد من القراء</p>
            </button>
          </div>
          {platform.mobile && <ImageSwiper />}
          {!platform.mobile && (
            <div className="images hidden lg:block h-[400px]">
              <img
                className="z-40 rounded-lg absolute w-52 left-0 transition-all duration-300 hover:left-16"
                src="/images/slider/mosaad-slide.jpg"
              />
              <img
                className="z-30 rounded-lg absolute w-52 left-16 transition-all duration-300 hover:left-32"
                src="/images/slider/sudais-slide.jpg"
              />
              <img
                className="z-20 rounded-lg absolute w-52 left-32 transition-all duration-300 hover:left-48"
                src="/images/slider/islam-slide.jpg"
              />
              <img
                className="z-10 rounded-lg absolute w-52 left-48 transition-all duration-300 hover:left-72"
                src="/images/slider/shriem-slide.jpg"
              />
            </div>
          )}
        </div>
      </section>
      <section className="blogs section-margin text-white">
        <div className="wrapper space-y-8">
          <h3 className="title font-bold text-3xl">آخر المقالات</h3>
          <div className="cards grid grid-cols-1 lg:grid-cols-3 gap-y-8">
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
