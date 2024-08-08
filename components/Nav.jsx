"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";

const Nav = () => {
  const { data: session } = useSession();
  const [providers, setProviders] = useState(null);
  const [toggleDropdown, setToggleDropdown] = useState(false);

  useEffect(() => {
    const fetchProviders = async () => {
      try {
        const response = await getProviders();
        setProviders(response);
      } catch (error) {
        console.error("Error fetching providers:", error);
      }
    };

    fetchProviders();
  }, []);

  return (
    <nav className="flex-between w-full mb-16 py-4 ">
      <Link href="/" className="flex gap-2 flex-center" aria-label="Home">
        <Image
          src="/assets/images/logo.svg"
          alt="InspireMe logo"
          width={38}
          height={38}
          className="object-contain"
        />
        <p className="logo_text">InspireMe</p>
      </Link>

      {/* Desktop Navigation */}
      <div className="sm:flex hidden">
        {session?.user ? (
          <div className="flex gap-3 md:gap-5">
            <Link href="/create-prompt" className="outline_btn" aria-label="Create Prompt">
              Create Prompt
            </Link>
            <button
              type="button"
              onClick={signOut}
              className="outline_btn"
              aria-label="Sign Out"
            >
              Sign Out
            </button>
            <Link href="/profile" aria-label="Profile">
              <Image
                src={session.user.image || "/assets/images/profile.png"}
                alt={`${session.user.name}'s Profile image`}
                width={38}
                height={38}
                className="rounded-full"
              />
            </Link>
          </div>
        ) : (
          <>
            {providers &&
              Object.values(providers).map((provider) => (
                <button
                  type="button"
                  key={provider.name}
                  onClick={() => signIn(provider.id)}
                  className="black_btn"
                  aria-label={`Sign in with ${provider.name}`}
                >
                  Sign in
                </button>
              ))}
          </>
        )}
      </div>

      {/* Mobile Navigation */}
      <div className="sm:hidden flex relative z-50">
        {session?.user ? (
          <div className="flex">
            <Image
              src={session.user.image || "/assets/images/profile.png"}
              alt={`${session.user.name}'s Profile image`}
              width={38}
              height={38}
              className="rounded-full cursor-pointer"
              onClick={() => setToggleDropdown((prev) => !prev)}
              aria-label="Profile Dropdown"
            />
            {toggleDropdown && (
              <div className="dropdown">
                <Link
                  href="/profile"
                  className="dropdown_link"
                  onClick={() => setToggleDropdown(false)}
                  aria-label="My Profile"
                >
                  My Profile
                </Link>
                <Link
                  href="/create-prompt"
                  className="dropdown_link"
                  onClick={() => setToggleDropdown(false)}
                  aria-label="Create Prompt"
                >
                  Create Prompt
                </Link>
                <button
                  type="button"
                  onClick={() => {
                    setToggleDropdown(false);
                    signOut();
                  }}
                  className="mt-5 w-full black_btn"
                  aria-label="Sign Out"
                >
                  Sign Out
                </button>
              </div>
            )}
          </div>
        ) : (
          <>
            {providers &&
              Object.values(providers).map((provider) => (
                <button
                  type="button"
                  key={provider.name}
                  onClick={() => signIn(provider.id)}
                  className="black_btn"
                  aria-label={`Sign in with ${provider.name}`}
                >
                  Sign in
                </button>
              ))}
          </>
        )}
      </div>
    </nav>
  );
};

export default Nav;
