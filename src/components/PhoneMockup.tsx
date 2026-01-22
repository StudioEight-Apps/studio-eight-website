const PhoneMockup = () => {
  return (
    <div className="relative w-[280px] h-[570px] md:w-[320px] md:h-[650px] lg:w-[360px] lg:h-[730px]">
      {/* Phone frame - black titanium style */}
      <div className="absolute inset-0 rounded-[45px] md:rounded-[50px] lg:rounded-[55px] shadow-2xl"
        style={{
          background: 'linear-gradient(145deg, #2a2a2a 0%, #1a1a1a 25%, #0d0d0d 50%, #1f1f1f 75%, #2d2d2d 100%)',
        }}
      >
        {/* Inner bezel */}
        <div 
          className="absolute inset-[2px] rounded-[43px] md:rounded-[48px] lg:rounded-[53px]"
          style={{
            background: 'linear-gradient(160deg, #252525 0%, #1a1a1a 50%, #0f0f0f 100%)',
          }}
        >
          {/* Screen area */}
          <div className="absolute inset-[8px] md:inset-[10px] bg-[#0a1628] rounded-[36px] md:rounded-[40px] lg:rounded-[44px] overflow-hidden">
            {/* Dynamic Island */}
            <div className="absolute top-3 left-1/2 -translate-x-1/2 w-[90px] md:w-[100px] lg:w-[110px] h-[28px] md:h-[32px] lg:h-[34px] bg-black rounded-full z-10" />
            
            {/* Status bar */}
            <div className="absolute top-3 left-6 right-6 flex justify-between items-center text-white text-xs z-20">
              <span className="font-medium">7:14</span>
              <div className="flex items-center gap-1">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 3C7.5 3 3.75 5.95 2.15 10.05C2.05 10.35 2.05 10.65 2.15 10.95C3.75 15.05 7.5 18 12 18C16.5 18 20.25 15.05 21.85 10.95C21.95 10.65 21.95 10.35 21.85 10.05C20.25 5.95 16.5 3 12 3Z" opacity="0.3"/>
                </svg>
                <div className="w-6 h-3 border border-white rounded-sm relative">
                  <div className="absolute inset-[1px] right-1 bg-white rounded-[1px]" />
                  <div className="absolute -right-[2px] top-1 w-[2px] h-1 bg-white rounded-r" />
                </div>
              </div>
            </div>
            
            {/* App content */}
            <div className="pt-16 px-4 text-white">
              <h2 className="text-2xl font-semibold mb-1">Trips</h2>
              <p className="text-white/60 text-sm mb-6">Manage your bookings</p>
              
              {/* Pending Requests */}
              <p className="text-[10px] text-white/40 font-medium tracking-wider mb-3">PENDING REQUESTS</p>
              <div className="bg-[#0d1c2e] rounded-2xl overflow-hidden mb-4">
                <div className="h-24 bg-gradient-to-br from-[#1a3a5c] to-[#0d1c2e] relative">
                  <div className="absolute top-2 right-2 bg-yellow-500/20 text-yellow-400 text-[10px] px-2 py-0.5 rounded-full flex items-center gap-1">
                    <span className="w-1.5 h-1.5 bg-yellow-400 rounded-full"></span>
                    Pending
                  </div>
                </div>
                <div className="p-3">
                  <h3 className="font-semibold text-sm">Gulfstream G550</h3>
                  <div className="flex items-center gap-2 text-xs text-white/60 mt-1">
                    <span>VNY</span>
                    <span className="text-yellow-400">✈</span>
                    <span>LAS</span>
                  </div>
                  <div className="flex items-center gap-1 text-[10px] text-white/40 mt-1">
                    <span>📅</span>
                    <span>Dec 27, 2024 · 2:30 PM PST</span>
                  </div>
                  <div className="flex items-center justify-between mt-3">
                    <span className="text-[10px] text-white/40">Awaiting confirmation</span>
                    <button className="text-[10px] border border-white/20 rounded-full px-3 py-1 text-white/70">💬 Message</button>
                  </div>
                </div>
              </div>
              
              {/* Confirmed Trips */}
              <p className="text-[10px] text-white/40 font-medium tracking-wider mb-3">CONFIRMED TRIPS</p>
              <div className="bg-[#0d1c2e] rounded-2xl overflow-hidden">
                <div className="h-20 bg-gradient-to-br from-[#2a4a6c] to-[#0d1c2e] relative">
                  <div className="absolute top-2 right-2 bg-green-500/20 text-green-400 text-[10px] px-2 py-0.5 rounded-full flex items-center gap-1">
                    <span className="w-1.5 h-1.5 bg-green-400 rounded-full"></span>
                    Confirmed
                  </div>
                </div>
                <div className="p-3">
                  <h3 className="font-semibold text-sm">Citation X</h3>
                  <div className="flex items-center gap-2 text-xs text-white/60 mt-1">
                    <span>TEB</span>
                    <span className="text-yellow-400">✈</span>
                    <span>MIA</span>
                  </div>
                  <div className="flex items-center gap-1 text-[10px] text-white/40 mt-1">
                    <span>📅</span>
                    <span>Dec 26, 2024 · 10:00 AM EST</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Home indicator */}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-[100px] md:w-[120px] lg:w-[130px] h-[4px] md:h-[5px] bg-white/40 rounded-full" />
          </div>
        </div>
      </div>
      
      {/* Side buttons */}
      <div 
        className="absolute left-[-2px] top-[100px] md:top-[110px] lg:top-[120px] w-[3px] h-[25px] md:h-[28px] rounded-l-sm"
        style={{ background: 'linear-gradient(180deg, #2a2a2a 0%, #1a1a1a 100%)' }}
      />
      <div 
        className="absolute left-[-2px] top-[135px] md:top-[148px] lg:top-[160px] w-[3px] h-[45px] md:h-[50px] rounded-l-sm"
        style={{ background: 'linear-gradient(180deg, #2a2a2a 0%, #1a1a1a 100%)' }}
      />
      <div 
        className="absolute left-[-2px] top-[190px] md:top-[208px] lg:top-[220px] w-[3px] h-[45px] md:h-[50px] rounded-l-sm"
        style={{ background: 'linear-gradient(180deg, #2a2a2a 0%, #1a1a1a 100%)' }}
      />
      <div 
        className="absolute right-[-2px] top-[150px] md:top-[165px] lg:top-[180px] w-[3px] h-[65px] md:h-[75px] rounded-r-sm"
        style={{ background: 'linear-gradient(180deg, #2a2a2a 0%, #1a1a1a 100%)' }}
      />
    </div>
  );
};

export default PhoneMockup;
