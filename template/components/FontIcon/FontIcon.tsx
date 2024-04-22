import {createIconSetFromIcoMoon} from 'react-native-vector-icons';
import icoMoonConfig from './selection.json';
import {TIconProps} from "./fontIcon.types";

const Icon = createIconSetFromIcoMoon(icoMoonConfig);

const FontIcon: TIconProps = ({name, color, size}) => {
    return (
        <Icon name={name} color={color} size={size}/>
    )
}


export default FontIcon
