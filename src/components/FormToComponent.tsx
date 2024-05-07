import { useEffect, useState } from 'react'
import { Form, FormsRouter } from '../utils/types'

interface FormToComponentProps {
  forms: Form[]
}

const FormToComponent = ({ forms }: FormToComponentProps) => {
  const [components, setComponents] = useState<JSX.Element[] | null>(null)

  useEffect(() => {
    setComponents(processData(forms))
  }, [forms])

  const formsRouter: FormsRouter = {
    question: (form: Form) => {
      return (
        <div className="relative h-11 w-full min-w-[200px] group">
          <input
            placeholder="Answer"
            className="peer h-full w-full outline-none border-b border-gray-400 bg-transparent pt-4 pb-1.5 font-sans text-lg font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 placeholder:opacity-0 focus:placeholder:opacity-100"
          />
          <label className="group-hover:text-black after:content[''] pointer-events-none absolute left-0  -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-sm font-normal leading-tight text-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-gray-500 after:transition-transform after:duration-300 peer-placeholder-shown:text-lg peer-placeholder-shown:leading-[3.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-sm peer-focus:leading-[0.2] peer-focus:text-gray-900 peer-focus:after:scale-x-100 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
            {form.content as string}
          </label>
        </div>
      )
    },
    nameOfContact: (form: Form) => {
      return (
        <div className="w-72">
          <div className="relative w-full min-w-[200px] h-10">
            <div className="absolute grid w-5 h-5 place-items-center text-blue-gray-500 top-2/4 right-3 -translate-y-2/4">
              <svg
                viewBox="0 0 26 26"
                xmlSpace="preserve"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              >
                <path
                  d="M24.4970703,19.2363281c-0.4033203-0.6582031-1.0292969-1.4248047-1.7646484-2.1591797  c-0.5322266-0.5322266-2.359375-2.2675781-3.5341797-2.2675781c-0.3769531,0-0.6162109,0.1611328-0.75,0.2949219  l-1.5644531,1.5634766c-0.0263672,0.0263672-0.1103516,0.0566406-0.2617188,0.0566406  c-0.8681641,0-2.7089844-0.9609375-4.5478516-2.7988281c-2.4521484-2.453125-3.0419922-4.5097656-2.7421875-4.8095703  l1.5625-1.5634766c0.1347656-0.1347656,0.2958984-0.3740234,0.2958984-0.75  c0.0009766-1.1757813-1.7353516-3.0029297-2.2675781-3.5351563C8.3916016,2.7353516,6.5654297,1,5.3886719,1  c-0.3759766,0-0.6152344,0.1601563-0.75,0.2949219L1.5107422,4.4228516  C0.5869141,5.3457031,0.9238281,7.1513672,2.5126953,9.7890625C3.8916016,12.078125,6.0742188,14.7617188,8.65625,17.34375  C13.2363281,21.9238281,17.8740234,25.0009766,20.1962891,25c0.578125,0,1.0419922-0.171875,1.3808594-0.5107422  l3.1279297-3.1279297C25.3818359,20.6845703,24.7158203,19.5947266,24.4970703,19.2363281z M20.5166016,23.4287109  C20.4814453,23.4628906,20.3798828,23.5,20.1962891,23.5c-1.5810547,0-5.7910156-2.5292969-10.4794922-7.2167969  c-2.4990234-2.4990234-4.6005859-5.0800781-5.9189453-7.2685547C2.3125,6.5498047,2.4521484,5.6025391,2.5712891,5.4833984  L5.515625,2.5390625C5.8994141,2.6875,6.7890625,3.2539063,7.8623047,4.328125s1.640625,1.9628906,1.7890625,2.3466797  L8.2714844,8.0556641c-1.4384766,1.4384766,0.4130859,4.6005859,2.7421875,6.9306641  c1.9980469,1.9980469,4.1474609,3.2382813,5.6083984,3.2382813c0.6826172,0,1.0957031-0.2695313,1.3222656-0.4960938  l1.3808594-1.3798828c0.3837891,0.1484375,1.2724609,0.7158203,2.3466797,1.7890625  c1.0732422,1.0732422,1.640625,1.9628906,1.7890625,2.3466797L20.5166016,23.4287109z"
                  fill="#1D1D1B"
                />
              </svg>
            </div>
            <input
              className="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border-2 placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] !pr-9 border-blue-gray-200 focus:border-gray-900"
              placeholder=" "
            />
            <label className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-gray-900 after:border-blue-gray-200 peer-focus:after:!border-gray-900">
              {form.content as string}
            </label>
          </div>
        </div>
      )
    },
  }

  const processData = (forms: Form[]): JSX.Element[] => {
    return forms.map((form) => {
      return formsRouter[form.type](form)
    })
  }

  return (
    <div className="bg-gray-100 rounded-md shadow-2xl sm:w-1/2 mx-auto mb-10 py-5 grid grid-cols-1 place-items-center">
      {components?.map((component, index) => (
        <div key={index} className="my-5">
          {component}
        </div>
      ))}
    </div>
  )
}

export default FormToComponent
