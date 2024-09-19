interface IBenefitCard {
    index: number
    title: string
    description: string
}

export const BenefitCard = ({index, title, description}: IBenefitCard) => {
    return (
        <div className="">
            <div className="flex flex-row items-start flex-grow-0 gap-5">
                <span className="block p-2 text-white font-[700] rounded-[10px] bg-[#5C5FE4] border-[2px] border-solid border-[rgba(243,243,244,0.15)]">
                    0{index+1}
                </span>

                <div className="-mt-1">
                <h3 className="text-[20px] text-[#F3F3F4] font-[500]">{title}</h3>
                <p className="font-poppins text-[#787878] mt-5">{description}</p>
                    </div> 
                
            </div>
        </div>
    )
}

