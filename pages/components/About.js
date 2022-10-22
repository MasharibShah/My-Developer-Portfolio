import React from 'react'

const About = () => {
  return (
    <div>

<div className="items- py-12 flex flex-wrap">
    <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
      <div className="pr-12">
        <h1 className="text-black font-semibold text-5xl">
        About Me
        </h1>
        <p className="mt-4 text-lg text-black-300">
          This is a simple example of a Landing Page you can build using
          Tailwind Starter Kit. It features multiple CSS components
          based on the Tailwindcss design system.
        </p>
      </div>
    </div>
  </div>

<div class="container mx-auto mb-6 px-4">
          <div class="items-center flex flex-wrap">
            <div class="w-full md:w-4/12 ml-auto mr-auto px-4 ">
              <img
                alt="..."
                class="max-w-full rounded-lg shadow-lg bg-pink-600"
                src="/image/pic1.png"
              />
            </div>
            <div class="w-full md:w-5/12 ml-auto mr-auto px-4">
              <div class="md:pr-12">
                <div class="text-pink-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-pink-300">
                  <i class="fas fa-rocket text-xl"></i>
                </div>
                <h3 className="text-3xl mb-2 font-semibold leading-normal">
      Working with us is a pleasure
    </h3>
    <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700">
      Don't let your uses guess by attaching tooltips and popoves to
      any element. Just make sure you enable them first via
      JavaScript.
    </p>
    <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-gray-700">
      The kit comes with three pre-built pages to help you get started
      faster. You can change the text and images and you're good to
      go. Just make sure you enable them first via JavaScript.
    </p>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default About



