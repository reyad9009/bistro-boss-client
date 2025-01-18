import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";
import { FaShoppingCart } from "react-icons/fa";
import useCart from "../../hooks/useCart";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [cart] = useCart();
  const handleLogOut = () => {
    logOut().then(() => {
      Swal.fire({
        title: "Log Out Successful.",
        showClass: {
          popup: "animate__animated animate__fadeInDown",
        },
        hideClass: {
          popup: "animate__animated animate__fadeOutUp",
        },
      });
    });
  };
  const navOptions = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-primaryColor font-bold text-lg"
              : "font-bold text-lg"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/menu"
          className={({ isActive }) =>
            isActive
              ? "text-primaryColor font-bold text-lg"
              : "font-bold text-lg"
          }
        >
          Our Menu
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/order/salad"
          className={({ isActive }) =>
            isActive
              ? "text-primaryColor font-bold text-lg"
              : "font-bold text-lg"
          }
        >
          Order
        </NavLink>
      </li>

      <li to="/">
        <button className="btn">
          <FaShoppingCart></FaShoppingCart>
          <div className="badge badge-secondary">+{cart.length}</div>
        </button>
      </li>

      {user ? (
        <>
          {" "}
          <button onClick={handleLogOut} className="btn">
            Log Out
          </button>
        </>
      ) : (
        <li>
          <NavLink
            to="/login"
            className={({ isActive }) =>
              isActive
                ? "text-primaryColor font-bold text-lg"
                : "font-bold text-lg"
            }
          >
            Login
          </NavLink>
        </li>
      )}
    </>
  );
  return (
    <div className="drawer">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* Navbar */}
        <div className="navbar w-full">
          <div className="flex-none lg:hidden">
            <label
              htmlFor="my-drawer-3"
              aria-label="open sidebar"
              className="btn btn-square btn-ghost"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block h-6 w-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>

          <div className="flex-1 ">
            {/* <img className="lg:w-[70px] w-[50px] " src={logo} alt="" /> */}
            <p className="font-bold lg:text-3xl text-xl"> Fradel and Spies</p>
          </div>

          <div className="hidden flex-none lg:block w-[40%]">
            <ul className="flex flex-row gap-10">
              {/* Navbar menu content here */}
              {navOptions}
            </ul>
          </div>

          <div className="flex justify-center items-center">
            {/* <div
              className="mr-5 lg:block hidden"
              data-tooltip-id="theme"
              data-tooltip-content="dark/light theme"
            >
              <Theme></Theme>
              <Tooltip id="theme"></Tooltip>
            </div> */}

            {/* <div className="md:pr-5 pr-4">
              {user && user?.email ? (
                <div className="dropdown dropdown-end">
                  <div
                    tabIndex={0}
                    role="button"
                    className="btn btn-ghost btn-circle avatar"
                  >
                    <div className="w-11 h-11 rounded-full">
                      <img src={user?.photoURL} />
                    </div>
                  </div>
                  <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content bg-primaryColor rounded-box z-50 mt-3 w-52 p-3 shadow space-y-2"
                  >
                    <li>
                      <NavLink to={`/my-foods`} className="text-xl">
                        My Food
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/add-food" className="text-xl">
                        Add Food
                      </NavLink>
                    </li>

                    <li>
                      <NavLink to="/my-orders" className="text-xl">
                        My Orders
                      </NavLink>
                    </li>
                  </ul>
                </div>
              ) : (
                <div className=""></div>
              )}
            </div> */}

            {/* <div className="lg:block hidden">
              {user && user?.email ? (
                <button
                  onClick={logOut}
                  className="bg-primaryColor lg:px-8 lg:py-3 px-2 py-2 lg:text-xl text-sm font-semibold rounded-full text-white"
                >
                  Logout
                </button>
              ) : (
                <Link
                  to="/login"
                  className="bg-primaryColor lg:px-8 lg:py-3 px-2 py-2 lg:text-xl font-semibold rounded-full text-white"
                >
                  Login
                </Link>
              )}
            </div> */}
          </div>
        </div>
      </div>

      <div className="drawer-side z-50">
        <label
          htmlFor="my-drawer-3"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu bg-base-200 min-h-full w-60 p-4 rounded-r-xl">
          {/* Sidebar content here */}
          <div className="flex pb-3">{/* <Theme></Theme> */}</div>
          {navOptions}

          {/* <div className="w-full mt-10">
            {user && user?.email ? (
              <button
                onClick={logOut}
                className="bg-primaryColor py-2 w-full text-sm font-semibold rounded-lg text-white"
              >
                Logout
              </button>
            ) : (
              <Link to="/login">
                <button className="bg-primaryColor w-full py-2 text-sm font-semibold rounded-lg text-white">
                  Login
                </button>
              </Link>
            )}
          </div> */}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
