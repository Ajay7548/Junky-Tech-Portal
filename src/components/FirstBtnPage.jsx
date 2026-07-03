import React from 'react'

const FirstBtnPage = ({text1,text2}) => {
  return (
    <div>
        <div className="px-3 py-2 w-fit rounded-full bg-blue-100 text-center">
        <p className="text-sm font-semibold text-blue-400 text-center">
          {text1} {text2}
        </p>
      </div>
    </div>
  )
}

export default FirstBtnPage