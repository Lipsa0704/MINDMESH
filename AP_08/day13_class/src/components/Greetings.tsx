type Props = {
  name: string
}

function Greeting({ name }: Props) {
  return <h2>Hello {name}</h2>
}

export default Greeting
