import React from "react";
import { LogoIcon } from "../../assets/icon/logo-icon";
import { MessageIcon } from "../../assets/icon/message-icon";
import { HeartIcon } from "../../assets/icon/heart-icon";
import { UserIcon } from "../../assets/icon/user-icon";
import { Link } from "react-router-dom";
import { Button } from "../../components/buttons/button";
import { useNavigate } from "react-router-dom";
import { loadState } from "../../lib/storage";
export const Header = () => {
  const user = loadState("user");
  const navigate = useNavigate();

  if (user && window.location.pathname === "/login") {
    navigate("/");
  }
  if (!user && window.location.pathname === "/profile") {
    navigate("/login");
  }
  return (
    <section className="shadow-primary z-50">
      <div className="container flex items-center justify-between py-[20px]">
        <Link to={"/"}>
          <LogoIcon />
        </Link>
        <div className="flex gap-6 items-center">
          <div className="flex gap-[7px]">
            <MessageIcon />
            <p className="font-medium">Xabarlar</p>
          </div>
          <Link to="/like" className="flex gap-[7px]">
            <HeartIcon />
            <p className="font-medium">Yoqtirganlar</p>
          </Link>
          {user ? (
            <Link to="/profile">
              <div className="flex gap-[7px]">
                <UserIcon />
                <p className="font-medium">Akkaunt</p>
              </div>
            </Link>
          ) : (
            <Link to="/users/login">
              <div className="flex gap-[7px]">
                <UserIcon />
                <p className="font-medium">Login</p>
              </div>
            </Link>
          )}
          <select className="font-medium">
            <option value="uz">Uz</option>
            <option value="eng">Eng</option>
            <option value="rus">Rus</option>
          </select>
          <Link to={"/create-product"}>
            <Button variant="primary">E'lonlarni joylashtirish</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
