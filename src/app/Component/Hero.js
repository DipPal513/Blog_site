

const Hero = () => {
  return (
    <div className='hero-section '>
      <div className="max-w-screen-xl pt-16 pb-10 mx-auto relative">
        <div className="hero-upper mb-10">
          <h2 className="text-4xl font-bold mb-3">
            Editor's Pick
          </h2>
          <p className='text-xl font-normal text-gray-400'>Discover the most outstanding articles in life</p>
        </div>

        <div className="flex justify-end relative pt-10">
          <div className="CategorybadgeList z-10 top-16 left-16 md:absolute">
            <div className=" rounded-xl space-y-3 ml-5 shadow-xl p-10 backdrop-filter backdrop-blur-xl">
              <div className="">
                <a href="https://www.google.com" className=" hover:text-white text-sm text-red-700 bg-yellow-300 rounded-full py-1 px-2">Indrustrial</a>
                <h2 className='text-black mt-2 text-base'>Lenovo’s smarter devices stoke professional passions</h2>

              </div>
              <div className="flex">
                <img src="" alt="" />
                <div className="">
                  <p className="text-md text-black">Foulcher Nathanil</p>
                  <p className="text-gray-400">May 20, 2021</p>
                </div>

              </div>
              <div className="flex justify-between">
                <div className="flex">
                  <div>
                    logo
                    <p>34</p>
                  </div>
                  <div className="">
                  <i class="fi fi-brands-instagram"></i>
                    <p>110</p>
                  </div>
                </div>
                pinLogo
              </div>
            </div>
            </div>

            <div className="relative">
              <img className='  object-cover rounded-3xl' style={{maxWidth:"768px"}} src="https://ncmaz-nextjs.vercel.app/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1440778303588-435521a205bc%3Fixid%3DMnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8%26ixlib%3Drb-1.2.1%26auto%3Dformat%26fit%3Dcrop%26w%3D1950%26q%3D80&w=1080&q=75" alt="img" />
            </div>
          </div>

      </div>
    </div>
  )
}

export default Hero