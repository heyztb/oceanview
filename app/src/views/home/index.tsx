// Next, React
import { FC } from "react"

// Components
import pkg from "../../../package.json"

export const HomeView: FC = ({}) => {
  return (
    <div className="hero min-h-[80vh] p-4">
      <div className="hero-content flex-col">
        <h1 className="text-center text-5xl md:text-9xl pl-12 font-bold text-transparent bg-clip-text bg-gradient-to-tr from-[#9945FF] to-[#14F195]">
          Oceanview{" "}
          <span className="text-sm font-normal align-top text-slate-700">
            v{pkg.version}
          </span>
        </h1>
        <h4 className="w-full text-lg md:text-4xl text-center text-slate-300">
          Merchant tools for Solana
        </h4>
        {/* <div className="flex flex-row max-w-full my-4 p-4 space-x-4 border rounded-xl border-gray-800">
          <div className="flex flex-col">
            <p className="text-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4 md:w-6 md:h-6 inline mr-2 align-sub"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z"
                />
              </svg>
              <span className="text-md md:text-xl">
                Accept payments in SOL or any SPL token
              </span>
            </p>
            <p className="text-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4 md:w-6 md:h-6 inline mr-2 align-sub"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
              <span className="text-md md:text-xl">
                Search and verify transactions on the Solana blockchain
              </span>
            </p>
          </div>
          <div className="flex flex-col"></div>
        </div> */}

        <form className="form-control justify-center w-full md:max-w-xs space-y-2">
          <input
            type="text"
            placeholder="username@site.com"
            className="input input-bordered w-full md:max-w-xs"
          />
          <input
            type="submit"
            className="btn btn-primary normal-case"
            value="Sign up for early access"
          />
        </form>
      </div>
    </div>
  )
}
