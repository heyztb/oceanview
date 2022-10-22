import Link from "next/link"

const FourOhFour = () => {
  return (
    <div className="hero h-[80vh]">
      <div className="hero-content flex-col">
        <h1 className="text-3xl text-center">404</h1>
        <p className="text-center">Lost at sea?</p>
        <Link href="/">
          <a className="btn btn-primary normal-case">Go back home</a>
        </Link>
      </div>
    </div>
  )
}

export default FourOhFour
