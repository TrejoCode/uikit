/**
 * @description Custom Feather icon wrapper
 */
/// <reference types="react" />
import { IconProps } from 'react-feather';
import { Ficons } from './types';
interface InterfaceProps extends IconProps {
    icon: Ficons;
}
declare const Feather: ({ icon, size, color, ...rest }: InterfaceProps) => JSX.Element;
export default Feather;
