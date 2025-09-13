import { useEffect, useState } from 'react'

const StatTab = ({ Title, Amount }: { Title: string; Amount: number }) => {
  const [isTotal, setIsTotal] = useState<boolean>(false)

  useEffect(() => {
    if (Title === 'Total Earnings') {
      setIsTotal(true)
    }
  }, [])

  return (
    <div
      className={`p-4 ${
        isTotal ? 'w-full' : 'w-1/2 md:w-1/2 lg:w-full'
      } border-2 border-[#F2F2F2] rounded-2xl overflow-hidden`}
    >
      <h2 className='text-[#999999] font-medium text-nowrap'>{Title}</h2>
      <h1 className={`mt-0.5 text-[#8134AF] ${isTotal ? 'text-2xl' : 'text-xl'} font-bold`}>
        ${Amount.toLocaleString('en-IN')}
      </h1>
    </div>
  )
}

export default StatTab
