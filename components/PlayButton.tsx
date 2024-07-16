import { FaPlay as PlayIcon } from "react-icons/fa"

const PlayButton = () => {
  return (
    <div
        role="button"
        className="transition opacity-0 rounded-full flex items-center bg-green-500 p-4 drop-shadow-md translate translate-y-/14 group-hover:opacity-100 group-hover:translate-y-0 hover:scale-110"
    >
        <PlayIcon className="text-black" />
    </div>
  )
}

export default PlayButton