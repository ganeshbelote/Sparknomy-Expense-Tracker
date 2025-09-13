import Invoice from './components/Invoice'
import StatTab from './components/StatTab'
import TimeBtn from './components/TimeBtn'
type InvoiceStatus =
  | 'Unpaid'
  | 'Disputed'
  | 'Paid'
  | 'Partially Paid'
  | 'Overdue'
  | 'Awaited'
  | 'Draft'
  | null

interface InvoiceData {
  title: string
  transaction: string
  status: InvoiceStatus
}

const Invoices: InvoiceData[] = [
  {
    title: 'Client Name',
    transaction: '₹1,25,000, Due: 2024-06-15',
    status: null
  },
  {
    title: 'Client Name',
    transaction: '₹1,25,000, Due: 2024-06-15',
    status: 'Unpaid'
  },
  {
    title: 'Income Trend',
    transaction: '₹1,25,000, Due: 2024-06-15',
    status: 'Disputed'
  },
  {
    title: 'Income Trend',
    transaction: '₹1,25,000, Due: 2024-06-15',
    status: 'Paid'
  },
  {
    title: 'Income Trend',
    transaction: '₹1,25,000, Due: 2024-06-15',
    status: 'Paid'
  },
  {
    title: 'Income Trend',
    transaction: '₹1,25,000, Due: 2024-06-15',
    status: 'Partially Paid'
  },
  {
    title: 'Income Trend',
    transaction: '₹1,25,000, Due: 2024-06-15',
    status: 'Paid'
  },
  {
    title: 'Income Trend',
    transaction: '₹1,25,000, Due: 2024-06-15',
    status: 'Overdue'
  },
  {
    title: 'Income Trend',
    transaction: '₹1,25,000, Due: 2024-06-15',
    status: 'Awaited'
  },
  {
    title: 'Income Trend',
    transaction: '₹1,25,000, Due: 2024-06-15',
    status: 'Draft'
  },
  {
    title: 'Income Trend',
    transaction: '₹1,25,000, Due: 2024-06-15',
    status: 'Paid'
  }
]

function App () {
  return (
    <>
      <div className='px-6 h-16 flex items-center justify-between'>
        <button className='flex gap-1'>
          <img src='/svg/back.svg' alt='back' />
          Back
        </button>
        <h2 className='font-semibold'>Dashboard</h2>
        <div className='profile h-10 w-10 rounded-full bg-blue-500'></div>
      </div>
      <div className='px-4 lg:px-6 bg-white rounded-t-4xl'>
        <div className='py-4 lg:py-6 flex lg:flex-nowrap md:flex-wrap flex-wrap items-start justify-center lg:gap-5'>
          <div className='create-invoice pt-0 px-0 md:px-4 lg:px-4 lg:pt-4 p-4 w-full lg:w-3/5 flex items-center flex-col gap-3 order-1 lg:order-2'>
            <div className='p-6 w-full min-w-64 lg:h-68 rounded-4xl flex flex-col items-center justify-center bg-[#F2F2F2] '>
              <button
                className='cursor-pointer hover:scale-105 active:scale-100'
                type='button'
              >
                <img src='/svg/addBtn.svg' alt='add-invoice-btn' />
              </button>
              <h1 className='mt-5 text-2xl font-bold bg-gradient-to-b from-[#DD2A7B] via-[#9747FF] to-[#334CCA] bg-clip-text text-transparent'>
                Create New Invoice
              </h1>
              <p className='mt-0.5 text-sm text-[#999999] font-normal'>
                Start by creating and sending new invoice
              </p>
            </div>
            <p className='text-sm text-[#8134AF] font-normal text-center'>
              Or Upload an existing invoice and set payment reminder
            </p>
            <div className='p-4 rounded-2xl border-2 border-[#F2F2F2] text-[#999999] flex flex-col gap-3'>
              <div className='w-full flex justify-between'>
                <span className='font-semibold'>Time Period</span>
                <span>dd:mm:yyyy-dd:mm:yyyy</span>
              </div>
              <div className='flex flex-wrap gap-2'>
                <TimeBtn>1Month</TimeBtn>
                <TimeBtn>3Months</TimeBtn>
                <TimeBtn>1Year</TimeBtn>
                <TimeBtn>Custom</TimeBtn>
              </div>
            </div>
          </div>

          <div className='stats pt-0 px-0 md:px-4 lg:px-4 lg:pt-4 p-4 w-full lg:w-[30%] flex flex-col gap-3 order-2 lg:order-1'>
            <StatTab Title='Total Earnings' Amount={125000} />
            <div className='flex md:flex-row lg:flex-col gap-3'>
              <StatTab Title='Payment Awaited' Amount={25000} />
              <StatTab Title='Payment Overdue' Amount={25000} />
            </div>
          </div>

          <div className='trend-invoices pt-0 px-0 md:px-4 lg:px-4 lg:pt-4 p-4 w-full lg:w-[30%] flex flex-col gap-3 order-3 lg:order-3'>
            <div className='min-w-64 w-full min-h-76 text-[#6B7280] p-4 rounded-2xl border-2 border-[#F2F2F2] flex flex-col items-center gap-1'>
              <h2 className='font-semibold self-start'>Income Trend</h2>
              <p className='text-sm self-start'>
                Your monthly income and growth for the last 6 months.
              </p>
              <img
                className='sm:w-1/2 md:w-1/2 lg:w-full'
                src='/chart.png'
                alt='trend-graph'
              />
            </div>
          </div>
        </div>

        <div className='invoices flex flex-col'>
          <div className='accordion-tab p-2 lg:px-8 font-semibold text-[#999999] flex items-center justify-between'>
            <h2>Your Invoices</h2>
            <img src='/svg/arrow.svg' alt='arrow' />
          </div>
          <div className='invoice-wrapper p-4 lg:px-4 md:px-4 px-0 flex flex-wrap items-center justify-center gap-4'>
            {Invoices.map((item, i) => (
              <Invoice
                key={i}
                Title={item.title}
                Transaction={item.transaction}
                Status={item.status}
              />
            ))}
          </div>
        </div>
      </div>
      <div className='pt-8 pb-16 bg-white flex gap-1 flex-col items-center justify-center text-center'>
        <img src='/svg/logo.svg' alt='logo' />
        <p className='text-sm text-[#999999] font-normal'>
          sparking the creator economy
        </p>
      </div>
    </>
  )
}

export default App
