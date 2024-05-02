import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="col gap-2 justify-center items-center w-full h-full">
      <img
        className="w-[360px]"
        src="https://upload.wikimedia.org/wikipedia/commons/9/98/International_Pok%C3%A9mon_logo.svg"
        alt="Pokemon Logo"
      />
      <p className="text-[#3A5DA8] font-bold text-[6rem] uppercase">
        Not found
      </p>
      <Link
        to="/pokemon/pokemon-list?page-1"
        className="text-[#3A5DA8] text-xl font-semibold hover:underline active:opacity-75 transition"
      >
        Back to home
      </Link>
    </div>
  );
};

export default NotFoundPage;
