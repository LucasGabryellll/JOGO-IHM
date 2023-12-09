import { IconType } from 'react-icons';

interface IconProps {
  Icon: IconType;
  size?: string | number;
}

export function Icon({ Icon, size }: IconProps) {
  return (
    <Icon size={size}/>
  );
}