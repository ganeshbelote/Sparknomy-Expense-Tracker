const InvoiceDetails = {
  Paid: {
    color: '#34C759',
    background: '#9CEFB8'
  },
  Unpaid: {
    color: '#999999',
    background: '#F2F2F2'
  },
  Draft: {
    color: '#999999',
    background: '#F2F2F2'
  },
  'Partially Paid': {
    color: '#FFCC00',
    background: '#FFFAE5'
  },
  Awaited: {
    color: '#FFCC00',
    background: '#FFFAE5'
  },
  Disputed: {
    color: '#FF2D55',
    background: '#FFB1B1'
  },
  Overdue: {
    color: '#FF2D55',
    background: '#FFB1B1'
  },
  null: null
}

const Invoice = ({
  Title,
  Transaction,
  Status = null
}: {
  Title: string
  Transaction: string
  Status?:
    | 'Unpaid'
    | 'Paid'
    | 'Partially Paid'
    | 'Disputed'
    | 'Overdue'
    | 'Draft'
    | 'Awaited'
    | null
}) => {
  return (
    <div className='invoice shrink-0 flex gap-8 items-center justify-between w-fit min-w-[340px] p-4 border-2 border-[#F2F2F2] rounded-2xl overflow-hidden'>
      <div className='left'>
        <h2 className='name text-[#6B7280] font-medium'>{Title}</h2>
        <p className='text-[12px] text-[#999999] font-normal'>{Transaction}</p>
      </div>
      <div className='right'>
        {Status ? (
          <div className="flex gap-1">
            <div
            style={{
              background: InvoiceDetails[Status].background,
              color: InvoiceDetails[Status].color
            }}
            className='py-1 px-3.5 rounded-3xl'
          >
            {Status}
          </div>
          {(Status == "Awaited" || Status == "Overdue") && <img src="/svg/bell.svg" alt="notification" />}
          {(Status == "Draft") && <img src="/svg/pen.svg" alt="edit" />}
          </div>
        ) : (
          <button className='cursor-pointer py-2 px-2.5 lg:px-3.5 bg-[#8134AF] rounded-3xl text-nowrap flex flex-nowrap items-center text-white text-sm'>
            Update Status{' '}
            <span className='ml-1'>
              <img src='/svg/white-arrow.svg' alt='arrow' />
            </span>
          </button>
        )}
      </div>
    </div>
  )
}

export default Invoice
