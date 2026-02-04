import { Dialog } from "@headlessui/react";
import { useState } from "react";

export default function ModalExample() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex justify-center mt-20">

      <button
        onClick={() => setIsOpen(true)}
        className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-500"
      >
        Open Modal
      </button>

     
      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="relative z-50">
       
        <div className="fixed inset-0 bg-black/40" aria-hidden="true" />

       
        <div className="fixed inset-0 flex items-center justify-center">
          <Dialog.Panel className="bg-white rounded-xl p-6 w-96 shadow-lg">
            <Dialog.Title className="text-lg font-bold">
              Tailwind Modal
            </Dialog.Title>

            <Dialog.Description className="mt-2 text-gray-600">
             Laboriosam voluptas fugit ullam optio pariatur delectus magnam nam facilis rem suscipit! Corrupti, sed veniam!
             Officia neque veritatis omnis pariatur, commodi delectus facere quos ipsam asperiores exercitationem dolorem aliquam laboriosam distinctio impedit veniam quidem, non aperiam iusto necessitatibus assumenda. Consequatur dolor ab voluptatem ea voluptates.
            </Dialog.Description>

            <div className="mt-4 flex justify-end gap-2">
              <button
                onClick={() => setIsOpen(false)}
                className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
              >
                Cancel
              </button>

              <button
                onClick={() => setIsOpen(false)}
                className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-500"
              >
                Confirm
              </button>
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </div>
  );
}
