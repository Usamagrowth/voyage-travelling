import React, { useState } from 'react'
import { BsStarFill, BsShare, BsCheckCircle, BsChevronDoubleRight } from 'react-icons/bs'
import GlobalHeader from '../Components/GlobalHeader'

const ActivitiesDetailsPage = () => {
  const [showMobileNav, setShowMobileNav] = useState(false)

  const toggleMobileNav = () => {
    setShowMobileNav(!showMobileNav)
  }

  return (
    <div>
      <GlobalHeader headerTitle="Activities Details" headerLink="Activities Details" />

      <section className="py-16">
        <div className="max-w-screen-xl mx-auto px-4 md:px-6">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
            <div className="max-w-3xl">
              <h3 className="text-3xl font-semibold">The Montcalm At Brewery Japan City</h3>
              <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-6 text-sm text-slate-600">
                <span>(16 Reviews)</span>
                <span className="flex items-center gap-1 text-amber-500">
                  <BsStarFill /> <BsStarFill /> <BsStarFill /> <BsStarFill /> <BsStarFill />
                </span>
                <span>California</span>
              </div>
            </div>

            <button className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#1CA8CB] px-5 py-3 text-sm font-medium text-[#1CA8CB]">
              Share <BsShare />
            </button>
          </div>

          <div className="mt-10 border-t border-b border-slate-200 py-8">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
              <div className="flex flex-col gap-2 rounded-xl bg-slate-50 p-4">
                <span className="text-sm text-slate-500">Location</span>
                <strong className="text-base">California</strong>
              </div>
              <div className="flex flex-col gap-2 rounded-xl bg-slate-50 p-4">
                <span className="text-sm text-slate-500">Activities Type</span>
                <strong className="text-base">Adventure</strong>
              </div>
              <div className="flex flex-col gap-2 rounded-xl bg-slate-50 p-4">
                <span className="text-sm text-slate-500">Active Day</span>
                <strong className="text-base">Feb 6 - 6</strong>
              </div>
              <div className="flex flex-col gap-2 rounded-xl bg-slate-50 p-4">
                <span className="text-sm text-slate-500">Traveler</span>
                <strong className="text-base">1</strong>
              </div>
              <div className="flex items-center justify-end">
                <button className="rounded-full border border-[#1CA8CB] bg-white px-5 py-3 text-sm font-semibold text-[#1CA8CB]">
                  Explore flight
                </button>
              </div>
            </div>
          </div>

          <div className="mt-12 grid gap-10">
            <div className="space-y-6">
              <h3 className="text-4xl font-semibold">Overview</h3>
              <p className="max-w-3xl text-slate-600 leading-8">
                Consectetur adipisicing elit sed do eiusmod tempor is incididunt ut labore et dolore of magna aliqua. Ut enim ad minim veniam made of owl the quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea dolor commodo consequat duis aute irure and dolor in reprehenderit. Nullam semper quam mauris nec mollis felis aliquam eu ut non gravida mi phasellus.
              </p>
            </div>

            <div className="grid gap-6 lg:grid-cols-2">
              <div className="space-y-4">
                <h4 className="text-2xl font-semibold">Top Highlights</h4>
                <div className="space-y-3">
                  <div className="flex gap-3 items-start"><BsCheckCircle className="mt-1 text-cyan-500" /><p>Duis ultricies sapien a volutpat varius. Maecenas.</p></div>
                  <div className="flex gap-3 items-start"><BsCheckCircle className="mt-1 text-cyan-500" /><p>Blandit enim. Pellentesque ultrices, justo non.</p></div>
                  <div className="flex gap-3 items-start"><BsCheckCircle className="mt-1 text-cyan-500" /><p>Nunc in quam in quam placerat rhoncus quis.</p></div>
                  <div className="flex gap-3 items-start"><BsCheckCircle className="mt-1 text-cyan-500" /><p>Laoreet sagittis posuere, dolor nibh imperdiet.</p></div>
                  <div className="flex gap-3 items-start"><BsCheckCircle className="mt-1 text-cyan-500" /><p>Condimentum lacinia nisl vitae vehicula.</p></div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex gap-3 items-start"><BsCheckCircle className="mt-1 text-cyan-500" /><p>Duis ultricies sapien a volutpat varius. Maecenas.</p></div>
                <div className="flex gap-3 items-start"><BsCheckCircle className="mt-1 text-cyan-500" /><p>Blandit enim. Pellentesque ultrices, justo non.</p></div>
                <div className="flex gap-3 items-start"><BsCheckCircle className="mt-1 text-cyan-500" /><p>Nunc in quam in quam placerat rhoncus quis.</p></div>
                <div className="flex gap-3 items-start"><BsCheckCircle className="mt-1 text-cyan-500" /><p>Laoreet sagittis posuere, dolor nibh imperdiet.</p></div>
                <div className="flex gap-3 items-start"><BsCheckCircle className="mt-1 text-cyan-500" /><p>Condimentum lacinia nisl vitae vehicula.</p></div>
              </div>
            </div>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { label: 'Accommodation', value: '5 Star Hotel' },
              { label: 'Admission Free', value: 'No' },
              { label: 'Arrival City', value: 'London' },
              { label: 'Language', value: 'English' },
              { label: 'Hotel Transfer', value: 'Available' },
              { label: 'Next Tour', value: 'Available' },
              { label: '01 Guide', value: 'Guided' },
              { label: 'Maximum Age', value: '60' },
            ].map((item) => (
              <div key={item.label} className="rounded-xl bg-stone-100 p-5">
                <p className="text-sm text-slate-500">{item.label}</p>
                <p className="mt-2 font-medium">{item.value}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 grid gap-8 lg:grid-cols-2">
            <div className="h-[340px] w-full rounded-xl bg-cover bg-center bg-[url('./assets/activitDetailBallonsiting.jpg)']" />
            <div>
              <h2 className="text-2xl font-semibold mb-4">Included And Excluded</h2>
              <div className="space-y-4">
                {[
                  'Duis ultricies sapien a volutpat varius. Maecenas.',
                  'Blandit enim. Pellentesque ultrices, justo non.',
                  'Nunc in quam in quam placerat rhoncus quis.',
                  'Duis ultricies sapien a volutpat varius. Maecenas.',
                  'Blandit enim. Pellentesque ultrices, justo non.',
                  'Nunc in quam in quam placerat rhoncus quis.',
                ].map((text, idx) => (
                  <div key={idx} className="flex gap-3 items-start">
                    <BsCheckCircle className="mt-1 text-cyan-500" />
                    <p>{text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-10 space-y-6">
            <h3 className="text-3xl font-semibold">Tour Plan</h3>
            {[
              'How Do I Book A Tour With Your Agency?',
              'What Payment Methods Do You Accept?',
              'Can I Customize My Travel Itinerary?',
              'What Is Your Cancellation Policy?',
            ].map((question, idx) => (
              <div key={idx} className="rounded-xl border border-slate-200 p-5">
                <button
                  type="button"
                  onClick={toggleMobileNav}
                  className="flex w-full items-center justify-between text-left gap-4"
                >
                  <span className="font-semibold">{question}</span>
                  <BsChevronDoubleRight className="text-black" />
                </button>
                {showMobileNav && (
                  <div className="mt-4 grid gap-6 lg:grid-cols-2">
                    <p className="text-slate-600">Nullam faucibus eleifend mi eu varius. Integer vel tincidunt massa, quis semper odio. Mauris et mollis quam.</p>
                    <div className="h-[220px] w-full rounded-xl bg-cover bg-center bg-[url('./asset/thai-rw3.jpg)']" />
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-10">
            <h2 className="text-3xl font-semibold">View In Map</h2>
            <div className="mt-4 h-[420px] w-full rounded-xl bg-zinc-200" />
          </div>

          <div className="mt-10 space-y-6">
            <h2 className="text-2xl font-semibold">Client Review</h2>
            <div className="grid gap-6 lg:grid-cols-3">
              {Array.from({ length: 3 }).map((_, idx) => (
                <div key={idx} className="rounded-xl bg-white p-6 shadow-sm">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="h-14 w-14 rounded-full bg-slate-200" />
                    <div>
                      <div className="flex gap-1 text-[#ffb700]">
                        <BsStarFill /><BsStarFill /><BsStarFill /><BsStarFill /><BsStarFill />
                      </div>
                      <h3 className="mt-2 text-xl font-semibold">Shikhon Islam</h3>
                    </div>
                  </div>
                  <p className="text-slate-600">Neque porro est qui dolorem ipsum quia quaed inventore veritatis et quasi architecto var sed efficitur turpis gilla sed sit amet finibus eros.</p>
                  <div className="mt-4 flex justify-end text-sm font-medium text-[#1CA8CB]">Reply</div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10 rounded-xl bg-slate-200 p-8">
            <h3 className="text-2xl font-semibold">Add Your Review</h3>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {Array.from({ length: 6 }).map((_, idx) => (
                <div key={idx} className="flex items-center gap-3 rounded-xl bg-white p-4">
                  <h2 className="font-semibold">Services</h2>
                  <div className="flex gap-1 text-[#ffb700]">
                    <BsStarFill /><BsStarFill /><BsStarFill /><BsStarFill /><BsStarFill />
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <input className="w-full rounded-xl border border-slate-300 bg-white p-4" type="text" placeholder="Your Name" />
                <input className="w-full rounded-xl border border-slate-300 bg-white p-4" type="text" placeholder="Your Phone" />
              </div>
              <input className="w-full rounded-xl border border-slate-300 bg-white p-4" type="text" placeholder="Your Email" />
              <textarea className="w-full rounded-xl border border-slate-300 bg-white p-4 min-h-[160px]" name="comment" placeholder="Your Comments..." />
            </div>
          </div>

          <div className="mt-10 rounded-xl border border-slate-200 bg-white p-6 lg:max-w-md">
            <h3 className="text-xl font-semibold mb-4">Contact For Booking</h3>
            <div className="space-y-4">
              <input className="w-full rounded-xl border border-slate-300 bg-gray-100 p-4" type="text" placeholder="Your Name" />
              <input className="w-full rounded-xl border border-slate-300 bg-gray-100 p-4" type="text" placeholder="Your Phone" />
              <textarea className="w-full rounded-xl bg-gray-100 p-4 min-h-[120px]" name="call" placeholder="Type Comments..." />
            </div>
            <button className="mt-5 w-full rounded-xl border border-[#1CA8CB] bg-[#1CA8CB] px-5 py-3 text-white">Send Now</button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ActivitiesDetailsPage
