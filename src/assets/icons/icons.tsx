type IconProps = {
  className?: string;
  fill?: string;
};

export const Logo = ({ className, fill = "#000" }: IconProps) => (
  <svg
    width="272"
    height="261"
    viewBox="0 0 272 261"
    fill={fill}
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M254 112L172 17"
      stroke="white"
      stroke-width="34"
      stroke-linecap="round"
    />
    <path
      d="M120.525 223.727L108.252 236.203L133.203 260.748L145.475 248.273L120.525 223.727ZM266.475 125.273C273.253 118.383 273.162 107.303 266.273 100.525C259.383 93.7467 248.303 93.8375 241.525 100.727L266.475 125.273ZM145.475 248.273L266.475 125.273L241.525 100.727L120.525 223.727L145.475 248.273Z"
      fill="#FFD500"
    />
    <path
      d="M86.0547 187.416L17.8229 114.31"
      stroke="white"
      stroke-width="34"
      stroke-linecap="round"
    />
    <path
      d="M17 112L100 17"
      stroke="white"
      stroke-width="34"
      stroke-linecap="round"
    />
  </svg>
);

export const LogoDark = ({className}: IconProps) => (
  <svg
    width="272"
    height="261"
    viewBox="0 0 272 261"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M254 112L172 17"
      stroke="black"
      stroke-width="34"
      stroke-linecap="round"
    />
    <path
      d="M120.525 223.727L108.252 236.203L133.203 260.748L145.475 248.273L120.525 223.727ZM266.475 125.273C273.253 118.383 273.162 107.303 266.273 100.525C259.383 93.7467 248.303 93.8375 241.525 100.727L266.475 125.273ZM145.475 248.273L266.475 125.273L241.525 100.727L120.525 223.727L145.475 248.273Z"
      fill="#FFD500"
    />
    <path
      d="M86.0547 187.416L17.8229 114.31"
      stroke="black"
      stroke-width="34"
      stroke-linecap="round"
    />
    <path
      d="M17 112L100 17"
      stroke="black"
      stroke-width="34"
      stroke-linecap="round"
    />
  </svg>
);

export const MoonIcon = ({ className }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 24 24"
    className={className}
  >
    <path
      fill="currentColor"
      d="M11.712 3.45a.75.75 0 0 0-.668-1.197c-5.414.494-8.436 4.752-8.764 9.105c-.328 4.361 2.037 8.975 7.451 10.166c5.686 1.25 11.472-2.837 12.016-8.646a.75.75 0 0 0-1.189-.676c-2.837 2.069-6.08 1.316-8.136-.724c-2.054-2.039-2.8-5.239-.71-8.028"
    ></path>
  </svg>
);

export const SunIcon = ({ className }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 24 24"
    className={className}
  >
    <path fill="currentColor" d="M16 12a4 4 0 1 1-8 0a4 4 0 0 1 8 0"></path>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M9.017 2.8a1 1 0 0 0-1.562.664l-.442 2.82a1 1 0 0 1-.815.831l-2.812.493a1 1 0 0 0-.636 1.574l1.683 2.306a1 1 0 0 1 .01 1.164l-1.64 2.337a1 1 0 0 0 .664 1.562l2.82.442a1 1 0 0 1 .83.815l.493 2.812a1 1 0 0 0 1.574.636l2.307-1.683a1 1 0 0 1 1.164-.01l2.336 1.64a1 1 0 0 0 1.563-.664l.44-2.82a1 1 0 0 1 .817-.83l2.812-.493a1 1 0 0 0 .635-1.574l-1.682-2.307a1 1 0 0 1-.011-1.164l1.64-2.336a1 1 0 0 0-.663-1.563l-2.821-.441a1 1 0 0 1-.83-.816l-.493-2.812a1 1 0 0 0-1.574-.635L12.518 4.43a1 1 0 0 1-1.164.01zM17 12a5 5 0 1 1-10 0a5 5 0 0 1 10 0"
      clipRule="evenodd"
    ></path>
  </svg>
);

export const MenuIcon = ({ className }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 24 24"
    className={className}
  >
    <path
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M2 18c0-1.54 0-2.31.347-2.876c.194-.317.46-.583.777-.777C3.689 14 4.46 14 6 14s2.31 0 2.876.347c.317.194.583.46.777.777C10 15.689 10 16.46 10 18s0 2.31-.347 2.877c-.194.316-.46.582-.777.776C8.311 22 7.54 22 6 22s-2.31 0-2.876-.347a2.35 2.35 0 0 1-.777-.776C2 20.31 2 19.54 2 18m12 0c0-1.54 0-2.31.347-2.876c.194-.317.46-.583.777-.777C15.689 14 16.46 14 18 14s2.31 0 2.877.347c.316.194.582.46.776.777C22 15.689 22 16.46 22 18s0 2.31-.347 2.877a2.36 2.36 0 0 1-.776.776C20.31 22 19.54 22 18 22s-2.31 0-2.876-.347a2.35 2.35 0 0 1-.777-.776C14 20.31 14 19.54 14 18M2 6c0-1.54 0-2.31.347-2.876c.194-.317.46-.583.777-.777C3.689 2 4.46 2 6 2s2.31 0 2.876.347c.317.194.583.46.777.777C10 3.689 10 4.46 10 6s0 2.31-.347 2.876c-.194.317-.46.583-.777.777C8.311 10 7.54 10 6 10s-2.31 0-2.876-.347a2.35 2.35 0 0 1-.777-.777C2 8.311 2 7.54 2 6m12 0c0-1.54 0-2.31.347-2.876c.194-.317.46-.583.777-.777C15.689 2 16.46 2 18 2s2.31 0 2.877.347c.316.194.582.46.776.777C22 3.689 22 4.46 22 6s0 2.31-.347 2.876c-.194.317-.46.583-.776.777C20.31 10 19.54 10 18 10s-2.31 0-2.876-.347a2.35 2.35 0 0 1-.777-.777C14 8.311 14 7.54 14 6"
      color="currentColor"
    ></path>
  </svg>
);
