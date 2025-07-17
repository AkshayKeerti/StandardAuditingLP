import React from 'react';

const CallToAction = () => {
  return (
    <section className="section-padding bg-vigor-purple">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Transform Your Finances
            </h2>
            <p className="text-xl text-gray-200">
              Contact Us Today for Premier UAE Taxation Services with Vigor Accounts
            </p>
            <button className="btn-primary bg-white text-vigor-purple hover:bg-gray-100">
              Contact Us
            </button>
          </div>

          {/* Right Content */}
          <div className="relative">
            {/* Man Image */}
            <div className="relative z-10">
              <div className="w-80 h-96 mx-auto bg-gray-300 rounded-lg flex items-center justify-center">
                <span className="text-gray-600 text-lg">Professional Man in Suit</span>
              </div>
            </div>

            {/* Chat Bubbles */}
            <div className="absolute top-8 -left-4 z-20">
              {/* First Chat Bubble */}
              <div className="bg-vigor-yellow text-gray-800 p-3 rounded-lg shadow-lg mb-2 max-w-xs">
                <p className="text-sm">Hi there! my name is Eman</p>
              </div>
              
              {/* Second Chat Bubble */}
              <div className="bg-white text-gray-800 p-3 rounded-lg shadow-lg max-w-xs">
                <p className="text-sm">How can I help you today?</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction; 