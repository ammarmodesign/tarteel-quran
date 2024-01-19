import { useRef } from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  const nav_mobile = useRef();
  function closeNavMobile() {
    console.log("clicked");
    nav_mobile.current?.classList.add("translate-x-full");
  }
  function showNavMobile() {
    nav_mobile.current?.classList.remove("translate-x-full");
    document.body.style.overflow = "hidden";
  }

  return (
    <header className="bg-blacky w-full text-white">
      <nav className="wrapper py-4 flex items-center justify-between">
        {/* DESKTOP */}
        <span className="text-3xl font-bold text-greeny-gradient">ترتيل</span>
        <ul className="hidden lg:flex list-none gap-6">
          <Link
            to={"/"}
            className="relative max-w-fit font-normal before:w-0 before:absolute before:rounded before:-bottom-1 before:right-0 before:h-1 before:bg-white hover:before:w-full before:transition-all before:duration-300 text-greeny-gradient"
          >
            الصفحة الرئيسية
          </Link>
          <Link
            to={"/shiekhs"}
            className="relative max-w-fit font-normal before:w-0 before:absolute before:rounded before:-bottom-1 before:right-0 before:h-1 before:bg-greeny-gradient hover:before:w-full before:transition-all before:duration-300"
          >
            الشيوخ
          </Link>
          <Link
            to={"/best-tilawat"}
            className="relative max-w-fit font-normal before:w-0 before:absolute before:rounded before:-bottom-1 before:right-0 before:h-1 before:bg-greeny-gradient hover:before:w-full before:transition-all before:duration-300"
          >
            أفضل التلاوات
          </Link>
          <Link
            to={"/blogs"}
            className="relative max-w-fit font-normal before:w-0 before:absolute before:rounded before:-bottom-1 before:right-0 before:h-1 before:bg-greeny-gradient hover:before:w-full before:transition-all before:duration-300"
          >
            المقالات
          </Link>
          <Link
            to={"/about-us"}
            className="relative max-w-fit font-normal before:w-0 before:absolute before:rounded before:-bottom-1 before:right-0 before:h-1 before:bg-greeny-gradient hover:before:w-full before:transition-all before:duration-300"
          >
            من نحن
          </Link>
        </ul>
        <div className="hidden lg:flex gap-6">
          <Link to={"/register"} className="btn-primary">
            أنشاء حسابك
          </Link>
          <Link to={"/login"} className="btn-secondary">
            تسجيل الدخول
          </Link>
        </div>
        {/* MOBILE */}
        <div
          onClick={showNavMobile}
          className="lg:hidden flex flex-col w-6 h-3 gap-1 group"
        >
          <span className="w-full h-full bg-white rounded group-hover:rotate-180 transition-all duration-300"></span>
          <span className="w-full h-full bg-white rounded group-hover:-rotate-180 transition-all duration-300"></span>
        </div>
      </nav>
      <div
        ref={nav_mobile}
        className="lg:hidden absolute translate-x-full transition-transform duration-300 top-0 right-0 bg-blacky z-50 w-full min-h-screen text-xl"
      >
        <div className="wrapper relative p-16">
          <ul className="list-none flex flex-col gap-8">
            <Link
              to={"/"}
              className="relative max-w-fit font-normal before:w-0 before:absolute before:rounded before:-bottom-1 before:right-0 before:h-1 before:bg-white hover:before:w-full before:transition-all before:duration-300 text-greeny-gradient"
            >
              الصفحة الرئيسية
            </Link>
            <Link
              to={"/shiekhs"}
              className="relative max-w-fit font-normal before:w-0 before:absolute before:rounded before:-bottom-1 before:right-0 before:h-1 before:bg-greeny-gradient hover:before:w-full before:transition-all before:duration-300"
            >
              الشيوخ
            </Link>
            <Link
              to={"/best-tilawat"}
              className="relative max-w-fit font-normal before:w-0 before:absolute before:rounded before:-bottom-1 before:right-0 before:h-1 before:bg-greeny-gradient hover:before:w-full before:transition-all before:duration-300"
            >
              أفضل التلاوات
            </Link>
            <Link
              to={"/blogs"}
              className="relative max-w-fit font-normal before:w-0 before:absolute before:rounded before:-bottom-1 before:right-0 before:h-1 before:bg-greeny-gradient hover:before:w-full before:transition-all before:duration-300"
            >
              المقالات
            </Link>
            <div className="flex w-full flex-wrap gap-6">
              <Link to={"/register"} className="btn-primary">
                أنشاء حسابك
              </Link>
              <Link to={"/login"} className="btn-secondary">
                تسجيل الدخول
              </Link>
            </div>
          </ul>

          <div
            onClick={closeNavMobile}
            className="absolute top-6 left-6 md:left-12 w-6 h-3 flex flex-col gap-1 group"
          >
            <span className="w-full h-full bg-white rounded group-hover:translate-y-2 group-hover:rotate-[60deg] transition-all duration-300"></span>
            <span className="w-full h-full bg-white rounded group-hover:-rotate-[60deg] transition-all duration-300"></span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
