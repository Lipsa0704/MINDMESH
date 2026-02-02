import { FixedSizeList } from 'react-window'

const users = Array.from({ length: 1000 }, (_, i) => `User ${i + 1}`)

function App() {
  return (
    <div style={{ padding: 20 }}>
      <h2>Performance Optimization</h2>

      <FixedSizeList
        height={300}
        width={300}
        itemSize={35}
        itemCount={users.length}
      >
        {({ index, style }) => (
          <div style={style}>
            {users[index]}
          </div>
        )}
      </FixedSizeList>
    </div>
  )
}

export default App
