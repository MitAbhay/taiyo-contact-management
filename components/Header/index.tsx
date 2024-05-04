const Header = () => {
  return (
    <header className="drop-shadow-1 dark:drop-shadow-none sticky top-0 z-999 flex w-full bg-[#195599]">
      <div className="flex flex-grow items-center justify-center px-4 py-4 shadow-2 md:px-6 2xl:px-11">
        <div className="flex items-center gap-8">
          <div className="text-center text-white">
            <div className="my-2 text-[30px] font-bold">Page</div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
