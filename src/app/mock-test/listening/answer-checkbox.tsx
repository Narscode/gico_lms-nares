"use client"

export default function AnswerSheet() {
  const questions = [
    { number: 21, text: "School House" },
    { number: 22, text: "School House" },
    { number: 23, text: "School House" },
    { number: 24, text: "School House" },
  ]

  const answerOptions = ["A", "B", "C", "D", "E", "F", "G", "H"]

  return (
    <div className="w-full h-full relative bg-[#FCFCFD] shadow-sm overflow-hidden rounded-[20px] border border-[#E3E8EF]">
      {/* Header Section */}
      <div className="w-full h-[67px] px-5 pt-[10px] absolute left-0 top-0 flex flex-col justify-start items-start gap-[5px]">
        <div className="self-stretch h-[26px] flex justify-center flex-col text-[#121926] text-lg font-bold leading-[27px] font-['Plus_Jakarta_Sans']">
          Answer
        </div>
        <div className="self-stretch h-[19px] text-[#121926] text-xs font-normal leading-[18px] font-['Plus_Jakarta_Sans']">
          Fill in the answer in the box provided below
        </div>
        <div className="self-stretch h-0 border-t border-black/10"></div>
      </div>

      {/* Answer Sheet Table */}
      <div className="w-[580px] h-[248px] left-[37px] top-[92px] absolute bg-white overflow-hidden rounded-[10px] border border-[#E3E8EF]">
        {/* Table Header */}
        <div className="w-[580px] h-[41px] left-0 top-0 absolute bg-[#EFF4FF] rounded-t-[10px] border-b border-[#E3E8EF]">
          {/* Column Headers */}
          <div className="left-[27px] top-3 absolute text-center flex justify-center flex-col text-[#121926] text-xs font-bold leading-[18px] font-['Plus_Jakarta_Sans']">
            No
          </div>
          <div className="left-[175px] top-3 absolute text-center flex justify-center flex-col text-[#121926] text-xs font-bold leading-[18px] font-['Plus_Jakarta_Sans']">
            A
          </div>
          <div className="left-[227px] top-3 absolute text-center flex justify-center flex-col text-[#121926] text-xs font-bold leading-[18px] font-['Plus_Jakarta_Sans']">
            B
          </div>
          <div className="left-[278px] top-3 absolute text-center flex justify-center flex-col text-[#121926] text-xs font-bold leading-[18px] font-['Plus_Jakarta_Sans']">
            C
          </div>
          <div className="left-[331px] top-3 absolute text-center flex justify-center flex-col text-[#121926] text-xs font-bold leading-[18px] font-['Plus_Jakarta_Sans']">
            D
          </div>
          <div className="left-[383px] top-3 absolute text-center flex justify-center flex-col text-[#121926] text-xs font-bold leading-[18px] font-['Plus_Jakarta_Sans']">
            E
          </div>
          <div className="left-[435px] top-3 absolute text-center flex justify-center flex-col text-[#121926] text-xs font-bold leading-[18px] font-['Plus_Jakarta_Sans']">
            F
          </div>
          <div className="left-[486px] top-3 absolute text-center flex justify-center flex-col text-[#121926] text-xs font-bold leading-[18px] font-['Plus_Jakarta_Sans']">
            G
          </div>
          <div className="left-[539px] top-3 absolute text-center flex justify-center flex-col text-[#121926] text-xs font-bold leading-[18px] font-['Plus_Jakarta_Sans']">
            H
          </div>
        </div>

        {/* Table Rows */}
        {questions.map((question, index) => (
          <div
            key={question.number}
            className="p-1 left-[26px] absolute border-b border-[#E3E8EF] justify-start items-center gap-[37px] inline-flex"
            style={{ top: `${53 + index * 46}px` }}
          >
            {/* Question Number and Text */}
            <div className="pt-1 pb-1 pr-1 justify-start items-center gap-[10px] flex">
              <div className="justify-center flex flex-col text-black text-xs font-normal leading-[18px] font-['Plus_Jakarta_Sans']">
                {question.number}
              </div>
              <div className="justify-center flex flex-col text-black text-xs font-normal leading-[18px] font-['Plus_Jakarta_Sans']">
                {question.text}
              </div>
            </div>

            {/* Answer Bubbles */}
            {answerOptions.map((option) => (
              <div key={option} className="w-[15px] h-[15px] bg-[#9AA4B2] pointer-events-none" />
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}