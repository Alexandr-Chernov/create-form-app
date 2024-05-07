import { Form } from '../../utils/types'
import templates from '../../utils/templates.json'

const url = 'https://f9b6-35-201-231-244.ngrok-free.app'
const example: Form[] = [
  {
    type: 'question',
    content: 'What is your name?',
  },
  {
    type: 'question',
    content: 'What is your student ID number?',
  },
  {
    type: 'question',
    content: 'What is your major?',
  },
  {
    type: 'question',
    content: 'What is your year of study?',
  },
  {
    type: 'question',
    content: 'What is your email address?',
  },
  {
    type: 'nameOfContact',
    content: 'Emergency Contact Name:',
  },
]

const createForm2 = async (
  /* eslint-disable @typescript-eslint/no-unused-vars */
  description: string,
): Promise<Form[] | string | undefined> => {
  return example
}

/* eslint-disable @typescript-eslint/no-unused-vars */
const createForm = async (
  description: string,
): Promise<Form[] | string | undefined> => {
  const template = templates.first

  try {
    const response = await fetch(`${url}/generate_form`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        json_object: template,
        description: description,
      }),
    })

    if (response.ok) {
      try {
        const responseData = JSON.parse(
          (await response.json()) as string,
        ) as Form[]

        return responseData
      } catch (error) {
        return 'Error parsing form'
      }
    } else {
      return 'Failed to generate form'
    }
  } catch (error) {
    return 'Error generating form'
  }
}

export default createForm2
