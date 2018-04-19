type Props = {
  url: {
    query: {
      id: string
    }
  }
}

export default ({
  url: {
    query: { id }
  }
}: Props) => <div>Hello {id}</div>
