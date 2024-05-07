import { CreateFormStatus } from '../utils/types'
import LoadingDots from './LoadingDots'

interface StatusNotificationProps {
  status: CreateFormStatus
}

const StatusNotification = ({ status }: StatusNotificationProps) => {
  return (
    <div
      className={`fixed flex items-center bottom-[20px] max-w-[550px] z-[110] left-[20px] gap-[10px] border-[2px] border-solid text-gray-900 p-[10px] font-medium text-[20px] leading-none rounded-lg ${
        status.status === 'loading'
          ? 'bg-orange-400 border-orange-500'
          : status.status === 'good'
            ? 'bg-green-500 border-green-700'
            : 'bg-red-500 border-red-700'
      } `}
    >
      <p>{status.text}</p>
      {status.status === 'loading' && <LoadingDots />}
    </div>
  )
}

export default StatusNotification
