import { FC, FormEvent, useState } from "react"
import { sendEarlyAccessEmail } from "utils/email"
import pkg from "../../../package.json"

export const HomeView: FC = ({}) => {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    fetch(`api/email?address=${userEmail}`)
    setUserEmail("")
  }

  const [userEmail, setUserEmail] = useState("")

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

        <form
          className="form-control justify-center w-full md:max-w-xs space-y-2"
          onSubmit={handleSubmit}
        >
          <input
            type="email"
            placeholder="username@site.com"
            value={userEmail}
            className="input input-bordered w-full md:max-w-xs"
            onChange={(event) => setUserEmail(event.target.value)}
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
