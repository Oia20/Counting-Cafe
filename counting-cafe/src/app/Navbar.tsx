"use client";

import { useContext } from "react";
import { FolderContext } from "./folderContext";
import { 
  SignedIn,
  SignedOut,
  SignInButton,
  SignOutButton,
  UserButton
} from "@clerk/nextjs";

const Navbar = () => {
  const { setIsAddingFolder } = useContext(FolderContext);

  return (
    <nav className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <span className="text-xl font-bold text-blue-600">Counting Café</span>
          </div>
          <div className="flex items-center">

            <SignedOut>
              <SignInButton></SignInButton>
            </SignedOut>
            <SignedIn>

              <button 
                onClick={() => setIsAddingFolder(true)}
                className="ml-4 px-4 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition-all"
              >
                New Folder
              </button>
              <div className="ml-4">
                <SignOutButton>
                  <UserButton />
                </SignOutButton>
              </div>
            </SignedIn>
            
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;