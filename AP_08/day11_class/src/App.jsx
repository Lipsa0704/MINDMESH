import { Menu } from '@headlessui/react'
import './App.css'


function App() {
  return (
    <div className="p-11">
      <h2 className="text-xl font-bold mb-4 text-cyan-800">
        Component Library Demo
      </h2>

      <Menu as="div" className="relative inline-block text-left ">
        <Menu.Button className="bg-blue-500 text-white px-4 py-2 rounded">
          Options
        </Menu.Button>

        <Menu.Items className="absolute mt-3 w-40 bg-white border rounded shadow">
          <Menu.Item>
            {({ active }) => (
              <button
                className={`block w-full text-left px-4 py-2 ${
                  active ? 'bg-gray-100' : ''
                }`}
              >
                Profile
              </button>
            )}
          </Menu.Item>

          <Menu.Item>
            {({ active }) => (
              <button
                className={`block w-full text-left px-4 py-2 ${
                  active ? 'bg-gray-100' : ''
                }`}
              >
                Logout
              </button>
            )}
          </Menu.Item>
        </Menu.Items>
      </Menu>
    </div>
  )
}

export default App
