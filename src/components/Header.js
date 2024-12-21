import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../Utilise/firebase";
import { addUser, removeUser } from "../Utilise/userSlice";
import { netfixLogo, SUPPORTED_LANGUAGE } from "../Utilise/Constants";
import useScrollPostion from "../hooks/useScrollPosition";
import { toggleGPTSearch } from "../Utilise/gptsearchSlice";
import Language from "../Utilise/Language_Constants";
import { changeLanguage } from "../Utilise/configSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const scrollPosition = useScrollPostion();

  function classNames(...classes) {
    return classes.filter(Boolean).join("");
  }

  const user = useSelector((store) => store.user);
  const showGPTSearch = useSelector((store) => store.gptSearch.showGPTSearch);
  const langKey = useSelector((store) => store.config.Language);

  useEffect(() => {
    const unsubcribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubcribe();
  }, []);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };

  const handleGPTSearch = () => {
    dispatch(toggleGPTSearch());
  };

  const handleLanguageChange = (e) => {
    // console.log(e.target.value);
    dispatch(changeLanguage(e.target.value));
  };

  return user ? (
    // <div className="absolute z-10 h-[75px] w-full flex justify-between items-center">
    <div
      className={classNames(
        scrollPosition > 0
          ? "bg-black sticky top-0"
          : "bg-gradient-to-b from-black absolute",
        " z-50 h-[75px] w-full flex justify-between items-center"
      )}
    >
      <div className="text-white font-semibold flex cursor-pointer">
        <img
          className="object-contain ml-14"
          src={netfixLogo}
          alt="Logo"
          height="150px"
          width="150px"
        />
        {!showGPTSearch && (
          <ul className="flex items-center">
            <Link to="/browse">
              <li className="p-5 hover:text-neutral-400">
                {Language[langKey]?.Home}
              </li>
            </Link>
            <Link to="/movies">
              <li className="p-5 hover:text-neutral-400">
                {Language[langKey]?.Movies}
              </li>
            </Link>
            <Link to="/tv shows">
              <li className="p-5 hover:text-neutral-400">
                {Language[langKey]?.TV_Shows}
              </li>
            </Link>
          </ul>
        )}
      </div>
      <div className="mx-14 flex items-center">
        <p className="mx-4 font-bold text-red-500">
          Hello! {user?.displayName}
        </p>
        <select
          onChange={handleLanguageChange}
          className="bg-black bg-opacity-50 px-2 py-2 rounded-md font-bold text-white"
        >
          {SUPPORTED_LANGUAGE?.map((Lang) => (
            <option key={Lang?.identifier} value={Lang?.identifier}>
              {Lang?.name}
            </option>
          ))}
        </select>
        <button
          onClick={handleGPTSearch}
          className="bg-white px-5 py-2 mx-3 rounded-md font-bold text-red-600"
        >
          {showGPTSearch ? "Home" : "GPT Search"}
        </button>
        <button
          onClick={handleSignOut}
          className="bg-red-600 px-5 py-2 rounded-md font-bold text-white"
        >
          {Language[langKey]?.Sign_Out}
        </button>
      </div>
    </div>
  ) : (
    <div className="absolute z-10 h-[100px] w-full flex justify-between items-center">
      <img
        className="object-contain mx-10 ml-[7rem] "
        src={netfixLogo}
        alt="Logo"
        height="250px"
        width="250px"
      />
    </div>
  );
};

export default Header;
