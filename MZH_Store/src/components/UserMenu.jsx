import { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import {
  UserCircleIcon,
  HeartIcon,
  ShoppingBagIcon,
  CogIcon,
  ArrowRightOnRectangleIcon,
} from '@heroicons/react/24/outline';

const userNavigation = [
  { name: 'Profile', icon: UserCircleIcon },
  { name: 'Wishlist', icon: HeartIcon },
  { name: 'Orders', icon: ShoppingBagIcon },
  { name: 'Settings', icon: CogIcon },
  { name: 'Sign out', icon: ArrowRightOnRectangleIcon },
];

export default function UserMenu({ isOpen, onClose }) {
  return (
    <Menu as="div" className="relative">
      <Transition
        show={isOpen}
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items
          static
          className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
        >
          {userNavigation.map((item) => (
            <Menu.Item key={item.name}>
              {({ active }) => (
                <a
                  href="#"
                  className={`${
                    active ? 'bg-gray-100' : ''
                  } flex px-4 py-2 text-sm text-gray-700 items-center space-x-2`}
                  onClick={(e) => {
                    e.preventDefault();
                    onClose();
                  }}
                >
                  <item.icon className="h-5 w-5 text-gray-500" />
                  <span>{item.name}</span>
                </a>
              )}
            </Menu.Item>
          ))}
        </Menu.Items>
      </Transition>
    </Menu>
  );
}