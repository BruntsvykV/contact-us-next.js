import Image from 'next/image'

const Home = () => {
  return (
    <main className="flex min-h-screen flex-col space-y-10 justify-center items-center">
      <span className={"font-['Poppins'] font-[600] text-16 md:text-36 leading-26"}>
        The project was created out with
      </span>

      <div className="relative flex place-items-center">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>
    </main>
  )
}

export default Home;
