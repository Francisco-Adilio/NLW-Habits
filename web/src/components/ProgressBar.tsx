import * as Progress from '@radix-ui/react-progress'

interface IProgessBar {
  progress: number;
}

export function ProgressBar(props: IProgessBar) {
  return (
    <Progress.Root className="h-3 rounded-xl bg-zinc-700 w-full mt-4" value={props.progress}>
      <Progress.Indicator
        className="h-3 rounded-xl bg-violet-600 transition-all"
        style={{
          width: `${props.progress < 100 ? props.progress : 100}%`
        }}
      />
    </Progress.Root>
  )
}