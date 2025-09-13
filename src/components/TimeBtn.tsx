const TimeBtn = ({ children } : { children : string }) => {
  return (
    <>
      <button
        type='button'
        className='overflow-hidden cursor-pointer px-3 py-1 rounded-2xl border-2 border-[#F2F2F2] hover:bg-gradient-to-b active:bg-gradient-to-b from-[#DD2A7B] via-[#9747FF] to-[#334CCA] bg-clip-text hover:text-transparent active:text-transparent flex flex-wrap items-center gap-1'
      >
        {children == "Custom" &&<img src="/svg/calendar.svg" alt="calendar" />}
        {children}
        {children == "1Year" &&<img src="/svg/crown.svg" alt="crown" />}
      </button>
    </>
  )
}

export default TimeBtn
