import { useState } from 'react'
import createForm from '../api/form/createForm'
import { CreateFormStatus, Form } from '../utils/types'
import StatusNotification from './StatusNotification'
import FormToComponent from './FormToComponent'

const App = () => {
  const [description, setDescription] = useState<string>(
    'form for students labs',
  )
  const [data, setData] = useState<Form[] | null>(null)

  const [createFormStatus, setCreateFormStatus] = useState<CreateFormStatus>({
    text: '',
    status: 'end',
  })

  const changeStatusWithEnd = (status: CreateFormStatus) => {
    setCreateFormStatus(status)
    if (status.status !== 'loading') {
      setTimeout(() => {
        setCreateFormStatus({ text: '', status: 'end' })
      }, 3000)
    }
  }

  const handleInputDescriptionChange = (
    e: React.ChangeEvent<HTMLInputElement>,
  ): void => {
    setDescription(e.target.value)
  }

  const generateForm = async () => {
    if (description.length > 5) {
      changeStatusWithEnd({
        text: 'Creating form',
        status: 'loading',
      })
      const form = await createForm(description)
      if (typeof form === 'undefined') {
        changeStatusWithEnd({
          text: 'Unknown error',
          status: 'error',
        })
      } else if (typeof form === 'string') {
        changeStatusWithEnd({
          text: form,
          status: 'error',
        })
      } else {
        setData(form)
        changeStatusWithEnd({
          text: 'Form created successfully',
          status: 'good',
        })
      }
    } else {
      changeStatusWithEnd({
        text: 'Description field length must be more than 5 characters',
        status: 'error',
      })
    }
  }

  return (
    <>
      {createFormStatus.status !== 'end' && (
        <StatusNotification status={createFormStatus} />
      )}
      <div className="py-5">
        <h1 className="text-center text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
          Form Creator
        </h1>
        <div className="w-1/2 mx-auto mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div className="col-span-full">
            <label
              className="block text-sm font-medium leading-6 text-gray-900 py-2"
              htmlFor="description"
            >
              Description for creating form:
            </label>
            <input
              type="text"
              className="block w-full rounded-md border-0 outline-none p-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              value={description}
              onChange={handleInputDescriptionChange}
              placeholder="form for students labs"
            />
            <button
              className="my-3 rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              onClick={() => void generateForm()}
            >
              Create
            </button>
          </div>
        </div>
      </div>
      {data !== null && <FormToComponent forms={data} />}
    </>
  )
}

export default App
