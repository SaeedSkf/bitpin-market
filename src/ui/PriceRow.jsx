import { formatCurrency } from "../utils/currencyFormatter";

const PriceRow = ({ firstImage, secondImage, title, price, currency, code1, code2 }) => {
    return (
        <div className="flex gap-5 px-2 items-center border-b border-gray-700 py-5">
            <div className="relative min-w-12">
                <img src={firstImage} className="w-10 h-10 rounded-full " />
                <img src={secondImage} className={`absolute -bottom-1 -right-1 w-4 h-4 rounded-full ${code2 === 'USDT' ? 'bg-[#209f79]' : 'bg-white'}`} />
            </div>

            <div className='min-w-36'>
                <p>{title}</p>
                <p className='text-sm text-gray-400'>{`${code1} /${code2}`}</p>
            </div>

            <div className='min-w-36'>
                <p>{formatCurrency(price, code2)}</p>
                <p className='text-sm text-gray-400'>{currency}</p>
            </div>

            <div className='min-w-36 grow text-left'>
                <button className='px-2 py-1 font-bold text-primary'>
                    اطلاعات بیشتر
                </button>
            </div>
        </div>
    )
}

export default PriceRow