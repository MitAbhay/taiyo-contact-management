"use client";

import React, { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const Sidebar = () => {
  const pathname = usePathname();
  const sidebar = useRef<any>(null);

  return (
    <aside
      ref={sidebar}
      className="border-r-2 border-black absolute left-0 top-0 z-9999 flex h-screen w-72.5 flex-col overflow-y-hidden  duration-300 ease-linear dark:bg-boxdark lg:static lg:translate-x-0"
    >
      <div className="no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear ">
        <nav className="mt-5 px-4 py-4 lg:mt-9 lg:px-6">
          <div>
            <ul className="mb-6 flex flex-col gap-1.5">
              <li>
                <Link
                  href="/contacts"
                  className={`group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                    pathname.includes("contacts") &&
                    "bg-graydark dark:bg-meta-4"
                  }`}
                >
                  Contacts
                </Link>
              </li>
              <li>
                <Link
                  href="/maps"
                  className={`group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                    pathname.includes("maps") && "bg-graydark dark:bg-meta-4"
                  }`}
                >
                  Maps And Charts
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
