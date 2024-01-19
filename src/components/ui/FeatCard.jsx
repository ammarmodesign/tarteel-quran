function FeatCard({ icon: Icon, title, p, isTranslateY }) {
  return (
    <div
      className={`group relative z-10 bg-greeny-gradient before:absolute before:top-0 before:left-0 before:rounded-lg before:bg-white before:-z-10 before:h-0 hover:before:h-full before:transition-all before:duration-300 before:w-4 hover:before:w-full hover:before:right-0 w-full flex flex-col items-center text-center justify-center gap-2 text-white transition-all duration-300 p-6 rounded-lg ${
        isTranslateY
          ? "lg:-translate-y-4 hover:translate-y-0"
          : "lg:translate-y-2 hover:-translate-y-2"
      }`}
    >
      <Icon className="w-6 h-6 md:w-8 md:h-8 group-hover:text-blacky group-hover:opacity-90" />
      <h3 className="font-bold text-lg group-hover:text-blacky group-hover:opacity-90">
        {title}
      </h3>
      <p className="text-zinc-200 group-hover:text-blacky group-hover:opacity-90">
        {p}
      </p>
    </div>
  );
}

export default FeatCard;
